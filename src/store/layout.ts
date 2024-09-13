import { create } from 'zustand';

interface LayoutStore {
  test: string;
}

interface LayoutStoreActions {
  changeTest: (test: string) => void;
}

export const useLayoutStore = create<LayoutStore & LayoutStoreActions>(
  (set) => ({
    test: 'Hello World',

    changeTest: (test) => set({ test }),
  })
);
