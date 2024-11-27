export * from './local-key';
export * from './session-key';
export * from './storage-key';
export * from './flow';
export * from './opfs-key';

export const isProd = process.env.NODE_ENV === 'production';
