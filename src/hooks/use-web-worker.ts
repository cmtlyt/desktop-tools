import { MutableRefObject, useEffect, useMemo, useRef } from 'react';
import { withResolvers } from '@cmtlyt/base';

function createHandler(worker: MutableRefObject<Worker | null>) {
  return new Proxy(
    {
      async action(type: string, data?: Record<string, unknown>, transfer: Transferable[] = []) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { promise, resolve } = withResolvers<any>();

        const func = ({ data: { result } }: MessageEvent) => {
          resolve(result);
          worker.current?.removeEventListener('message', func);
        };

        worker.current?.addEventListener('message', func);
        worker.current?.postMessage({ action: type, option: data }, transfer);

        return promise;
      },
    } as {
      action: (type: string, data?: Record<string, unknown>, transfer?: Transferable[]) => Promise<unknown>;
    } & Worker,
    {
      get(target, prop, receive) {
        if (prop in target) {
          return Reflect.get(target, prop, receive);
        }
        return Reflect.get(worker.current || {}, prop, worker.current);
      },
    },
  );
}

export type WorkerHandler = ReturnType<typeof createHandler>;

export function useWebWorker(url: URL, init?: (workerHandler: WorkerHandler) => void) {
  const worker = useRef<Worker | null>(null);

  const workerHandler = useMemo(() => createHandler(worker), []);

  useEffect(() => {
    worker.current = new Worker(url, { type: 'module' });

    init?.(workerHandler);

    return () => {
      worker.current?.terminate();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return workerHandler;
}
