import { ipcRenderer, contextBridge } from 'electron';
import type { TArgsType, TFlatPromise, TFunc, TTailTypes } from '@cmtlyt/base';

type Api = typeof import('./bridge/_index');

export type BridgeApi = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in keyof Api]: Api[K] extends TFunc<any[], infer R>
    ? TFunc<TTailTypes<TArgsType<Api[K]>>, TFlatPromise<R>>
    : undefined;
};

const $$bridge: BridgeApi = {
  openBrowser(url) {
    return ipcRenderer.invoke('openBrowser', url);
  },
};

contextBridge.exposeInMainWorld('$$bridge', $$bridge);
