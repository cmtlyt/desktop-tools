import { createStoreAndHelper } from '@/utils';

interface Store {
  fullback: boolean;
}

interface StoreActions {
  setFullback(fullback: boolean): void;
}

export const {
  useStore: usePHTStore,
  useStoreSlice: usePHTStoreSlice,
  getStore: getPHTStore,
} = createStoreAndHelper<Store & StoreActions>((set) => ({
  fullback: false,

  setFullback(fullback) {
    set({ fullback });
  },
}));
