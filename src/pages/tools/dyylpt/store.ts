import { createStoreAndHelper } from '@/utils';

export interface ImageInfo {
  label: string;
  value: string;
}

interface Store {
  images: ImageInfo[];
  showForm: boolean;
  printMod: 'snapdom' | 'domToImage';
  saveSize: { width: number; height: number; aspectRatio: number; scale: number };
}

interface StoreActions {
  setImages(images: Store['images']): void;
  setShowForm(showForm: Store['showForm']): void;
  setPrintMod(printMod: Store['printMod']): void;
  setSaveSize(saveSize: Partial<Store['saveSize']>): void;
}

export const {
  useStore: useDYYLStore,
  useStoreSlice: useDYYLStoreSlice,
  getStore: getDYYLStore,
} = createStoreAndHelper<Store & StoreActions>((set, get) => ({
  images: [],
  showForm: false,
  printMod: 'snapdom',
  saveSize: { width: 0, height: 0, aspectRatio: 1, scale: 2 },

  setImages: (images) => set({ images }),
  setShowForm: (showForm) => set({ showForm }),
  setPrintMod: (printMod) => set({ printMod }),
  setSaveSize: (saveSize) => set({ saveSize: { ...get().saveSize, ...saveSize } }),
}));
