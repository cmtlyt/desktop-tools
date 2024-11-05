import { Leafer } from 'leafer-ui';

export enum BlockStatus {
  unopen = 'unopen',
  open = 'open',
  flag = 'flag',
  question = 'question',
}

export interface Block {
  status: BlockStatus;
  type: 'mine' | 'number';
}

export interface FinishedBlock extends Block {
  row: number;
  col: number;
  mineCount: number;
  hasContent: boolean;
}

export type GameStatus = 'paying' | 'over';

export interface BaseGameInfo {
  gameId: string;
  row: number;
  col: number;
  gap: number;
  startTime: number;
  blockSize: number;
  mineTotal: number;
  mineCount: number;
  openBlock: number;
  status: GameStatus;
  mines: string[];
  userMiniCount: number;
}

export interface GameInfo extends BaseGameInfo {
  isPhone: boolean;
  leafer: Leafer;
  blocks: FinishedBlock[][];
}
