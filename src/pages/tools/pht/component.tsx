import { forwardRef, memo, useImperativeHandle, useRef, useState } from 'react';
import { Upload, UploadProps } from 'antd';
import styled from 'styled-components';
import { isNaN } from '@cmtlyt/base';
import { FlexBox } from '@/components/base';

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
    padding: 1rem 0;
    flex-wrap: nowrap;
    overflow-x: auto;

    .ant-upload-list-item-container {
      flex-shrink: 0;
    }
  }
`;

export function UploadInput(props: Omit<UploadProps, 'onChange'> & { onChange?: (imgs: string[]) => void }) {
  const { onChange, ...rest } = props;
  const [fileList, setFileList] = useState<UploadProps['fileList']>([]);

  const changeHandler: UploadProps['onChange'] = (info) => {
    const { fileList: files } = info;
    setFileList(files);
    const urls = files.map((item) => item.response?.url).filter(Boolean);
    onChange?.(urls);
  };

  const customRequest: UploadProps['customRequest'] = ({ file, onSuccess }) => {
    const url = URL.createObjectURL(file as File);
    onSuccess?.({ url });
  };

  return (
    <StyledDragger
      {...rest}
      fileList={fileList}
      listType="picture-card"
      multiple
      accept="image/*"
      onChange={changeHandler}
      customRequest={customRequest}
    >
      <FileInputPlaceholder $alignItems="center" $justifyContent="center">
        请选择图片
      </FileInputPlaceholder>
    </StyledDragger>
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
}

export interface CanvasRef {
  compose: (imgs: string[], options?: ComposeOptions) => Promise<ImageData | null>;
  render: (imageData?: ImageData | null) => void;
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

export const ResultCanvas = memo(
  forwardRef<CanvasRef>(function (_, ref) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasCtxRef = useRef<CanvasRenderingContext2D | null | undefined>(null);

    const renderCanvas = (imageData?: ImageData | null) => {
      if (!canvasRef.current || !imageData) return;
      const ctx = (canvasCtxRef.current ||= canvasRef.current.getContext('2d'));
      if (!ctx) return;
      clearCanvas();
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
        .then((imageInfo) => {
          if (!imageInfo) return null;
          const { autoRender = true } = options;
          const imageData = ctx.createImageData(imageInfo.width, imageInfo.height, { colorSpace: 'srgb' });
          imageData.data.set(imageInfo.data);
          if (autoRender) renderCanvas(imageData);
          return imageData;
        });
    };

    useImperativeHandle(ref, () => ({ compose, render: renderCanvas, clear: () => clearCanvas() }));

    return <StyledCanvas ref={canvasRef} />;
  }),
);
