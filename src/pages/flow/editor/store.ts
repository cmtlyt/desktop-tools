import { create } from 'zustand';
import { useSelector } from '@/hooks';

interface EditorStoreState {
  id: string;
}

interface EditorStoreHandlers {
  setId: (id: string) => void;
}

type Store = EditorStoreState & EditorStoreHandlers;

export const useEditorStore = create<Store>((set) => ({
  id: '',

  setId: (id: string) => set({ id }),
}));

type StoreKeys = keyof Store;

export const useEditorStoreSlice = (keys: StoreKeys) => {
  return useEditorStore(useSelector(keys));
};

export function getEditorStore() {
  return useEditorStore.getState();
}
