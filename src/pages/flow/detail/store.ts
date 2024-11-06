import { createStoreAndHelper } from '@/utils';

interface DetailStoreState {
  id: string;
}

interface DetailStoreHandlers {
  setId: (id: string) => void;
}

export const {
  useStore: useDetailStore,
  useStoreSlice: useDetailStoreSlice,
  getState: getDetailStore,
} = createStoreAndHelper<DetailStoreState & DetailStoreHandlers>((set) => ({
  id: '',

  setId: (id: string) => set({ id }),
}));
