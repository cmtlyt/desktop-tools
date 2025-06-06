import { createStoreAndHelper } from '@/utils';

export interface ImageInfo {
  label: string;
  value: string;
}

interface Store {
  images: ImageInfo[];
  showForm: boolean;
  saveSize: { width: number; height: number; aspectRatio: number };
}

interface StoreActions {
  setImages(images: ImageInfo[]): void;
  setShowForm(showForm: boolean): void;
  setSaveSize(saveSize: { width?: number; height?: number; aspectRatio?: number }): void;
}

export const {
  useStore: useDYYLStore,
  useStoreSlice: useDYYLStoreSlice,
  getStore: getDYYLStore,
} = createStoreAndHelper<Store & StoreActions>((set, get) => ({
  images: [],
  showForm: false,
  saveSize: { width: 0, height: 0, aspectRatio: 1 },

  setImages: (images) => set({ images }),
  setShowForm: (showForm) => set({ showForm }),
  setSaveSize: (saveSize) => set({ saveSize: { ...get().saveSize, ...saveSize } }),
}));
