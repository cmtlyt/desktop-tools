import { useCallback, useEffect, useRef, useState } from 'react';
import domToImage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { noop } from '@cmtlyt/base';
import { logger } from '@/utils';
import { useWebWorker } from '@/hooks';
import { OptionMap } from './resize-worker';
import { getDYYLStore } from './store';
import workerUrl from './resize-worker?worker&url';

export function useBoundingClientRect($dom: HTMLElement | null) {
  const [size, setSize] = useState<DOMRect | null>();
  const sizeCache = useRef<DOMRect | null>();
  const applyDomRect = useRef(noop);

  useEffect(() => {
    if (!$dom) return;

    const resizeCallback = (applyDomSize = false) => {
      const rect = $dom.getBoundingClientRect();
      const { saveSize, setSaveSize } = getDYYLStore();

      let width = saveSize.width || rect.width;
      let height = saveSize.height || rect.height;

      if (applyDomSize) {
        width = rect.width;
        height = rect.height;
      } else if (sizeCache.current) {
        const { width: w, height: h } = sizeCache.current;
        if (w === width) width = rect.width;
        if (h === height) height = rect.height;
      }

      setSaveSize({ width, height, aspectRatio: width / height });
      sizeCache.current = rect;
      setSize(rect);
    };

    const observer = new ResizeObserver(() => resizeCallback());

    resizeCallback();
    applyDomRect.current = () => resizeCallback(true);

    observer.observe($dom);

    return () => observer.disconnect();
  }, [$dom]);

  return [size, applyDomRect.current] as const;
}

export function useDownload() {
  const workerHandler = useWebWorker<OptionMap>(workerUrl);

  return useCallback(
    async ($dom: HTMLElement | null) => {
      if (!$dom) return;

      const { saveSize } = getDYYLStore();
      const rest = $dom.getBoundingClientRect();

      let { width, height } = saveSize;
      width ||= rest.width;
      height ||= rest.height;

      // const cloneDom = $dom.cloneNode(true) as HTMLElement;
      // $dom.parentElement?.appendChild(cloneDom);

      const needResize = width !== rest.width || height !== rest.height;

      return domToImage
        .toBlob($dom)
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          if (!needResize) return url;
          logger.appear('dyylpt.resize-download', { ow: rest.width, oh: rest.height, nw: width, nh: height });
          return workerHandler.action('resize', { url, width, height }).then((res) => {
            URL.revokeObjectURL(url);
            return res;
          });
        })
        .then((url) => {
          if (!url) return;
          saveAs(url, `${new Date().toLocaleString()}.png`);
          URL.revokeObjectURL(url);
        });
    },
    [workerHandler],
  );
}
