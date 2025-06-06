import { useEffect, useRef } from 'react';
import { shallow } from 'zustand/shallow';
import { isNaN } from '@cmtlyt/base';
import { getRootSize, useRootFontSize } from './use-root-font-size';
import { Many } from '@/types';
import { useForceUpdate } from './use-force-update';

type TransformCallback = (size: number, rootFontSize: number) => string;

function getSize<T extends Many<string | number>>(sizes: T, rootFontSize: number, transform?: TransformCallback) {
  const getResult = (size: string | number) => (transform ? transform(size as number, rootFontSize) : size);
  const handler = (fontSize: string | number) => {
    if (typeof fontSize === 'string') {
      const numFontSize = parseFloat(fontSize);
      if (isNaN(numFontSize)) return getResult(fontSize);
      if (String(numFontSize) === fontSize) return transform ? getResult(numFontSize) : `${numFontSize}rem`;
      return getResult(fontSize);
    }
    if (transform) return getResult(fontSize);
    return `${fontSize / rootFontSize}rem`;
  };
  if (Array.isArray(sizes)) {
    return sizes.map(handler) as T extends unknown[] ? string[] : string;
  }
  return handler(sizes as string | number) as T extends unknown[] ? string[] : string;
}

export function useFormatFontSize<T extends Many<string | number>>(fontSize: T, transform?: TransformCallback) {
  const rootFontSize = useRootFontSize();
  const sizes = useRef(getSize(fontSize, rootFontSize, transform));
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const nextSizes = getSize(fontSize, rootFontSize, transform);
    if (shallow(sizes.current, nextSizes)) return;
    sizes.current = nextSizes;
    forceUpdate();
  }, [fontSize, rootFontSize, forceUpdate, transform]);

  return sizes.current as T extends unknown[] ? string[] : string;
}

export function formatSize<T extends Many<string | number>>(size: T) {
  const rootSize = getRootSize();
  return getSize(size, rootSize);
}
