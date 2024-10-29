import { create } from 'zustand';
import { getRandomString } from '@cmtlyt/base';
import { useSelector } from '@/hooks';
import { Many } from '@/types';

export enum GameStatus {
  running = 'running',
  pause = 'pause',
  over = 'over',
}

interface ELSFKStoreState {
  row: number;
  col: number;
  moveAddRow: number;
  gameId: string;
  gameStatus: GameStatus;
}

interface ELSFKStoreHandlers {
  setRow: (row: number) => void;
  setCol: (col: number) => void;
  setMoveAddRow: (moveAddRow: number) => void;
  updateGameId: () => void;
  setGameStatus: (gameStatus: GameStatus) => void;
}

export const useELSFKStore = create<ELSFKStoreState & ELSFKStoreHandlers>((set) => ({
  gameId: getRandomString(),
  row: 20,
  col: 10,
  moveAddRow: 2,
  gameStatus: GameStatus.over,

  setRow: (row) => set({ row }),
  setCol: (col) => set({ col }),
  setMoveAddRow: (moveAddRow) => set({ moveAddRow }),
  updateGameId: () => set({ gameId: getRandomString(), gameStatus: GameStatus.over }),
  setGameStatus: (gameStatus) => set({ gameStatus }),
}));

type StoreKeys = Many<keyof (ELSFKStoreState & ELSFKStoreHandlers)>;

export const useELSFKStoreSlice = (keys: StoreKeys) => {
  return useELSFKStore(useSelector(keys));
};

export const getELSFKStore = () => useELSFKStore.getState();
