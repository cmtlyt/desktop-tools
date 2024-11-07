import { createStoreAndHelper } from '@/utils';

interface NotepadEditorStoreState {
  title: string;
}

interface NotepadEditorStoreActions {
  setTitle: (title: string) => void;
}

export const {
  useStore: useNotepadEditorStore,
  useStoreSlice: useNotepadEditorStoreSlice,
  getStore: getNotepadEditorStore,
} = createStoreAndHelper<NotepadEditorStoreState & NotepadEditorStoreActions>((set) => ({
  title: '',

  setTitle: (title) => set({ title }),
}));
