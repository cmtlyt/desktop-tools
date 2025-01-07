export * from './local-key';
export * from './session-key';
export * from './storage-key';
export * from './flow';
export * from './opfs-key';

export const IS_PROD = process.env.NODE_ENV === 'production';

export const IS_DESKTOP_APP = (() => {
  try {
    return process.env.VITE_DESKTOP_APP === 'true';
  } catch {
    return import.meta.env.VITE_DESKTOP_APP === 'true';
  }
})();
