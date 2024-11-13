import { createStoreAndHelper } from '@/utils';

interface RecordingInfoStoreState {
  name: string | null;
  stream: MediaStream | null;
  recorder: MediaRecorder | null;
  result: Blob | null;
}

interface RecordingInfoStoreHandlers {
  setName: (name?: string) => void;
  setStream: (stream?: MediaStream) => void;
  setRecorder: (recorder?: MediaRecorder) => void;
  setResult: (result?: Blob) => void;
  clear: () => void;
}

export const {
  useStore: useRecordingInfoStore,
  useStoreSlice: useRecordingInfoStoreSlice,
  getStore: getRecordingInfoStore,
} = createStoreAndHelper<RecordingInfoStoreState & RecordingInfoStoreHandlers>((set) => ({
  name: null,
  stream: null,
  recorder: null,
  result: null,

  setName: (name) => set({ name }),
  setStream: (stream) => set({ stream }),
  setRecorder: (recorder) => set({ recorder }),
  setResult: (result) => set({ result }),
  clear: () => set({ name: null, stream: null, recorder: null, result: null }),
}));
