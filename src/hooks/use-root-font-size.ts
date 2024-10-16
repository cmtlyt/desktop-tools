import { debounce } from '@cmtlyt/base';
import { useEffect, useState } from 'react';

const root = document.documentElement;
const getSize = () => parseFloat(getComputedStyle(root).fontSize);

export function useRootFontSize() {
  const [fontSize, setFontSize] = useState(getSize());

  useEffect(() => {
    setFontSize(getSize());

    const updateSize = debounce(() => setFontSize(getSize()), 300);

    window.addEventListener('resize', updateSize);
    window.addEventListener('orientationchange', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('orientationchange', updateSize);
    };
  }, []);

  return fontSize;
}

export { getSize as getRootSize };
