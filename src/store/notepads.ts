import { produce } from 'immer';
import { getRandomString } from '@cmtlyt/base';
import { NOTEPADS_STORAGE_KEY } from '@/constant';
import { EditorNotepad, Notepad } from '@/types/notepad';
import { GetStore } from '@/types/store';
import { createPersist, createStoreHelper, deleteEntry } from '@/utils';

interface NotepadsStore {
  notepads: Notepad[];
}

interface NotepadsStoreActions {
  addNotepad: (notepad: EditorNotepad) => void;
  deleteNotepad: (id: string) => void;
  updateNotepad: (id: string, notepad: EditorNotepad) => void;
}

type Store = NotepadsStore & NotepadsStoreActions;

const getActions: GetStore<Store, NotepadsStoreActions> = (set) => ({
  addNotepad: (notepad) => {
    set((state) =>
      produce(state, (draft) => {
        const { content, url, ...rest } = notepad;
        const saveNotepad: Notepad = {
          ...rest,
          url,
          content: url ? void 0 : content,
          id: `local-${getRandomString(16)}`,
          creator: 'test',
          createTime: Date.now(),
          updateTime: Date.now(),
        };
        draft.notepads.unshift(saveNotepad);
      }),
    );
  },
  deleteNotepad: (id) => {
    set((state) =>
      produce(state, (draft) => {
        const index = draft.notepads.findIndex((notepad) => notepad.id === id);
        const notepad = draft.notepads[index];
        deleteEntry(notepad.url);
        draft.notepads.splice(index, 1);
      }),
    );
  },
  updateNotepad: (id, notepad) => {
    set((state) =>
      produce(state, (draft) => {
        const index = draft.notepads.findIndex((notepad) => notepad.id === id);
        if (index > -1) {
          draft.notepads[index] = {
            ...draft.notepads[index],
            ...notepad,
            updateTime: Date.now(),
          };
        }
      }),
    );
  },
});

export const useNotepadsStore = createPersist<Store>(NOTEPADS_STORAGE_KEY, (set, get, store) => ({
  notepads: [] as Notepad[],
  ...getActions(set, get, store),
}));

export const { useStoreSlice: useNotepadsStoreSlice, getStore: getNotepadsStore } = createStoreHelper(useNotepadsStore);
