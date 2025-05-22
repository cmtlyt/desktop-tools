import { forwardRef, memo, useImperativeHandle, useRef, useState } from 'react';
import { Select, SelectProps, Upload, UploadProps } from 'antd';
import styled from 'styled-components';
import { isNaN } from '@cmtlyt/base';
import { FlexBox } from '@/components/base';
import { filterImage, filterOptions } from './utils';
import { logger } from '@/utils';

export const Wrapper = styled(FlexBox)`
  padding: var(--page-padding);
`;

const FileInputPlaceholder = styled(FlexBox)`
  position: absolute;
  inset: 0;
  background: var(--color-bg-1);
  border-radius: var(--radius-base);
  cursor: pointer;
`;

const { Dragger } = Upload;

const StyledDragger = styled(Dragger)`
  width: 100%;
  height: 4rem;

  .ant-upload-list-picture-card {
    padding: 0.4rem 0;
    flex-wrap: nowrap !important;
    overflow-x: auto;

    .ant-upload-list-item-container {
      flex-shrink: 0;
    }
  }
`;

const DraggerWrapper = styled.section`
  height: 15rem;
`;

export function UploadInput(props: Omit<UploadProps, 'onChange'> & { onChange?: (imgs: string[]) => void }) {
  const { onChange, ...rest } = props;
  const [fileList, setFileList] = useState<Required<UploadProps>['fileList']>([]);

  const changeHandler: UploadProps['onChange'] = (info) => {
    const { fileList: files } = info;
    setFileList(files);
    const urls = files.map((item) => (item.url = item.response?.url)).filter(Boolean);
    onChange?.(urls);
  };

  const customRequest: UploadProps['customRequest'] = ({ file, onSuccess }) => {
    const url = URL.createObjectURL(file as File);
    onSuccess?.({ url, revoke: () => URL.revokeObjectURL(url) });
  };

  const removeHandler: UploadProps['onRemove'] = (file) => {
    const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    const [delFile] = newFileList.splice(index, 1);
    delFile.response?.revoke?.();
    setFileList(newFileList);
  };

  return (
    <DraggerWrapper>
      <StyledDragger
        {...rest}
        fileList={fileList}
        listType="picture-card"
        multiple
        accept="image/*"
        onChange={changeHandler}
        onRemove={removeHandler}
        customRequest={customRequest}
      >
        <FileInputPlaceholder $alignItems="center" $justifyContent="center">
          请选择图片
        </FileInputPlaceholder>
      </StyledDragger>
    </DraggerWrapper>
  );
}

const StyledCanvas = styled.canvas`
  flex: 1;
  width: 100%;
  object-fit: contain;
`;

interface ComposeOptions {
  replaceColor?: string;
  autoRender?: boolean;
  jitterRange?: number;
  filterList?: string[];
}

export interface ComposeResult {
  oriImageData: ImageData;
  imageData: ImageData;
}

export interface CanvasRef {
  compose: (imgs: string[], options?: ComposeOptions) => Promise<ComposeResult | null>;
  render: (imageData?: ImageData | null) => void;
  getImageUrl: () => Promise<string | undefined>;
  clear: () => void;
}

function parseColor(color: string) {
  if (color.startsWith('#')) {
    const [r, g, b] = color.match(/\w{2}/g)?.map((item) => parseInt(item, 16)) ?? [];
    return { r, g, b };
  } else if (color.startsWith('rgb')) {
    color = color.replace(/^rgba?\((.*?)\)$/, '$1');
  }
  const [r = 0, g = 0, b = 0] = color
    .split(',')
    .map((item) => parseInt(item.trim(), 10))
    .filter((item) => !isNaN(item));
  return { r, g, b };
}

function colorMatch(
  rgb: readonly [number, number, number] | [number, number, number],
  target: readonly [number, number, number] | [number, number, number],
  jitterRange: number,
) {
  return rgb.every((item, idx) => Math.abs(item - target[idx]) < jitterRange);
}

interface ComposeCache {
  result: ComposeResult | null;
  imgs: string[];
  options: ComposeOptions;
}

async function applyCache(
  info: ComposeCache | null,
  newInfo: Pick<ComposeCache, 'imgs' | 'options'>,
): Promise<ComposeResult | null> {
  if (!info) return null;
  if (info.imgs.join(',') !== newInfo.imgs.join(',')) return null;
  if (info.options.filterList?.join(',') === newInfo.options.filterList?.join(',')) return info.result;

  /// 滤镜不同
  info.options.filterList = newInfo.options.filterList;
  if (!info.result) return null;
  const newImageData = cloneImageData(info.result.oriImageData);
  if (!info.options.filterList) {
    info.result.imageData = newImageData;
    return info.result;
  }
  info.result.imageData = await filterImage(newImageData, info.options.filterList);
  return info.result;
}

function cloneImageData(imageData: ImageData) {
  return new ImageData(new Uint8ClampedArray(Array.from(imageData.data)), imageData.width, imageData.height);
}

export const ResultCanvas = memo(
  forwardRef<CanvasRef>(function (_, ref) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasCtxRef = useRef<CanvasRenderingContext2D | null | undefined>(null);
    const composeCacheRef = useRef<ComposeCache | null>(null);

    const renderCanvas = (imageData?: ImageData | null) => {
      if (!canvasRef.current || !imageData) return;
      const ctx = (canvasCtxRef.current ||= canvasRef.current.getContext('2d'));
      if (!ctx) return;
      clearCanvas(ctx);
      canvasRef.current.width = imageData.width;
      canvasRef.current.height = imageData.height;
      ctx.putImageData(imageData, 0, 0);
    };

    const clearCanvas = (ctx?: CanvasRenderingContext2D | null) => {
      ctx ||= canvasCtxRef.current ||= canvasRef.current?.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    const compose: CanvasRef['compose'] = async (imgs, options = {}) => {
      if (!canvasRef.current) return null;
      if (!imgs.length) {
        clearCanvas();
        return null;
      }
      const cache = await applyCache(composeCacheRef.current, { imgs, options });
      if (cache) {
        const { imageData } = cache;
        logger.appear('pht.compose.appear-cache');
        renderCanvas(imageData);
        return cache;
      }
      const $renderCanvas = document.createElement('canvas');
      const ctx = $renderCanvas.getContext('2d');
      if (!ctx) return null;
      return Promise.all<HTMLImageElement>(
        imgs.map((item) => {
          const image = new Image();
          return new Promise((resolve) => {
            image.onload = () => resolve(image);
            image.src = item;
          });
        }),
      )
        .then((images) => {
          if (!images.length) return null;

          const { replaceColor = '#000000', jitterRange = 10 } = options;
          const { r, g, b } = parseColor(replaceColor);
          const targetColor = [r, g, b] as const;
          const { width, height } = images[0];
          const imageInfo = { width, height, data: new Array(width * height * 4) };

          images.forEach((item) => {
            $renderCanvas.width = item.width;
            $renderCanvas.height = item.height;
            ctx.drawImage(item, 0, 0);
            const imageData = ctx.getImageData(0, 0, item.width, item.height);
            clearCanvas(ctx);
            const { data } = imageData;
            for (let i = 0; i < data.length; i += 4) {
              const sourceColor = [data[i], data[i + 1], data[i + 2], data[i + 3]] as const;
              if (!colorMatch(sourceColor.slice(0, 3) as [number, number, number], targetColor, jitterRange)) {
                sourceColor.forEach((item, idx) => (imageInfo.data[i + idx] = item));
              }
            }
          });

          return imageInfo;
        })
        .then(async (imageInfo) => {
          if (!imageInfo) return null;
          const { filterList = [] } = options;
          const imageData = ctx.createImageData(imageInfo.width, imageInfo.height, { colorSpace: 'srgb' });
          imageData.data.set(imageInfo.data);
          const result: ComposeResult = {
            oriImageData: cloneImageData(imageData),
            imageData: imageData,
          };
          if (filterList.length) result.imageData = await filterImage(imageData, filterList);
          return result;
        })
        .then((result) => {
          composeCacheRef.current = { result, imgs, options };
          if (!result) return null;
          const { autoRender = true } = options;
          const { imageData } = result;
          if (autoRender) renderCanvas(imageData);
          return result;
        });
    };

    const getImageUrl = async () => {
      return new Promise<string | undefined>((resolve) => {
        if (!canvasRef.current) return;
        canvasRef.current.toBlob(
          (res) => {
            if (!res) return resolve(void 0);
            resolve(URL.createObjectURL(res));
          },
          'image/webp',
          1,
        );
      });
    };

    useImperativeHandle(ref, () => ({ compose, render: renderCanvas, getImageUrl, clear: () => clearCanvas() }));

    return <StyledCanvas ref={canvasRef} />;
  }),
);

const StyledSelect = styled(Select)`
  padding: 0 0 0.6rem;
  width: 100%;
`;

export const ImageFilterSelect = memo(function (props: { onChange?: (value: string[]) => void }) {
  const { onChange } = props;

  const changeHandler: SelectProps['onChange'] = (value) => {
    onChange?.(value);
  };

  return (
    <StyledSelect
      mode="multiple"
      allowClear
      placeholder="请选择滤镜"
      onChange={changeHandler}
      options={filterOptions}
    />
  );
});
