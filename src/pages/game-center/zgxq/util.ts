import { CheckerboardInfo } from './constant';
import { addHistory } from './history';
import { emitZGXQAction, ZGXQActionType } from './subject';
import { CheckerboardData, ChessItem, ChessType, Position, PositionChessItem } from './type';

export function initCheckerboard() {
  const { width, height, chessInfo } = CheckerboardInfo || {};
  const checkerboard: CheckerboardData = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => null),
  );
  chessInfo.forEach((item) => {
    const [pos, color, type] = item.split('-');
    const [row, col] = pos.split(',').map(Number);
    const chessItem = { type, color, isActive: false } as ChessItem;
    checkerboard[row][col] = chessItem;
  });
  return checkerboard;
}

interface MoveInfo {
  limitArea: string[];
  moveNextsConfs?: string[] | ((option: MoveConfigHandlerBaseOption) => string[]);
}

function getLimitAreaCheck(limitArea?: MoveInfo['limitArea']) {
  if (!limitArea) {
    const { width, height } = CheckerboardInfo;
    return (row: number, col: number) => row >= 0 && col >= 0 && row < height && col < width;
  }
  const [[minRow, minCol], [maxRow, maxCol]] = limitArea.map((item) => item.split(',').map(Number));
  return (row: number, col: number) => {
    return row >= minRow && row <= maxRow && col >= minCol && col <= maxCol;
  };
}

function getTargetPos(currPos: Position, moveNexts: string[]) {
  const targetPos = [...currPos];
  moveNexts.forEach((deff) => {
    const [diffRow, diffCol] = deff.split(',').map(Number);
    targetPos[0] += diffRow;
    targetPos[1] += diffCol;
  });
  return targetPos;
}

interface MoveConfigHandlerBaseOption {
  checkerboard: CheckerboardData;
  chess: PositionChessItem;
  moveInfo: MoveInfoChessConfig;
}

interface ValiderOption extends MoveConfigHandlerBaseOption {
  limitAreaCheck: (row: number, col: number) => boolean;
  moveNexts: string[];
}

interface MoveInfoChessConfig {
  red?: MoveInfo;
  black?: MoveInfo;
  middleBreak?: boolean;
  moveNextsConfs?: MoveInfo['moveNextsConfs'];
  valider?: (option: ValiderOption) => boolean;
}

function getPointsFromMoveInfo(
  checkerboard: CheckerboardData,
  chess: PositionChessItem,
  moveInfo: MoveInfoChessConfig,
) {
  const { pos, color } = chess;
  const [row, col] = pos;
  const { [color]: colorConfig, middleBreak = false, moveNextsConfs = [], valider } = moveInfo;
  const { limitArea, moveNextsConfs: colorMoveNextsConfs = moveNextsConfs } = colorConfig || {};
  const limitAreaCheck = getLimitAreaCheck(limitArea);
  const nextsConf = Array.isArray(colorMoveNextsConfs)
    ? colorMoveNextsConfs
    : colorMoveNextsConfs({ checkerboard, chess, moveInfo });
  return nextsConf
    .map((moveNextsConf) => {
      const moveNexts = moveNextsConf.split('|');
      const nextStepLength = moveNexts.length;
      let currRow = row;
      let currCol = col;
      const isValid =
        valider?.({ checkerboard, chess, moveNexts, moveInfo, limitAreaCheck }) ||
        moveNexts.every((item, idx) => {
          const [diffRow, diffCol] = item.split(',').map(Number);
          currRow = currRow + diffRow;
          currCol = currCol + diffCol;
          if (!limitAreaCheck(currRow, currCol)) return false;
          const nextCell = checkerboard[currRow][currCol];
          // 空格子
          if (!nextCell) return true;
          // 最后一个格子且为敌方棋子
          if (nextStepLength === idx + 1) return nextCell.color !== color;
          // 中间有棋
          if (middleBreak) return false;
          return true;
        });
      if (isValid) return getTargetPos(pos, moveNexts);
      return null;
    })
    .filter((item) => Array.isArray(item))
    .map((item) => item.join(','));
}

const moveInfoConfigMap: Record<ChessType, MoveInfoChessConfig> = {
  [ChessType.Bing]: {
    moveNextsConfs(option) {
      const { chess } = option;
      const { color, pos } = chess;
      const { height } = CheckerboardInfo;
      const [currRow] = pos;
      const moveNexts = [];
      if (color === 'red') {
        moveNexts.push('-1,0');
        if (currRow < height / 2) moveNexts.push('0,1', '0,-1');
      } else {
        moveNexts.push('1,0');
        if (currRow + 1 > height / 2) moveNexts.push('0,1', '0,-1');
      }
      return moveNexts;
    },
  },
  [ChessType.Pao]: {
    moveNextsConfs(option) {
      const { chess, checkerboard } = option;
      const { pos, color } = chess;
      const [currRow, currCol] = pos;
      const { width, height } = CheckerboardInfo;
      const moveNexts = [];
      let continueFlag = [true, true];
      let killFlag = [false, false];
      for (let i = 1; i < width; ++i) {
        const nextCol = currCol - i;
        const nextCol2 = currCol + i;
        if (continueFlag[0] && nextCol >= 0) {
          const next = checkerboard[currRow][nextCol];
          if (killFlag[0]) {
            if (next && next.color !== color) {
              moveNexts.push(`0,${-i}`);
              continueFlag[0] = false;
            }
          } else if (!next) moveNexts.push(`0,${-i}`);
          else killFlag[0] = true;
        }
        if (continueFlag[1] && nextCol2 < width) {
          const next = checkerboard[currRow][nextCol2];
          if (killFlag[1]) {
            if (next && next.color !== color) {
              moveNexts.push(`0,${i}`);
              continueFlag[1] = false;
            }
          } else if (!next) moveNexts.push(`0,${i}`);
          else killFlag[1] = true;
        }
      }
      continueFlag = [true, true];
      killFlag = [false, false];
      for (let i = 1; i < height; ++i) {
        const nextRow = currRow - i;
        const nextRow2 = currRow + i;
        if (continueFlag[0] && nextRow >= 0) {
          const next = checkerboard[nextRow][currCol];
          if (killFlag[0]) {
            if (next && next.color !== color) {
              moveNexts.push(`${-i},0`);
              continueFlag[0] = false;
            }
          } else if (!next) moveNexts.push(`${-i},0`);
          else killFlag[0] = true;
        }
        if (continueFlag[1] && nextRow2 < height) {
          const next = checkerboard[nextRow2][currCol];
          if (killFlag[1]) {
            if (next && next.color !== color) {
              moveNexts.push(`${i},0`);
              continueFlag[1] = false;
            }
          } else if (!next) moveNexts.push(`${i},0`);
          else killFlag[1] = true;
        }
      }
      return moveNexts;
    },
  },
  [ChessType.Che]: {
    moveNextsConfs(option) {
      const { chess, checkerboard } = option;
      const { pos, color } = chess;
      const [currRow, currCol] = pos;
      const { width, height } = CheckerboardInfo;
      const moveNexts = [];
      let continueFlag = [true, true];
      for (let i = 1; i < width; ++i) {
        const nextCol = currCol - i;
        const nextCol2 = currCol + i;
        if (continueFlag[0] && nextCol >= 0) {
          const next = checkerboard[currRow][nextCol];
          if (!next) moveNexts.push(`0,${-i}`);
          else {
            if (next.color !== color) moveNexts.push(`0,${-i}`);
            continueFlag[0] = false;
          }
        }
        if (continueFlag[1] && nextCol2 < width) {
          const next = checkerboard[currRow][nextCol2];
          if (!next) moveNexts.push(`0,${i}`);
          else {
            if (next.color !== color) moveNexts.push(`0,${i}`);
            continueFlag[1] = false;
          }
        }
      }
      continueFlag = [true, true];
      for (let i = 1; i < height; ++i) {
        const nextRow = currRow - i;
        const nextRow2 = currRow + i;
        if (continueFlag[0] && nextRow >= 0) {
          const next = checkerboard[nextRow][currCol];
          if (!next) moveNexts.push(`${-i},0`);
          else {
            if (next.color !== color) moveNexts.push(`${-i},0`);
            continueFlag[0] = false;
          }
        }
        if (continueFlag[1] && nextRow2 < height) {
          const next = checkerboard[nextRow2][currCol];
          if (!next) moveNexts.push(`${i},0`);
          else {
            if (next.color !== color) moveNexts.push(`${i},0`);
            continueFlag[1] = false;
          }
        }
      }
      return moveNexts;
    },
  },
  [ChessType.Ma]: {
    moveNextsConfs: [
      '1,0|1,-1',
      '1,0|1,1',
      '-1,0|-1,-1',
      '-1,0|-1,1',
      '0,1|-1,1',
      '0,1|1,1',
      '0,-1|-1,-1',
      '0,-1|1,-1',
    ],
    middleBreak: true,
  },
  [ChessType.Xiang]: {
    moveNextsConfs: ['1,1|1,1', '1,-1|1,-1', '-1,1|-1,1', '-1,-1|-1,-1'],
    middleBreak: true,
  },
  [ChessType.Shi]: {
    red: { limitArea: ['7,3', '9,5'] },
    black: { limitArea: ['0,3', '2,5'] },
    moveNextsConfs: ['1,1', '1,-1', '-1,1', '-1,-1'],
  },
  [ChessType.Jiang]: {
    red: { limitArea: ['7,3', '9,5'] },
    black: { limitArea: ['0,3', '2,5'] },
    moveNextsConfs: ['0,1', '0,-1', '1,0', '-1,0'],
  },
};

export function getMovePoints(checkerboard: CheckerboardData, type: ChessType, chess: PositionChessItem): string[] {
  const moveInfoConfig = moveInfoConfigMap[type];
  if (!moveInfoConfig) return [];
  return getPointsFromMoveInfo(checkerboard, chess, moveInfoConfig);
}

export function moveChess(checkerboard: CheckerboardData, chess: PositionChessItem, targetPos: Position) {
  const { pos, ...chessInfo } = chess;
  const [fromRow, fromCol] = pos;
  const [targetRow, targetCol] = targetPos;
  checkerboard[fromRow][fromCol] = null;
  const targetChess = checkerboard[targetRow][targetCol];
  const toChess = targetChess ? { ...targetChess } : null;
  checkerboard[targetRow][targetCol] = chessInfo;
  addHistory({ from: { chess, pos }, to: { pos: targetPos, chess: toChess } });
  if (targetChess?.type === ChessType.Jiang) {
    emitZGXQAction({ id: 'zgxq-game-over', type: ZGXQActionType.GAME_OVER, ext: { user: chess.color } });
  }
}
