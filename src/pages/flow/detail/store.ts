import { create } from 'zustand';

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
