import { useRef } from 'react';
import { shallow } from 'zustand/shallow';
import { Many } from '@/types';
import { pick } from '@/utils';

export function useSelector<S extends object, K extends keyof S>(keys: Many<K>): (store: S) => Pick<S, K> {
  const prev = useRef({} as Pick<S, K>);

  return (store: S) => {
    if (!store) return prev.current;

    const next = pick(store, keys);

    return shallow(prev.current, next) ? prev.current : (prev.current = next);
  };
}
