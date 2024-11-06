import { Notepad } from '@/types/notepad';
import { createStoreAndHelper } from '@/utils/create-store-helper';

interface NotepadStoreState {
  currentNotepad?: Notepad;
}

interface NotepadStoreHandlers {
  setNotepad: (notepad?: Notepad) => void;
}

export const {
  useStore: useNotepadStore,
  useStoreSlice: useNotepadStoreSlice,
  getState: getNotepadStore,
} = createStoreAndHelper<NotepadStoreState & NotepadStoreHandlers>((set) => ({
  currentNotepad: void 0,

  setNotepad: (notepad) => set({ currentNotepad: notepad }),
}));
