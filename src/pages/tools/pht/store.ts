import { createStoreAndHelper, isPhone } from '@/utils';

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
  fullback: isPhone(),

  setFullback(fullback) {
    set({ fullback });
  },
}));
