import { createStoreAndHelper } from '@/utils';

interface RecordingInfoStoreState {
  name: string | null;
  stream: MediaStream | null;
  recorder: MediaRecorder | null;
  blob: Blob | null;
  url: string | null;
}

interface RecordingInfoStoreHandlers {
  setName: (name?: string) => void;
  setStream: (stream?: MediaStream) => void;
  setRecorder: (recorder?: MediaRecorder) => void;
  setBlob: (result?: Blob) => void;
  setUrl: (url?: string) => void;
  clear: () => void;
}

export const {
  useStore: useRecordingInfoStore,
  useStoreSlice: useRecordingInfoStoreSlice,
  getStore: getRecordingInfoStore,
} = createStoreAndHelper<RecordingInfoStoreState & RecordingInfoStoreHandlers>((set, _get, store) => ({
  name: null,
  stream: null,
  recorder: null,
  blob: null,
  url: null,

  setName: (name) => set({ name }),
  setStream: (stream) => set({ stream }),
  setRecorder: (recorder) => set({ recorder }),
  setBlob: (result) => set({ blob: result }),
  setUrl: (url) => set({ url }),
  clear: () => set(store.getInitialState()),
}));
