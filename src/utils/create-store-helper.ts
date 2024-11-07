import { create, StoreApi, UseBoundStore } from 'zustand';
import { useSelector } from '@/hooks';
import { Many } from '@/types';
import { GetStore } from '@/types/store';

export function createStoreHelper<T extends object>(useStore: UseBoundStore<StoreApi<T>>) {
  const getStore = () => useStore.getState();
  const useStoreSlice = (keys: Many<keyof T>) => useStore(useSelector(keys));
  return { getStore, useStoreSlice };
}

export function createStoreAndHelper<T extends object>(getStore: GetStore<T>) {
  const useStore = create(getStore);
  const helper = createStoreHelper(useStore);
  return { useStore, ...helper };
}
