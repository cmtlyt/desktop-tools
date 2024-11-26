import { produce } from 'immer';
import { getRandomString } from '@cmtlyt/base';
import { RECORDS_STORAGE_KEY } from '@/constant';
import { GetStore } from '@/types/store';
import { createPersist, createStoreHelper, deleteEntry } from '@/utils';
import { EditorRecordInfo, RecordInfo } from '@/types/records';

interface RecordsStore {
  records: RecordInfo[];
}

interface RecordsStoreActions {
  addRecord: (notepad: EditorRecordInfo) => void;
  deleteRecord: (id: string) => void;
}

type Store = RecordsStore & RecordsStoreActions;

const getActions: GetStore<Store, RecordsStoreActions> = (set) => ({
  addRecord: (notepad) => {
    set((state) =>
      produce(state, (draft) => {
        const saveNotepad: RecordInfo = {
          ...notepad,
          id: `local-${getRandomString(16)}`,
          creator: 'test',
          createTime: Date.now(),
          updateTime: Date.now(),
        };
        draft.records.unshift(saveNotepad);
      }),
    );
  },
  deleteRecord: (id) => {
    set((state) =>
      produce(state, (draft) => {
        const recordIdx = draft.records.findIndex((notepad) => notepad.id === id);
        const record = draft.records[recordIdx];
        deleteEntry(record.url);
        draft.records.splice(recordIdx, 1);
      }),
    );
  },
});

export const useRecordsStore = createPersist<Store>(RECORDS_STORAGE_KEY, (set, get, store) => ({
  records: [] as RecordInfo[],
  ...getActions(set, get, store),
}));

export const { useStoreSlice: useRecordsStoreSlice, getStore: getRecordsStore } = createStoreHelper(useRecordsStore);
