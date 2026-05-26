import { createStoreAndHelper } from '@/utils';

export type GameStatus = 'setup' | 'playing' | 'finished';
export type FinishType = 'cum' | 'edge';

interface GameSetup {
  difficulty: number;  // 0-4
  duration: number;    // minutes
  cumOption: number;   // 0, 0.2, 0.5, 0.7, 0.9
}

interface GameRuntime {
  gameTime: number;
  speed: number;
  cumFactor: number;
  finishType: FinishType | null;
}

interface Store {
  setup: GameSetup;
  status: GameStatus;
  runtime: GameRuntime;
  setSetup: (patch: Partial<GameSetup>) => void;
  setStatus: (status: GameStatus) => void;
  setRuntime: (patch: Partial<GameRuntime>) => void;
  reset: () => void;
}

const INITIAL_SETUP: GameSetup = {
  difficulty: 2,
  duration: 15,
  cumOption: 0.5,
};

const INITIAL_RUNTIME: GameRuntime = {
  gameTime: 0,
  speed: 0,
  cumFactor: 0,
  finishType: null,
};

export const {
  useStore: useEdgeStore,
  useStoreSlice: useEdgeStoreSlice,
  getStore: getEdgeStore,
} = createStoreAndHelper<Store>((set) => ({
  setup: { ...INITIAL_SETUP },
  status: 'setup',
  runtime: { ...INITIAL_RUNTIME },

  setSetup: (patch) =>
    set((state) => ({ setup: { ...state.setup, ...patch } })),

  setStatus: (status) => set({ status }),

  setRuntime: (patch) =>
    set((state) => ({ runtime: { ...state.runtime, ...patch } })),

  reset: () =>
    set({ status: 'setup', runtime: { ...INITIAL_RUNTIME } }),
}));
