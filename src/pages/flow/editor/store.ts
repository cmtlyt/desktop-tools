import { create } from 'zustand';
import { useSelector } from '@/hooks';
import { Many } from '@/types';

interface EditorStoreState {
  id: string;
}

interface EditorStoreHandlers {
  setId: (id: string) => void;
}

export const useEditorStore = create<EditorStoreState & EditorStoreHandlers>((set) => ({
  id: '',

  setId: (id: string) => set({ id }),
}));

type StoreKeys = Many<keyof (EditorStoreState & EditorStoreHandlers)>;

export const useEditorStoreSlice = (keys: StoreKeys) => {
  return useEditorStore(useSelector(keys));
};
