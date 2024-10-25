import { create } from 'zustand';
import { getRandomString } from '@cmtlyt/base';
import { useSelector } from '@/hooks';
import { Many } from '@/types';

interface SBWDStoreState {
  speed: number;
  currentGameId: string;
  replayStep: string[] | null;
}

interface SBWDStoreHandlers {
  setSpeed: (speed: number) => void;
  reset: () => void;
  replay: (history: string[] | null) => void;
}

export const useSBWDStore = create<SBWDStoreState & SBWDStoreHandlers>((set) => ({
  speed: 500,
  currentGameId: getRandomString(),
  replayStep: null,

  setSpeed: (speed) => set({ speed }),
  reset: () => set({ currentGameId: getRandomString() }),
  replay: (history) => set({ replayStep: history }),
}));

type StoreKeys = Many<keyof (SBWDStoreState & SBWDStoreHandlers)>;

export const useSBWDStoreSlice = (keys: StoreKeys) => {
  return useSBWDStore(useSelector(keys));
};

export const getSBWDStore = () => useSBWDStore.getState();
