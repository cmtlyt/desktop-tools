import { create } from 'zustand';

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
