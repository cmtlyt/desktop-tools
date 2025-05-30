import { Box, IUIInputData, PointerEvent, IUI, IPointData } from 'leafer-ui';
import '@leafer-in/state';
import '@leafer-in/animate';
import '@leafer-in/flow';
import { Block, BlockStatus, FinishedBlock, GameInfo } from './type';
import { emitSLAction, SLActionType } from './subject';
import { HistoryInfo } from './right-area';
import { isEmpty } from '@cmtlyt/base';

function getAroundBlocks<T extends Block>(blocks: T[][], block: FinishedBlock): T[] {
  const { row, col } = block;
  return [
    blocks[row - 1]?.[col - 1],
    blocks[row - 1]?.[col],
    blocks[row - 1]?.[col + 1],
    blocks[row][col - 1],
    blocks[row][col + 1],
    blocks[row + 1]?.[col - 1],
    blocks[row + 1]?.[col],
    blocks[row + 1]?.[col + 1],
  ].filter(Boolean);
}

function generateBlocksMineInfo(blocks: Block[][]): [FinishedBlock[][], string[]] {
  const mines: string[] = [];
  const _blocks = blocks.map((row, rowIdx) => {
    return row.map((block, colIdx) => {
      if (block.type === 'mine') mines.push(`${rowIdx}-${colIdx}`);
      const posBlock = { ...block, row: rowIdx, col: colIdx, mineCount: 0, hasContent: false };
      const aroundBlocks = getAroundBlocks(blocks, posBlock);
      const mineCount = aroundBlocks.filter((block) => block.type === 'mine').length;
      return { ...posBlock, mineCount };
    });
  });
  return [_blocks, mines];
}

export function generateBlocks(row: number, col: number, mineCount: number): [FinishedBlock[][], string[]] {
  const random = () => Math.random() - 0.5;
  const flatBlocks = new Array(mineCount)
    .fill(0)
    .map(() => ({ status: BlockStatus.unopen, type: 'mine' }) as Block)
    .concat(Array.from({ length: row * col - mineCount }, () => ({ status: BlockStatus.unopen, type: 'number' })))
    .sort(random);
  const blocks = Array.from({ length: row }, (_, idx) => flatBlocks.slice(idx * col, idx * col + col)).sort(random);
  return generateBlocksMineInfo(blocks);
}

function getAroundUnOpenBlocks(blocks: FinishedBlock[][], baseBlocks: FinishedBlock[]): Set<FinishedBlock> {
  const blockSet = new Set<FinishedBlock>();
  baseBlocks.forEach((baseBlock) => {
    getAroundBlocks(blocks, baseBlock).forEach((block) => {
      if (block.type === 'number' && block.status === BlockStatus.unopen) blockSet.add(block);
    });
  });
  return blockSet;
}

function getEmptyBlockAroundUnOpenBlocks(blocks: FinishedBlock[][], baseBlocks: FinishedBlock[]) {
  const filterBaseBlocks = baseBlocks.filter(isEmptyBlock);
  return getAroundUnOpenBlocks(blocks, filterBaseBlocks);
}

const sleep = async (timer: number) => new Promise((r) => setTimeout(r, timer));

async function* getEmptyBlockAroundUnOpenBlocksWithGapTime(
  blocks: FinishedBlock[][],
  baseBlocks: FinishedBlock[],
  gapTime: number,
) {
  let blockSet: Set<FinishedBlock> = new Set(baseBlocks);
  do {
    blockSet = getEmptyBlockAroundUnOpenBlocks(blocks, [...blockSet]);
    yield blockSet;
    await sleep(gapTime);
  } while (blockSet.size);
}

function openBlock(blocks: FinishedBlock[], gameInfo: GameInfo) {
  gameInfo.openBlock += blocks.length;
  return blocks.map((block) => {
    block.status = BlockStatus.open;
    if (block.type === 'mine') throw { custom: true, msg: 'game over' };
    return block;
  });
}

export async function openBlockWithGeneraterFunc(
  blocks: FinishedBlock[][],
  needOpenBlocks: FinishedBlock[],
  gameInfo: GameInfo,
): Promise<void>;
export async function openBlockWithGeneraterFunc(
  blocks: FinishedBlock[][],
  row: number,
  col: number,
  gameInfo: GameInfo,
): Promise<void>;
export async function openBlockWithGeneraterFunc(
  blocks: FinishedBlock[][],
  row: number | FinishedBlock[],
  col: number | GameInfo,
  gameInfo?: GameInfo,
) {
  let _needOpenBlock: FinishedBlock[];
  if (typeof row === 'number' && typeof col === 'number') _needOpenBlock = [blocks[row][col]];
  else if (Array.isArray(row) && typeof col === 'object') {
    gameInfo = col;
    _needOpenBlock = row;
  } else return;
  const _gameInfo = gameInfo!;
  const { blockSize, leafer } = _gameInfo;
  try {
    const openedBlock = openBlock(_needOpenBlock, _gameInfo);
    updateRender(leafer.children[0] as Box, openedBlock, blockSize);
    const emptyBlockAroundUnOpenBlocks = getEmptyBlockAroundUnOpenBlocksWithGapTime(blocks, _needOpenBlock, 100);
    for await (const emptyBlockSet of emptyBlockAroundUnOpenBlocks) {
      const openedBlock = openBlock([...emptyBlockSet], _gameInfo);
      updateRender(leafer.children[0] as Box, openedBlock, blockSize);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    updateRender(leafer.children[0] as Box, _needOpenBlock, blockSize);
    gameOver(false);
    if (e.custom) throw e;
  }
}

function syncChangeChildrenState(box: IUI, state: BlockStatus) {
  box.state = state;
  box.children?.forEach((item) => (item.state = state));
}

export function updateRender(group: Box | undefined, blocks: FinishedBlock[], blockSize: number) {
  if (!group) return;
  blocks.forEach((block) => {
    const $block = group.children[block.row]?.children?.[block.col];
    if (!$block) return;
    const { status, hasContent, type, mineCount } = block;
    if (!hasContent && (status !== BlockStatus.open || type !== 'number' || mineCount !== 0)) {
      block.hasContent = true;
      const content = generateContent(block, blockSize);
      $block.add(content);
    }
    syncChangeChildrenState($block, status);
  });
}

function generateContent(block: FinishedBlock, blockSize: number) {
  const { type, mineCount } = block;
  const baseProps = {
    fontSize: blockSize - 2,
    fill: 'transparent',
    textAlign: 'center',
    width: blockSize,
    height: blockSize,
    lineHeight: blockSize,
    transition: 0.4,
    corners: 8,
    cornerRadius: 1,
    innerRadius: 0.2,
  } as const;
  const flagStates = { [BlockStatus.flag]: { fill: 'yellow' } };
  const questionStates = { [BlockStatus.question]: { fill: 'green' } };
  const baseContent: IUIInputData[] = [
    { tag: 'Text', ...baseProps, text: '?', states: questionStates },
    { tag: 'Star', ...baseProps, states: flagStates },
  ];
  if (type === 'number' && !mineCount) return baseContent;
  const isMine = type === 'mine';
  const content: IUIInputData = {
    tag: isMine ? 'Star' : 'Text',
    ...baseProps,
    text: isMine ? 'X' : mineCount.toString(),
    zIndex: isMine ? 2 : 1,
    states: {
      [BlockStatus.open]: { fill: isMine ? 'red' : 'black' },
    },
  } as const;
  return [...baseContent, content];
}

export function render(gameInfo: GameInfo) {
  const { gap, leafer, blocks } = gameInfo;
  const group = new Box({ stroke: 'block', strokeWidth: 1, flow: 'y', gap: gap, padding: gap * 2 });
  blocks.forEach((row) => {
    const rowGroup = new Box({ flow: 'x', gap: gap });
    group.add(rowGroup);
    row.forEach((block) => {
      const rect = createBlock(block, gameInfo);
      rowGroup.add(rect);
    });
  });
  leafer.add(group);
}

function tapHandler(block: FinishedBlock, gameInfo: GameInfo) {
  const { row, col, status } = block;
  if (status === BlockStatus.open) return;
  const { blocks } = gameInfo;
  openBlockWithGeneraterFunc(blocks, row, col, gameInfo);
}

function gameOver(isWin: boolean) {
  emitSLAction({ id: 'sl-game-over', type: SLActionType.GAME_OVER, ext: { isWin } });
}

function menuTapHandler(block: FinishedBlock, gameInfo: GameInfo) {
  const { status, type } = block;
  if (status === BlockStatus.open) return;
  const { leafer, blockSize } = gameInfo;
  if (status === BlockStatus.unopen) {
    block.status = BlockStatus.flag;
    if (type === 'mine') ++gameInfo.mineCount;
    ++gameInfo.userMiniCount;
  } else if (status === BlockStatus.flag) {
    block.status = BlockStatus.question;
    if (type === 'mine') --gameInfo.mineCount;
    --gameInfo.userMiniCount;
  } else if (status === BlockStatus.question) block.status = BlockStatus.unopen;
  updateRender(leafer.children[0] as Box, [block], blockSize);
}

function checkGameOver(gameInfo: GameInfo) {
  const { openBlock, mineTotal, row, col, mineCount } = gameInfo;

  if (mineTotal === mineCount) gameOver(true);
  if (openBlock + mineTotal >= row * col) gameOver(true);
}

function runHandler(type: string, block: FinishedBlock, gameInfo: GameInfo) {
  if (type === PointerEvent.TAP) tapHandler(block, gameInfo);
  else if (type === PointerEvent.MENU_TAP) menuTapHandler(block, gameInfo);

  checkGameOver(gameInfo);
}

function showPointer(box: Box) {
  const oldState = box.state;
  box.state = 'highlight';

  return () => (box.state = oldState);
}

const blockEventHandler = (() => {
  let prevHidePointer: (() => void) | null = null;
  const setPrevHidePointer = (func: typeof prevHidePointer) => {
    prevHidePointer = () => {
      func?.();
      prevHidePointer = null;
    };
  };
  return function blockEventHandler(e: PointerEvent, box: Box, block: FinishedBlock, gameInfo: GameInfo) {
    if (gameInfo.status === 'over') return;
    if (gameInfo.isPhone) {
      prevHidePointer?.();
      if (block.status === BlockStatus.open && isEmpty(block)) {
        return emitSLAction({ id: 'sl-phone-handler', type: SLActionType.PHONE_HANDLER });
      }
      const hidePointer = showPointer(box);
      setPrevHidePointer(hidePointer);
      return emitSLAction({
        id: 'sl-phone-handler',
        type: SLActionType.PHONE_HANDLER,
        ext: {
          block,
          gameInfo,
          disableAutoLogger: true,
          eventCallback(type) {
            prevHidePointer?.();
            if (!type) return;
            runHandler(type, block, gameInfo);
          },
        },
      });
    }
    runHandler(e.type, block, gameInfo);
  };
})();

function createBlock(block: FinishedBlock, gameInfo: GameInfo) {
  const { blockSize } = gameInfo;
  const box = new Box({
    width: blockSize,
    height: blockSize,
    fill: 'yellowgreen',
    button: true,
    zIndex: 1,
    states: {
      [BlockStatus.open]: {
        animation: {
          keyframes: [{ fill: 'yellowgreen' }, { fill: 'transparent' }],
          duration: 1,
          ending: 'to',
        },
      },
      highlight: {
        animation: {
          keyframes: [{ fill: '#ffcac4' }, { fill: '#ff4949' }],
          duration: 0.5,
          swing: true,
          loop: true,
        },
      },
    },
  });
  box.on([PointerEvent.TAP, PointerEvent.MENU_TAP], (e) => blockEventHandler(e, box, block, gameInfo));
  return box;
}

export function getScore(gameInfo: HistoryInfo) {
  const { row, col, mineTotal, durationOfUse, isWin, openBlock } = gameInfo;
  // 雷比得分(20): >50% -> 100
  // 时长得分(20): 时长(s) / 格数 <= 0.5 -> 100
  // 翻开格数(20): 翻开格数 / 格数 * 100 | win -> 100
  // 胜利得分(40): win -> 100
  const totalCell = row * col;
  const mineScore = Math.min(mineTotal / totalCell, 0.5) * 100 * 2;
  const durationScore = Math.abs(Math.min(durationOfUse / 1000 / totalCell - 1, 0)) * 100;
  const openBlockScore = (openBlock / (totalCell - mineTotal)) * 100;
  const minePc = 0.2;
  const durationPc = 0.2;
  const openBlockPc = 0.2;
  let score;
  if (isWin) score = Math.min(100, mineScore * minePc + durationScore * durationPc + 40 + 20);
  else score = Math.min(mineScore * minePc + (100 - durationScore) * durationPc + openBlockScore * openBlockPc, 60);
  return Number(score.toFixed(3));
}

export function getPointDistance(pos1: number[], pos2: number[]): number {
  const x = Math.abs(pos2[0] - pos1[0]);
  const y = Math.abs(pos2[1] - pos1[1]);
  return Math.sqrt(x * x + y * y);
}

export function getBlockFromPoint(pos: IPointData, gameInfo: GameInfo): FinishedBlock | null {
  const { x, y } = pos;
  const { blockSize, gap, blocks, row: maxRow, col: maxCol } = gameInfo;
  const _blockSize = blockSize + gap;
  const row = Math.floor(y / _blockSize);
  const col = Math.floor(x / _blockSize);
  if (row >= maxRow || col >= maxCol) return null;
  return blocks[row][col];
}

export function isEmptyBlock(block: FinishedBlock): boolean {
  return block.type === 'number' && block.mineCount === 0;
}

export async function probeAround(block: FinishedBlock, gameInfo: GameInfo) {
  if (block.status !== BlockStatus.open || isEmptyBlock(block)) return;
  const { blocks } = gameInfo;
  const aroundBlocks = getAroundBlocks(blocks, block);
  // 存在未标记的地雷 block
  if (aroundBlocks.some((item) => item.type === 'mine' && item.status !== BlockStatus.flag)) return;
  const filteredAroundBlock = aroundBlocks.filter((item) => item.status === BlockStatus.unopen);
  if (!filteredAroundBlock.length) return;
  return openBlockWithGeneraterFunc(blocks, filteredAroundBlock, gameInfo).then(() => checkGameOver(gameInfo));
}

export function showAllMine(gameInfo: GameInfo) {
  const { leafer, mines, blockSize, blocks } = gameInfo;
  const box = leafer.children[0] as Box;
  mines.forEach((item) => {
    const [row, col] = item.split('-');
    const block = blocks[+row][+col];
    const $block = box.children[+row]?.children?.[+col] as Box;
    if (!block.hasContent) {
      const content = generateContent(block, blockSize);
      $block.add(content);
    }
    syncChangeChildrenState($block, BlockStatus.open);
  });
}
