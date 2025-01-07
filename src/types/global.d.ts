import type { BridgeApi } from '../../electron/preload';

declare global {
  const $$bridge: BridgeApi;
  interface Window {
    $$bridge: BridgeApi;
    logger: {
      debug: (...args: unknown[]) => void;
      info: (...args: unknown[]) => void;
      todo: (...args: unknown[]) => void;
    };
  }
}

export {};
