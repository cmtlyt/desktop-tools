import { RecordInfo } from '@/types/records';
import { createStoreAndHelper } from '@/utils';

interface RecordStoreState {
  currentRecord?: RecordInfo;
}

interface RecordStoreHandlers {
  setRecord: (notepad?: RecordInfo) => void;
}

export const {
  useStore: useRecordStore,
  useStoreSlice: useRecordStoreSlice,
  getStore: getRecordStore,
} = createStoreAndHelper<RecordStoreState & RecordStoreHandlers>((set) => ({
  currentRecord: void 0,

  setRecord: (notepad) => set({ currentRecord: notepad }),
}));
