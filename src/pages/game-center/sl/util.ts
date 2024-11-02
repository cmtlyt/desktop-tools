import { Box, IUIInputData, PointerEvent, IUI } from 'leafer-ui';
import '@leafer-in/state';
import '@leafer-in/animate';
import '@leafer-in/flow';
import { Block, BlockStatus, FinishedBlock, GameInfo } from './type';
import { emitSLAction, SLActionType } from './subject';
import { HistoryInfo } from './right-area';

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

function generateBlocksMineInfo(blocks: Block[][]): FinishedBlock[][] {
  return blocks.map((row, rowIdx) => {
    return row.map((block, colIdx) => {
      const posBlock = { ...block, row: rowIdx, col: colIdx, mineCount: 0, hasContent: false };
      const aroundBlocks = getAroundBlocks(blocks, posBlock);
      const mineCount = aroundBlocks.filter((block) => block.type === 'mine').length;
      return { ...posBlock, mineCount };
    });
  });
}

export function generateBlocks(row: number, col: number, mineCount: number): FinishedBlock[][] {
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
  const filterBaseBlocks = baseBlocks.filter((block) => block.type === 'number' && block.mineCount === 0);
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

function openBlock(blocks: FinishedBlock[]) {
  return blocks.map((block) => {
    if (block.status === BlockStatus.unopen) block.status = BlockStatus.open;
    if (block.type === 'mine') throw { custom: true, msg: 'game over' };
    return block;
  });
}

export async function openBlockWithGeneraterFunc(
  blocks: FinishedBlock[][],
  row: number,
  col: number,
  gameInfo: GameInfo,
) {
  const block = blocks[row][col];
  const { blockSize, leafer } = gameInfo;
  try {
    const openedBlock = openBlock([block]);
    updateRender(leafer.children[0] as Box, openedBlock, blockSize, gameInfo);
    const emptyBlockAroundUnOpenBlocks = getEmptyBlockAroundUnOpenBlocksWithGapTime(blocks, [block], 100);
    for await (const emptyBlockSet of emptyBlockAroundUnOpenBlocks) {
      const openedBlock = openBlock([...emptyBlockSet]);
      updateRender(leafer.children[0] as Box, openedBlock, blockSize, gameInfo);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    updateRender(leafer.children[0] as Box, [block], blockSize, gameInfo);
    gameOver(false);
    if (e.custom) throw e;
  }
}

function syncChangeChildrenState(box: IUI, state: BlockStatus) {
  box.state = state;
  box.children?.forEach((item) => (item.state = state));
}

export function updateRender(group: Box | undefined, blocks: FinishedBlock[], blockSize: number, gameInfo: GameInfo) {
  if (!group) return;
  gameInfo.openBlock += blocks.length;
  blocks.forEach((block) => {
    const $block = group.children[block.row]?.children?.[block.col];
    if (!$block) return;
    const { status, hasContent, type, mineCount } = block;
    if (!hasContent && (status !== BlockStatus.open || type !== 'number' || mineCount !== 0)) {
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
  } else if (status === BlockStatus.flag) {
    block.status = BlockStatus.question;
    if (type === 'mine') --gameInfo.mineCount;
  } else if (status === BlockStatus.question) block.status = BlockStatus.unopen;
  updateRender(leafer.children[0] as Box, [block], blockSize, gameInfo);
}

function runHandler(type: string, block: FinishedBlock, gameInfo: GameInfo) {
  if (type === PointerEvent.TAP) tapHandler(block, gameInfo);
  else if (type === PointerEvent.MENU_TAP) menuTapHandler(block, gameInfo);

  const { openBlock, mineTotal, row, col, mineCount } = gameInfo;
  if (mineTotal === mineCount) gameOver(true);
  if (openBlock + mineTotal >= row * col) gameOver(true);
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
      if (block.status === BlockStatus.open && block.type === 'number' && block.mineCount === 0) {
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
  const { row, col, mineTotal, durationOfUse, isWin } = gameInfo;
  // 雷比得分(30): >50% -> 100
  // 时长得分(30): 时长(s) / 格数 <= 0.5 -> 100
  // 胜利得分(40): win -> 100
  const totalCell = row * col;
  const mineScore = Math.min(mineTotal / totalCell, 0.5) * 100 * 2;
  const durationScore = Math.abs(Math.min(durationOfUse / 1000 / totalCell - 1, 0)) * 100;
  let score;
  if (isWin) score = Math.min(100, mineScore * 0.3 + durationScore * 0.3 + 40);
  else score = Math.min(mineScore * 0.3 + (100 - durationScore) * 0.3, 60);
  return Number(score.toFixed(3));
}
