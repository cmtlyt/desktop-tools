export interface ElementInfo {
  size: number;
  elementData: number[];
  rightSpace: number;
  topPos: number;
  width: number;
}

export type Position = 'left' | 'right' | 'bottom';

export interface ELSFKCustomEvent {
  custom: boolean;
  action: 'submit';
}

export interface GameInfo {
  gameId: string;
  score: number;
}
