import { debounce } from '@cmtlyt/base';
import { getZGXQStore } from './state';
import { ChessItem, Position } from './type';
import { getLayoutStore } from '@/store';

interface HistoryChess {
  pos: Position;
  chess: ChessItem | null;
}

interface HistoryItem {
  from: HistoryChess;
  to: HistoryChess;
}

interface SituationInfo {
  currIdx: number;
  situation: string;
}

let currIdx = -1;
let savedSituation: SituationInfo | null = null;
const history: HistoryItem[] = [];

export function resetHistory() {
  history.length = 0;
  currIdx = -1;
  savedSituation = null;
}

export function addHistory(item: HistoryItem) {
  history[++currIdx] = item;
  history.length = currIdx + 1;
}

function updateCheckerboard(item: HistoryItem) {
  const { currentChess, changeCheckerboard, changeUser, setCurrentChessMovePoints, setCurrentChess } = getZGXQStore();
  const { from, to } = item;
  changeCheckerboard((draft) => {
    const { chess: toChess, pos: toPos } = to;
    const { chess: fromChess, pos: fromPos } = from;
    draft[toPos[0]][toPos[1]] = toChess;
    draft[fromPos[0]][fromPos[1]] = fromChess;
    if (currentChess) {
      const { pos } = currentChess;
      draft[pos[0]][pos[1]]!.isActive = false;
    }
  });
  changeUser();
  setCurrentChessMovePoints(void 0);
  setCurrentChess(void 0);
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

export function saveSituation() {
  const { checkerboard } = getZGXQStore();
  const { showMessage } = getLayoutStore();
  savedSituation = { currIdx, situation: JSON.stringify(checkerboard) };
  showMessage({ content: '已保存当前局势', type: 'success' });
}

export function resetSituation() {
  const { showMessage } = getLayoutStore();
  if (!savedSituation) return showMessage({ content: '没有已保存的局势', type: 'warning' });
  const { setCheckerboard } = getZGXQStore();
  const { currIdx: savedIdx, situation } = savedSituation;
  currIdx = savedIdx;
  setCheckerboard(JSON.parse(situation));
  showMessage({ content: '已恢复保存的局势', type: 'success' });
}
