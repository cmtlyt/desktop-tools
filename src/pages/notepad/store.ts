import { Notepad } from '@/types/notepad';
import { createStoreAndHelper } from '@/utils';

interface NotepadStoreState {
  currentNotepad?: Notepad;
}

interface NotepadStoreHandlers {
  setNotepad: (notepad?: Notepad) => void;
}

export const {
  useStore: useNotepadStore,
  useStoreSlice: useNotepadStoreSlice,
  getStore: getNotepadStore,
} = createStoreAndHelper<NotepadStoreState & NotepadStoreHandlers>((set) => ({
  currentNotepad: void 0,

  setNotepad: (notepad) => set({ currentNotepad: notepad }),
}));
