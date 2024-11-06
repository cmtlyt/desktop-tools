import { GameStatus } from './type';
import { createStoreAndHelper } from '@/utils';

interface SLStoreState {
  gameStatus: GameStatus;
}

interface SLStoreHandlers {
  setGameStatus: (status: GameStatus) => void;
}

export const {
  useStore: useSLStore,
  useStoreSlice: useSLStoreSlice,
  getState: getSLStore,
} = createStoreAndHelper<SLStoreState & SLStoreHandlers>((set) => ({
  gameStatus: 'paying',

  setGameStatus(status) {
    set({ gameStatus: status });
  },
}));
