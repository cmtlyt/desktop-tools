import { useEffect, useRef, useState } from 'react';
import { getLayoutStore, useKeyStoreSlice } from '@/store';
import { logger } from '@/utils';

export function useKeyGuard(key: unknown, cb: () => void = () => {}) {
  const { has, keys } = useKeyStoreSlice(['has', 'keys']);
  const [pass, setPass] = useState(false);
  const callback = useRef(cb);

  useEffect(() => {
    callback.current = cb;
  }, [cb]);

  useEffect(() => {
    const result = has(key);
    setPass(result);

    if (!result) {
      logger.error('非法访问');
      getLayoutStore().showMessage({
        type: 'error',
        content: '非法访问, 系统将会记录本次访问',
        duration: 2,
        onClose: callback.current,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keys]);

  return pass;
}
