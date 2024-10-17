import { useEffect, useRef, useState } from 'react';
import { shallow } from 'zustand/shallow';
import { isNaN } from '@cmtlyt/base';
import { getRootSize, useRootFontSize } from './use-root-font-size';
import { Many } from '@/types';

function getSize<T extends Many<string | number>>(sizes: T, rootFontSize: number) {
  const handler = (fontSize: string | number) => {
    if (typeof fontSize === 'string') {
      const numFontSize = parseFloat(fontSize);
      if (isNaN(numFontSize)) return fontSize;
      if (String(numFontSize) === fontSize) return `${numFontSize}rem`;
      return fontSize;
    }
    return `${fontSize / rootFontSize}rem`;
  };
  if (Array.isArray(sizes)) {
    return sizes.map(handler) as T extends unknown[] ? string[] : string;
  }
  return handler(sizes as string | number) as T extends unknown[] ? string[] : string;
}

export function useFormatFontSize<T extends Many<string | number>>(fontSize: T) {
  const rootFontSize = useRootFontSize();
  const sizes = useRef(getSize(fontSize, rootFontSize));
  const [, forceUpdate] = useState<number>(0);

  useEffect(() => {
    const nextSizes = getSize(fontSize, rootFontSize);
    if (shallow(sizes.current, nextSizes)) return;
    sizes.current = nextSizes;
    forceUpdate(Math.random());
  }, [fontSize, rootFontSize]);

  return sizes.current as T extends unknown[] ? string[] : string;
}

export function formatSize<T extends Many<string | number>>(size: T) {
  const rootSize = getRootSize();
  return getSize(size, rootSize);
}
