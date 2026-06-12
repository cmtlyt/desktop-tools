import { GamePhase } from './type';
import { createStoreAndHelper } from '@/utils';

interface MJStoreState {
  gamePhase: GamePhase;
  message: string;
}

interface MJStoreHandlers {
  setGamePhase: (phase: GamePhase) => void;
  setMessage: (msg: string) => void;
}

export const {
  useStore: useMJStore,
  useStoreSlice: useMJStoreSlice,
  getStore: getMJStore,
} = createStoreAndHelper<MJStoreState & MJStoreHandlers>((set) => ({
  gamePhase: 'idle',
  message: '',

  setGamePhase(phase) {
    set({ gamePhase: phase });
  },
  setMessage(msg) {
    set({ message: msg });
  },
}));
