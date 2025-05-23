import { logger } from '@/utils';
import { forwardRef, memo, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
import { filterImage } from './utils';

interface ComposeOptions {
  replaceColor?: string;
  autoRender?: boolean;
  jitterRange?: number;
  filterList?: string[];
}

export interface ComposeResult {
  oriImageData: ImageData;
  imageData: ImageData;
  imageUrl: string;
}

export interface CanvasRef {
  compose: (imgs: string[], options?: ComposeOptions) => Promise<ComposeResult | null>;
  render: (imageData?: ImageData | null) => void;
  getImageUrl: (noCache?: boolean) => Promise<string | undefined>;
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
  if (info.options.replaceColor !== newInfo.options.replaceColor) return null;
  if (info.options.jitterRange !== newInfo.options.jitterRange) return null;
  if (info.options.filterList?.join(',') === newInfo.options.filterList?.join(',')) return info.result;

  /// 滤镜不同
  info.options.filterList = newInfo.options.filterList;
  if (!info.result) return null;
  const newImageData = cloneImageData(info.result.oriImageData);
  info.result.imageUrl = '';
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

const StyledCanvas = styled.canvas`
  display: none;
`;

export const ComposeCanvas = memo(
  forwardRef<CanvasRef>(function (props, ref) {
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
          const imageInfo = {
            width,
            height,
            data: Array.from({ length: width * height * 4 }, (_, idx) => {
              const flag = idx % 4;
              return flag === 3 ? 255 : targetColor[flag];
            }),
          };

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
            imageUrl: '',
          };
          if (filterList.length) result.imageData = await filterImage(imageData, filterList);
          return result;
        })
        .then(async (result) => {
          composeCacheRef.current = { result, imgs, options };
          if (!result) return null;
          const { autoRender = true } = options;
          const { imageData } = result;
          if (autoRender) renderCanvas(imageData);
          result.imageUrl = (await getImageUrl()) || '';
          return result;
        });
    };

    const getImageUrl = async (noCache = false) => {
      if (!noCache && composeCacheRef.current?.result?.imageUrl) return composeCacheRef.current.result.imageUrl;
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

    return <StyledCanvas ref={canvasRef} {...props} />;
  }),
);
