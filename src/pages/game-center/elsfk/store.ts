import { getRandomString } from '@cmtlyt/base';
import { createStoreAndHelper } from '@/utils/create-store-helper';

export enum GameStatus {
  RUNNING = 'running',
  PAUSE = 'pause',
  OVER = 'over',
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

export const {
  useStore: useELSFKStore,
  useStoreSlice: useELSFKStoreSlice,
  getState: getELSFKStore,
} = createStoreAndHelper<ELSFKStoreState & ELSFKStoreHandlers>((set) => ({
  gameId: getRandomString(),
  row: 20,
  col: 10,
  moveAddRow: 2,
  gameStatus: GameStatus.OVER,

  setRow: (row) => set({ row }),
  setCol: (col) => set({ col }),
  setMoveAddRow: (moveAddRow) => set({ moveAddRow }),
  updateGameId: () => set({ gameId: getRandomString(), gameStatus: GameStatus.OVER }),
  setGameStatus: (gameStatus) => set({ gameStatus }),
}));
