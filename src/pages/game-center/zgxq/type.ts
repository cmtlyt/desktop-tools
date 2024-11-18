export enum ChessType {
  Bing = 'bing',
  Pao = 'pao',
  Che = 'che',
  Ma = 'ma',
  Xiang = 'xiang',
  Shi = 'shi',
  Jiang = 'jiang',
}

export interface ChessItem {
  type: ChessType;
  color: 'red' | 'black';
  isActive: boolean;
}

export type CheckerboardData = Array<Array<ChessItem | null>>;

export type Position = [number, number];
