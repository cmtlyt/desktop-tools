import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { stateStorage } from './storage';
import { GetStore } from '@/types/store';

export function createPersist<T>(key: string, getStore: GetStore<T>) {
  return create(
    persist<T>((set, get, store) => getStore(set, get, store), {
      name: key,
      storage: createJSONStorage(() => stateStorage),
    }),
  );
}
