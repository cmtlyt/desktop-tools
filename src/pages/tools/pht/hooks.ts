import { useCallback, useEffect, useRef, useState } from 'react';
import { noop, onceFunc, sleep, tryCall, withResolvers } from '@cmtlyt/base';
import { useWebWorker, WorkerHandler } from '@/hooks/use-web-worker';
import { logger } from '@/utils';

const workerUrl = new URL('./compose-worker.ts', import.meta.url);

interface ComposeOptions {
  replaceColor?: string;
  jitterRange?: number;
  filterList?: string[];
}

export interface ComposeHandler {
  compose: (imgs: string[], options?: ComposeOptions) => Promise<void>;
}

interface CacheCtx {
  dirty: boolean;
  width: number;
  height: number;
  images: string[];
  jitterRange: number;
  replaceColor: string;
  filterList: string[];
}

export function useComposeHandler() {
  const canvasRef = useRef<HTMLCanvasElement>(document.createElement('canvas'));
  const cacheRef = useRef<CacheCtx>({
    dirty: true,
    width: 0,
    height: 0,
    images: [],
    jitterRange: 30,
    replaceColor: '#000000',
    filterList: [],
  });
  const workerHandler = useWebWorker(
    workerUrl,
    onceFunc((worker: WorkerHandler) => {
      logger.warn('如果需要调整本页面相关内容, 请先关闭 React 的严格渲染模式');
      tryCall(() => {
        const offscreen = canvasRef.current?.transferControlToOffscreen();
        if (!offscreen || !worker) return;
        worker.action('init', { offscreen }, [offscreen]);
      }, noop);
    }),
  );
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const errorHandler = (e: ErrorEvent) => {
      setError(e.message);
      setLoading(false);
    };

    workerHandler.addEventListener('error', errorHandler);

    return () => {
      workerHandler.removeEventListener('error', errorHandler);
    };
  }, [workerHandler]);

  const compose: ComposeHandler['compose'] = useCallback(
    async (imgs, options = {}) => {
      setError('');

      if (!canvasRef.current || !imgs.length) {
        setImageUrl('');
        return;
      }

      const { replaceColor = '#000000', jitterRange = 30 } = options;

      setLoading(true);

      const cacheInfo = cacheRef.current;

      return Promise.resolve()
        .then(() => {
          if (
            cacheInfo.images.toString() === imgs.toString() &&
            cacheInfo.jitterRange === jitterRange &&
            cacheInfo.replaceColor === replaceColor
          ) {
            return;
          }

          cacheInfo.dirty = true;
          cacheInfo.images = imgs;
          cacheInfo.jitterRange = jitterRange;
          return workerHandler.action('compose', { imgs, options });
        })
        .then(() => {
          if (!cacheInfo.dirty && cacheInfo.filterList.toString() === options.filterList?.toString()) return;

          cacheInfo.dirty = true;
          cacheInfo.filterList = options.filterList || [];
          return workerHandler.action('filter', { filterList: options.filterList });
        })
        .then(async () => {
          if (!cacheInfo.dirty) return;

          await workerHandler.action('drawImage');

          await sleep(100);

          const { promise, resolve } = withResolvers<undefined>();
          canvasRef.current.toBlob((blob) => {
            if (!blob) return resolve(void 0);
            URL.revokeObjectURL(imageUrl);
            const url = URL.createObjectURL(blob);
            setImageUrl(url);
            resolve(void 0);
          });

          return promise;
        })
        .finally(() => {
          cacheInfo.dirty = false;
          setLoading(false);
        });
    },
    [imageUrl, workerHandler],
  );

  return { loading, imageUrl, error, compose };
}
