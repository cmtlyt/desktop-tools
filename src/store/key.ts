import { createStoreAndHelper } from '@/utils';

interface Store {
  keys: unknown[];
}

interface StoreActions {
  add(key: unknown): void;
  has(key: unknown): boolean;
  remove(key: unknown): void;
  clear(): void;
}

export const {
  useStore: useKeyStore,
  useStoreSlice: useKeyStoreSlice,
  getStore: getKeyStore,
} = createStoreAndHelper<Store & StoreActions>((set, get) => ({
  keys: [],

  add(key) {
    if (get().has(key)) return;
    set((state) => ({
      keys: [...state.keys, key],
    }));
  },
  has(key) {
    return get().keys.includes(key);
  },
  remove(key) {
    if (!get().has(key)) return;
    set((state) => ({
      keys: state.keys.filter((k) => k !== key),
    }));
  },
  clear() {
    set({ keys: [] });
  },
}));
