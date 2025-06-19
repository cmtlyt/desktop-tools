import { useCallback, useEffect, useRef, useState } from 'react';
import { saveAs } from 'file-saver';
import { noop, withResolvers } from '@cmtlyt/base';
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

const modCache = {} as {
  snapdom: typeof import('@zumer/snapdom').snapdom;
  domToImage: typeof import('dom-to-image').default;
};

async function getMod<T extends 'snapdom' | 'domToImage'>(mtype: T): Promise<(typeof modCache)[T]> {
  if (mtype === 'snapdom') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (modCache.snapdom ||= (await import('@zumer/snapdom')).snapdom) as unknown as any;
  } else if (mtype === 'domToImage') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (modCache.domToImage ||= (await import('dom-to-image')).default) as unknown as any;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return null as any;
}

async function getImageUrl($dom: HTMLElement | null, mtype: 'snapdom' | 'domToImage' = 'snapdom') {
  if (!$dom) return Promise.resolve('');
  if (mtype === 'snapdom') {
    const {
      saveSize: { scale },
    } = getDYYLStore();

    return (await getMod(mtype))($dom, { scale: window.devicePixelRatio * scale })
      .then((result) => result.toCanvas())
      .then((canvas) => {
        const { promise, resolve } = withResolvers<string>();
        canvas.toBlob((blob) => resolve(URL.createObjectURL(blob!)), 'image/webp', 1);
        return promise;
      });
  } else if (mtype === 'domToImage') {
    return (await getMod(mtype)).toBlob($dom).then((blob) => URL.createObjectURL(blob));
  }
}

export function useDownload() {
  const workerHandler = useWebWorker<OptionMap>(workerUrl);

  return useCallback(
    async ($dom: HTMLElement | null) => {
      if (!$dom) return;

      let needResize = false;
      const { printMod: transUrlMod } = getDYYLStore();
      let width = 0;
      let height = 0;
      let rest = {} as DOMRect;

      if (transUrlMod !== 'snapdom') {
        const { saveSize } = getDYYLStore();
        rest = $dom.getBoundingClientRect();

        width = saveSize.width || rest.width;
        height = saveSize.height || rest.height;

        needResize = width !== rest.width || height !== rest.height;
      }

      logger.appear('dyylpt.download', { mod: transUrlMod });

      return getImageUrl($dom, transUrlMod)
        .then((url) => {
          if (!url) return;
          if (!needResize) return url;
          logger.appear('dyylpt.resize-download', { ow: rest.width, oh: rest.height, nw: width, nh: height });
          return workerHandler.action('resize', { url, width, height }).then((res) => {
            URL.revokeObjectURL(url);
            return res;
          });
        })
        .then((url) => {
          if (!url) return;
          saveAs(url, `${new Date().toLocaleString()}.${transUrlMod === 'snapdom' ? 'webp' : 'png'}`);
          URL.revokeObjectURL(url);
        });
    },
    [workerHandler],
  );
}
