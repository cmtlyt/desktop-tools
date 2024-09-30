declare global {
  interface Window {
    logger: {
      debug: (...args: unknown[]) => void;
      info: (...args: unknown[]) => void;
      todo: (...args: unknown[]) => void;
    };
  }
}

export {};
