import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { stateStorage } from './storage';
import { GetStore } from '@/types/store';

export function createPersist<T>(key: string, getStore: GetStore<T>) {
  return create(
    persist<T>((set, get) => getStore(set, get), { name: key, storage: createJSONStorage(() => stateStorage) }),
  );
}
