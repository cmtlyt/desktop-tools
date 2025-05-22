import { FlexBox } from '@/components/base';
import { Show } from '@/components/show';
import { isNaN } from '@cmtlyt/base';
import React, { forwardRef, memo, useImperativeHandle, useRef, useState } from 'react';
import styled from 'styled-components';

export const Wrapper = styled(FlexBox)`
  padding: var(--page-padding);
`;

const FileInput = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
`;

const FileInputPlaceholder = styled(FlexBox)`
  position: absolute;
  inset: 0;
  background: var(--color-bg-1);
  border-radius: var(--radius-base);
  cursor: pointer;
  outline: 0.1rem dotted black;
  font-size: 2rem;

  &:hover {
    outline: 0.1rem dotted var(--color-active);
  }
`;

const FileInputWrapper = styled(FlexBox)`
  box-sizing: border-box;
  position: relative;
  padding: 1rem;
  width: 100%;
  min-height: 12rem;
`;

const PreviewImg = styled.img`
  flex-shrink: 0;
  width: 10rem;
  height: 10rem;
  object-fit: contain;
`;

export function UploadInput(
  props: Omit<React.HTMLProps<HTMLInputElement>, 'onChange'> & { onChange?: (imgs: string[]) => void },
) {
  const { onChange, ...rest } = props;
  const [previewImage, setPreviewImage] = useState<string[]>([]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    const urls = Array.from(files).map((item) => {
      return URL.createObjectURL(item);
    });
    setPreviewImage(urls);
    onChange?.(urls);
  };

  return (
    <FileInputWrapper $wrap="wrap">
      <FileInput type="file" multiple accept="image/*" {...rest} onChange={changeHandler} />
      <Show when={!previewImage.length}>
        {() => (
          <FileInputPlaceholder $alignItems="center" $justifyContent="center">
            请选择图片
          </FileInputPlaceholder>
        )}
      </Show>
      {previewImage.map((item) => (
        <PreviewImg key={item} src={item} alt="" />
      ))}
    </FileInputWrapper>
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

    const renderCanvas = (imageData?: ImageData | null) => {
      if (!canvasRef.current || !imageData) return;
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      canvasRef.current.width = imageData.width;
      canvasRef.current.height = imageData.height;
      ctx.putImageData(imageData, 0, 0);
    };

    const compose: CanvasRef['compose'] = async (imgs, options = {}) => {
      if (!canvasRef.current || !imgs.length) return null;
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
            ctx.clearRect(0, 0, item.width, item.height);
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

    useImperativeHandle(ref, () => ({ compose, render: renderCanvas }));

    return <StyledCanvas ref={canvasRef} />;
  }),
);
