import { create } from 'zustand';
import { useSelector } from '@/hooks';
import { Many } from '@/types';
import { GameStatus } from './type';

interface SLStoreState {
  gameStatus: GameStatus;
}

interface SLStoreHandlers {
  setGameStatus: (status: GameStatus) => void;
}

export const useSLStore = create<SLStoreState & SLStoreHandlers>((set) => ({
  gameStatus: 'paying',

  setGameStatus(status) {
    set({ gameStatus: status });
  },
}));

type StoreKeys = Many<keyof (SLStoreState & SLStoreHandlers)>;

export const useSLStoreSlice = (keys: StoreKeys) => {
  return useSLStore(useSelector(keys));
};

export const getSLStore = () => useSLStore.getState();
