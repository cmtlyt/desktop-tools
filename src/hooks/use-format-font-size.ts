import { useEffect, useState } from 'react';
import { isNaN } from '@cmtlyt/base';
import { getRootSize, useRootFontSize } from './use-root-font-size';

function getSize(fontSize: string | number, rootFontSize: number) {
  if (typeof fontSize === 'string') {
    const numFontSize = parseFloat(fontSize);
    if (isNaN(numFontSize)) return fontSize;
    if (String(numFontSize) === fontSize) return `${numFontSize}rem`;
    return fontSize;
  }
  return `${fontSize / rootFontSize}rem`;
}

export function useFormatFontSize(fontSize: string | number) {
  const rootFontSize = useRootFontSize();
  const [size, setSize] = useState(getSize(fontSize, rootFontSize));

  useEffect(() => {
    setSize(getSize(fontSize, rootFontSize));
  }, [fontSize, rootFontSize]);

  return size;
}

export function formatSize(size: string | number) {
  const rootSize = getRootSize();
  return getSize(size, rootSize);
}
