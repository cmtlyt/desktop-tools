import { create } from 'zustand';
import { useSelector } from '@/hooks/use-selector';
import { Many } from '@/types';

interface DetailStoreState {
  id: string;
}

interface DetailStoreHandlers {
  setId: (id: string) => void;
}

export const useDetailStore = create<DetailStoreState & DetailStoreHandlers>((set) => ({
  id: '',

  setId: (id: string) => set({ id }),
}));

type StoreKeys = Many<keyof (DetailStoreState & DetailStoreHandlers)>;

export const useDetailStoreSlice = (keys: StoreKeys) => {
  return useDetailStore(useSelector(keys));
};
