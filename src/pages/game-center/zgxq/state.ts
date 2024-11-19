import { createStoreAndHelper } from '@/utils';
import { CheckerboardData, PositionChessItem } from './type';
import { initCheckerboard } from './util';
import { produce } from 'immer';
import { resetHistory } from './history';

interface ZGXQState {
  checkerboard: CheckerboardData;
  currentUser: 'black' | 'red';
  currentChessMovePoints?: string[];
  currentChess?: PositionChessItem;
}

interface ZAXQHandlers {
  setCheckerboard(callback: (draft: CheckerboardData) => void): void;
  setCurrentChessMovePoints(points: string[] | undefined): void;
  setCurrentChess(chess: PositionChessItem | undefined): void;
  changeUser(): void;
  restart(): void;
}

export const {
  useStore: useZGXQStore,
  useStoreSlice: useZGXQStoreSlice,
  getStore: getZGXQStore,
} = createStoreAndHelper<ZGXQState & ZAXQHandlers>((set, get, store) => ({
  checkerboard: initCheckerboard(),
  currentChessMovePoints: void 0,
  currentChess: void 0,
  currentUser: 'red',

  setCheckerboard(callback) {
    set({ checkerboard: produce(get().checkerboard, (draft) => callback(draft)) });
  },
  setCurrentChessMovePoints(points) {
    set({ currentChessMovePoints: points });
  },
  setCurrentChess(chess) {
    set({ currentChess: chess });
  },
  changeUser() {
    set({ currentUser: get().currentUser === 'red' ? 'black' : 'red' });
  },
  restart() {
    resetHistory();
    set(store.getInitialState());
  },
}));
