import { TAnyFunc } from '@cmtlyt/base';
import { BridgeApi } from 'electron/preload';

export function getBridgeApi(): BridgeApi {
  return $$bridge || new Proxy(Object.create(null), { get: () => () => {} });
}

export function callBridgeApi<F extends keyof BridgeApi, A extends TAnyFunc = BridgeApi[F]>(
  name: F,
  ...args: Parameters<A>
): ReturnType<A> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return getBridgeApi()[name]!(...(args as any)) as any;
}
