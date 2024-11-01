import { Leafer, Box, IUIInputData, PointerEvent, IUI } from 'leafer-ui';
import '@leafer-in/state';
import '@leafer-in/animate';
import '@leafer-in/flow';

enum BlockStatus {
  unopen = 'unopen',
  open = 'open',
  flag = 'flag',
  question = 'question',
}

interface Block {
  status: BlockStatus;
  type: 'mine' | 'number';
}

interface FinishedBlock extends Block {
  row: number;
  col: number;
  mineCount: number;
  hasContent: boolean;
}

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

function generateBlocks(row: number, col: number, mineCount: number): FinishedBlock[][] {
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

async function openBlockWithGeneraterFunc(row: number, col: number) {
  const block = blocks[row][col];
  try {
    const openedBlock = openBlock([block]);
    updateRender(leafer.children[0] as Box, openedBlock);
    const emptyBlockAroundUnOpenBlocks = getEmptyBlockAroundUnOpenBlocksWithGapTime(blocks, [block], 100);
    for await (const emptyBlockSet of emptyBlockAroundUnOpenBlocks) {
      const openedBlock = openBlock([...emptyBlockSet]);
      updateRender(leafer.children[0] as Box, openedBlock);
    }
  } catch (e) {
    updateRender(leafer.children[0] as Box, [block]);
    gameOver(false);
    if (e.custom) throw e;
  }
}

function generateContent(block: FinishedBlock) {
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

function tapHandler(block: FinishedBlock) {
  const { row, col, status } = block;
  if (status === BlockStatus.open) return;
  openBlockWithGeneraterFunc(row, col);
}

function gameOver(isWin: boolean) {
  if (isWin) alert('game win');
  else alert('game over');
}

function menuTapHandler(block: FinishedBlock) {
  const { status, type } = block;
  if (status === BlockStatus.open) return;
  if (status === BlockStatus.unopen) {
    block.status = BlockStatus.flag;
    if (type === 'mine') --mineCount;
    if (mineCount === 0) gameOver(true);
  } else if (status === BlockStatus.flag) {
    block.status = BlockStatus.question;
    if (type === 'mine') ++mineCount;
  } else if (status === BlockStatus.question) block.status = BlockStatus.unopen;

  updateRender(leafer.children[0] as Box, [block]);
}

function blockEventHandler(e: PointerEvent, box: Box, block: FinishedBlock) {
  if (e.type === PointerEvent.TAP) return tapHandler(block);
  if (e.type === PointerEvent.MENU_TAP) return menuTapHandler(block);
}

function createBlock(block: FinishedBlock) {
  const box = new Box({
    width: blockSize,
    height: blockSize,
    fill: 'yellowgreen',
    button: true,
    zIndex: 1,
    states: {
      [BlockStatus.open]: {
        animation: { keyframes: [{ fill: 'yellowgreen' }, { fill: 'transparent' }], duration: 1, ending: 'to' },
      },
    },
  });
  box.on([PointerEvent.TAP, PointerEvent.MENU_TAP], (e) => blockEventHandler(e, box, block));
  return box;
}

function render(blocks: FinishedBlock[][]) {
  const group = new Box({ stroke: 'block', strokeWidth: 1, flow: 'y', gap: gap, padding: gap * 2 });
  blocks.forEach((row) => {
    const rowGroup = new Box({ flow: 'x', gap: gap });
    group.add(rowGroup);
    row.forEach((block) => {
      const rect = createBlock(block);
      rowGroup.add(rect);
    });
  });
  leafer.add(group);
}

function syncChangeChildrenState(box: IUI, state: BlockStatus) {
  box.state = state;
  box.children?.forEach((item) => (item.state = state));
}

function updateRender(group: Box | undefined, blocks: FinishedBlock[]) {
  if (!group) return;
  blocks.forEach((block) => {
    const $block = group.children[block.row]?.children?.[block.col];
    if (!$block) return;
    const { status, hasContent, type, mineCount } = block;
    if (!hasContent && (status !== BlockStatus.open || type !== 'number' || mineCount !== 0)) {
      const content = generateContent(block);
      $block.add(content);
    }
    syncChangeChildrenState($block, status);
  });
}

const $container = document.querySelector('.container') as HTMLDivElement;

const gap = 2;
const blockSize = 20;
let mineCount = 10;

const leafer = new Leafer({ view: $container });

const blocks = generateBlocks(5, 5, mineCount);

render(blocks);
