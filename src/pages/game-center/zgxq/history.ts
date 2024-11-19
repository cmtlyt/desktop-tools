import { debounce } from '@cmtlyt/base';
import { getZGXQStore } from './state';
import { ChessItem, Position } from './type';

interface HistoryChess {
  pos: Position;
  chess: ChessItem | null;
}

interface HistoryItem {
  from: HistoryChess;
  to: HistoryChess;
}

let currIdx = -1;
const history: HistoryItem[] = [];

export function resetHistory() {
  history.length = 0;
  currIdx = -1;
}

export function addHistory(item: HistoryItem) {
  history[++currIdx] = item;
  history.length = currIdx + 1;
}

function updateCheckerboard(item: HistoryItem) {
  const { setCheckerboard } = getZGXQStore();
  const { from, to } = item;
  setCheckerboard((draft) => {
    const { chess: toChess, pos: toPos } = to;
    const { chess: fromChess, pos: fromPos } = from;
    draft[toPos[0]][toPos[1]] = toChess;
    draft[fromPos[0]][fromPos[1]] = fromChess;
  });
}

export const redo = debounce(function redo() {
  const item = history[++currIdx];
  if (!item) return --currIdx;
  const { to, from } = item;
  updateCheckerboard({ from: { ...from, pos: to.pos }, to: { chess: null, pos: from.pos } });
}, 30);

export const undo = debounce(function undo() {
  const item = history[currIdx--];
  if (!item) return ++currIdx;
  updateCheckerboard(item);
}, 30);
