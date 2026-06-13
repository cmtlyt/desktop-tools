// ============================================================
// 辅助函数
// ============================================================

import { HonorValue, Meld, MeldType, Player, Suit, Tile, Wind } from '../type';

export function createTile(suit: Suit, value: number | HonorValue, id: number): Tile {
  const labels: Record<Suit, string[]> = {
    [Suit.Wan]: ['', '一万', '二万', '三万', '四万', '五万', '六万', '七万', '八万', '九万'],
    [Suit.Tiao]: ['', '一条', '二条', '三条', '四条', '五条', '六条', '七条', '八条', '九条'],
    [Suit.Tong]: ['', '一筒', '二筒', '三筒', '四筒', '五筒', '六筒', '七筒', '八筒', '九筒'],
    [Suit.Feng]: [],
  };
  const honorLabels: Record<string, string> = {
    [HonorValue.East]: '东',
    [HonorValue.South]: '南',
    [HonorValue.West]: '西',
    [HonorValue.North]: '北',
    [HonorValue.Zhong]: '红中',
    [HonorValue.Fa]: '发财',
    [HonorValue.Bai]: '白板',
  };
  const label = suit === Suit.Feng ? honorLabels[value as string] : labels[suit][value as number];
  return { id, suit, value, label };
}

export function createPlayer(hand: Tile[], melds: Meld[] = []): Player {
  return {
    index: 0,
    name: '测试玩家',
    hand,
    melds,
    discards: [],
    flowers: [],
    lastDrawnTile: null,
    wind: 'east' as Wind,
    isDealer: false,
    isAI: false,
  };
}

export function chow(tiles: Tile[]): Meld {
  return { type: MeldType.Sequence, tiles, fromPlayer: 1 };
}
export function pong(tiles: Tile[]): Meld {
  return { type: MeldType.Pong, tiles, fromPlayer: 1 };
}
export function exposedKong(tiles: Tile[]): Meld {
  return { type: MeldType.ExposedKong, tiles, fromPlayer: 1 };
}
export function concealedKong(tiles: Tile[]): Meld {
  return { type: MeldType.ConcealedKong, tiles, fromPlayer: -1 };
}
