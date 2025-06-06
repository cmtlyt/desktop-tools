import { useCallback, useState } from 'react';

export function useForceUpdate() {
  const [, update] = useState(0);
  return useCallback(() => {
    update((v) => ++v % 10);
  }, []);
}
