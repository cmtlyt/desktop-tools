import { MutableRefObject, useEffect, useMemo, useRef } from 'react';
import { withResolvers } from '@cmtlyt/base';

export interface MessageData<O extends object, A extends keyof O = keyof O> {
  action: A;

  option: O[A];

  [key: string]: unknown;
}

export type WorkerMessageEvent<O extends object, A extends keyof O = keyof O> = MessageEvent<MessageData<O, A>>;

// @ts-expect-error any
type DataType<T extends keyof O | (string & {}), O> = O[T] extends undefined ? Record<string, unknown> : O[T];

export type WorkerHandler<O extends object = object> = {
  action: <T extends keyof O | (string & {})>(
    type: T,
    data?: Omit<DataType<T, O>, 'result'>,
    transfer?: Transferable[],
    // @ts-expect-error any
  ) => Promise<Awaited<DataType<T, O>['result']>>;
} & Worker;

function createHandler<O extends object>(worker: MutableRefObject<Worker | null>): WorkerHandler<O> {
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
    } as WorkerHandler<O>,
    {
      get(target, prop, receive) {
        if (prop in target) {
          return Reflect.get(target, prop, receive);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const value = (worker.current as any)[prop];
        if (typeof value === 'function') {
          return value.bind(worker.current);
        }
        return value;
      },
    },
  );
}

export function useWebWorker<O extends object>(
  url: URL | string,
  init?: (workerHandler: WorkerHandler<O>) => void,
): WorkerHandler<O> {
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
