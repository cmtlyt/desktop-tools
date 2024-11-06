import { createStoreAndHelper } from '@/utils/create-store-helper';

interface EditorStoreState {
  id: string;
}

interface EditorStoreHandlers {
  setId: (id: string) => void;
}

type Store = EditorStoreState & EditorStoreHandlers;

export const {
  useStore: useEditorStore,
  useStoreSlice: useEditorStoreSlice,
  getState: getEditorStore,
} = createStoreAndHelper<Store>((set) => ({
  id: '',

  setId: (id: string) => set({ id }),
}));
