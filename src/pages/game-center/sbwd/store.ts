import { getRandomString } from '@cmtlyt/base';
import { createStoreAndHelper } from '@/utils/create-store-helper';

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

export const {
  useStore: useSBWDStore,
  useStoreSlice: useSBWDStoreSlice,
  getState: getSBWDStore,
} = createStoreAndHelper<SBWDStoreState & SBWDStoreHandlers>((set) => ({
  speed: 500,
  currentGameId: getRandomString(),
  replayStep: null,

  setSpeed: (speed) => set({ speed }),
  reset: () => set({ currentGameId: getRandomString() }),
  replay: (history) => set({ replayStep: history }),
}));
