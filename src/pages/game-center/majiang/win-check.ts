import {
  Tile, Suit, HonorValue, Player, Meld, MeldType, WinDecomposition,
} from './type';
import { isJokerTile } from './util';

// ============================================================
// 牌映射工具函数
// ============================================================

/** 将 Tile 映射为 0-33 的整数索引 */
function tileToIndex(tile: Tile): number {
  if (tile.suit === Suit.Feng) {
    const honorMap: Record<string, number> = {
      [HonorValue.East]: 27, [HonorValue.South]: 28,
      [HonorValue.West]: 29, [HonorValue.North]: 30,
      [HonorValue.Zhong]: 31, [HonorValue.Fa]: 32,
      [HonorValue.Bai]: 33,
    };
    return honorMap[tile.value as string] ?? -1;
  }
  const suitOffset = tile.suit === Suit.Wan ? 0 : tile.suit === Suit.Tiao ? 9 : 18;
  return suitOffset + (tile.value as number) - 1;
}

/** 将 0-33 索引还原为 Tile 对象 */
function indexToTile(index: number, id: number): Tile {
  if (index >= 27) {
    const honors = [HonorValue.East, HonorValue.South, HonorValue.West, HonorValue.North, HonorValue.Zhong, HonorValue.Fa, HonorValue.Bai];
    const honorValue = honors[index - 27];
    const labels: Record<string, string> = {
      [HonorValue.East]: '东', [HonorValue.South]: '南',
      [HonorValue.West]: '西', [HonorValue.North]: '北',
      [HonorValue.Zhong]: '红中', [HonorValue.Fa]: '发财', [HonorValue.Bai]: '白板',
    };
    return { id, suit: Suit.Feng, value: honorValue, label: labels[honorValue] };
  }
  const suit = index < 9 ? Suit.Wan : index < 18 ? Suit.Tiao : Suit.Tong;
  const value = (index % 9) + 1;
  const suitLabels: Record<Suit, string[]> = {
    [Suit.Wan]: ['', '一万', '二万', '三万', '四万', '五万', '六万', '七万', '八万', '九万'],
    [Suit.Tiao]: ['', '一条', '二条', '三条', '四条', '五条', '六条', '七条', '八条', '九条'],
    [Suit.Tong]: ['', '一筒', '二筒', '三筒', '四筒', '五筒', '六筒', '七筒', '八筒', '九筒'],
    [Suit.Feng]: [],
  };
  return { id, suit, value, label: suitLabels[suit][value] };
}

/** 构建手牌计数数组，返回 { counts, wildCount } */
function buildCounts(hand: Tile[], jokerTile: Tile | null): { counts: number[]; wildCount: number } {
  const counts = new Array(34).fill(0);
  let wildCount = 0;
  for (const tile of hand) {
    if (isJokerTile(tile, jokerTile)) {
      wildCount++;
    } else {
      const idx = tileToIndex(tile);
      if (idx >= 0) counts[idx]++;
    }
  }
  return { counts, wildCount };
}

// ============================================================
// 基础胡牌判定（无赖子）
// ============================================================

/**
 * 基础胡牌判定（无赖子）
 * @param counts - 34维计数数组（会在递归中修改，需传入拷贝）
 * @param minMelds - 最少还需组成的面子数（通常为0，表示可以组成任意数量的面子）
 * @param needPair - 是否还需要将牌
 */
function checkWinBasic(counts: number[], minMelds: number, needPair = true): boolean {
  // 找到第一个非零位置
  let i = 0;
  while (i < 34 && counts[i] === 0) i++;

  // 所有牌都处理完了：检查是否满足最少面子数要求
  if (i === 34) return minMelds <= 0 && !needPair;

  // 剪枝：剩余牌数必须能分解为 k 组面子 + (needPair ? 1对子 : 0)
  // 即 remaining = k * 3 + (needPair ? 2 : 0)，且 k >= minMelds
  let remaining = 0;
  for (let j = i; j < 34; j++) remaining += counts[j];
  const minNeeded = minMelds * 3 + (needPair ? 2 : 0);
  if (remaining < minNeeded) return false;
  if (needPair && (remaining - 2) % 3 !== 0) return false;
  if (!needPair && remaining % 3 !== 0) return false;

  // 1. 尝试将牌
  if (needPair && counts[i] >= 2) {
    counts[i] -= 2;
    if (checkWinBasic(counts, minMelds, false)) { counts[i] += 2; return true; }
    counts[i] += 2;
  }

  // 2. 尝试刻子
  if (counts[i] >= 3) {
    counts[i] -= 3;
    if (checkWinBasic(counts, minMelds - 1, needPair)) { counts[i] += 3; return true; }
    counts[i] += 3;
  }

  // 3. 尝试顺子（仅数牌 0-26，且 i 在花色内位置 <= 6）
  if (i < 27 && (i % 9) <= 6 && counts[i + 1] >= 1 && counts[i + 2] >= 1) {
    counts[i]--; counts[i + 1]--; counts[i + 2]--;
    if (checkWinBasic(counts, minMelds - 1, needPair)) {
      counts[i]++; counts[i + 1]++; counts[i + 2]++; return true;
    }
    counts[i]++; counts[i + 1]++; counts[i + 2]++;
  }

  return false;
}

// ============================================================
// 财神替换相关
// ============================================================

/** 生成带重复的组合（惰性生成） */
function* combinationsWithReplacement(arr: number[], k: number): Generator<number[]> {
  if (k === 0) { yield []; return; }
  for (let i = 0; i < arr.length; i++) {
    for (const tail of combinationsWithReplacement(arr.slice(i), k - 1)) {
      yield [arr[i], ...tail];
    }
  }
}

/** 获取"相关牌"索引（手牌已有的 + 相邻可组顺子的） */
function getRelevantTiles(counts: number[]): number[] {
  const relevantSet = new Set<number>();
  for (let i = 0; i < 34; i++) {
    if (counts[i] > 0) {
      relevantSet.add(i);
      if (i < 27) {
        if (i % 9 > 0) relevantSet.add(i - 1);
        if (i % 9 < 8) relevantSet.add(i + 1);
        if (i % 9 > 1) relevantSet.add(i - 2);
        if (i % 9 < 7) relevantSet.add(i + 2);
      }
    }
  }
  return Array.from(relevantSet).sort((a, b) => a - b);
}

/**
 * 带财神(赖子)的胡牌判定
 * @param counts - 34维计数数组（不含财神）
 * @param wildCount - 财神数量
 * @param minMelds - 最少需要凑的面子数（通常为0，表示手牌能组成任意数量的面子+1对子即可）
 */
function checkWinWithWild(counts: number[], wildCount: number, minMelds: number): boolean {
  // 总牌数校验：手牌必须能分解为 k 组面子 + 1 对子（k >= minMelds）
  // 即 total = k * 3 + 2
  let total = wildCount;
  for (let i = 0; i < 34; i++) total += counts[i];
  if (total < minMelds * 3 + 2) return false;
  if ((total - 2) % 3 !== 0) return false;

  if (wildCount === 0) return checkWinBasic(counts.slice(), minMelds);

  // 只枚举"相关牌"
  const relevant = getRelevantTiles(counts);

  for (const assignment of combinationsWithReplacement(relevant, wildCount)) {
    const temp = counts.slice();
    for (const tile of assignment) temp[tile]++;
    if (checkWinBasic(temp, minMelds)) return true;
  }
  return false;
}

// ============================================================
// 收集所有分解方案（用于台数计算）
// ============================================================

/**
 * 基础判定 - 收集所有分解方案
 */
function collectDecompositions(
  counts: number[],
  meldsLeft: number,
  needPair: boolean,
  melds: Meld[],
  pair: number[] | null,
  results: WinDecomposition[],
): void {
  let i = 0;
  while (i < 34 && counts[i] === 0) i++;

  if (i === 34) {
    if (meldsLeft === 0 && !needPair) {
      const isAllSeq = melds.every((m) => m.type === MeldType.Sequence);
      const pairTiles = pair ? pair.map((idx, pos) => indexToTile(idx, 9000 + pos)) : [];
      results.push({ melds: [...melds], pair: pairTiles, isAllSequence: isAllSeq });
    }
    return;
  }

  let remaining = 0;
  for (let j = i; j < 34; j++) remaining += counts[j];
  if (remaining !== meldsLeft * 3 + (needPair ? 2 : 0)) return;

  // 尝试将牌
  if (needPair && counts[i] >= 2) {
    counts[i] -= 2;
    collectDecompositions(counts, meldsLeft, false, melds, [i, i], results);
    counts[i] += 2;
  }

  // 尝试刻子
  if (counts[i] >= 3) {
    counts[i] -= 3;
    melds.push({ type: MeldType.Triplet, tiles: [] });
    collectDecompositions(counts, meldsLeft - 1, needPair, melds, pair, results);
    melds.pop();
    counts[i] += 3;
  }

  // 尝试顺子
  if (i < 27 && (i % 9) <= 6 && counts[i + 1] >= 1 && counts[i + 2] >= 1) {
    counts[i]--; counts[i + 1]--; counts[i + 2]--;
    melds.push({ type: MeldType.Sequence, tiles: [] });
    collectDecompositions(counts, meldsLeft - 1, needPair, melds, pair, results);
    melds.pop();
    counts[i]++; counts[i + 1]++; counts[i + 2]++;
  }
}

/**
 * 获取所有可能的胡牌分解方案（含财神替换）
 */
function getAllWinDecompositions(
  counts: number[],
  wildCount: number,
  meldsNeeded: number,
): WinDecomposition[] {
  let total = wildCount;
  for (let i = 0; i < 34; i++) total += counts[i];
  if (total !== meldsNeeded * 3 + 2) return [];

  if (wildCount === 0) {
    const results: WinDecomposition[] = [];
    collectDecompositions(counts.slice(), meldsNeeded, true, [], null, results);
    return results;
  }

  const relevant = getRelevantTiles(counts);
  const allResults: WinDecomposition[] = [];

  for (const assignment of combinationsWithReplacement(relevant, wildCount)) {
    const temp = counts.slice();
    for (const tile of assignment) temp[tile]++;
    collectDecompositions(temp, meldsNeeded, true, [], null, allResults);
  }

  return allResults;
}

// ============================================================
// 入口函数
// ============================================================

/** 手牌(不含已亮面子)能否胡牌：判断手牌是否能组成 n组面子 + 1对子 */
export function canWin(player: Player, jokerTile: Tile | null): boolean {
  const { counts, wildCount } = buildCounts(player.hand, jokerTile);
  return checkWinWithWild(counts, wildCount, 0);
}

/** 加上一张牌后能否胡 */
export function canWinWithTile(player: Player, tile: Tile, jokerTile: Tile | null): boolean {
  const tempHand = [...player.hand, tile];
  const { counts, wildCount } = buildCounts(tempHand, jokerTile);
  return checkWinWithWild(counts, wildCount, 0);
}

/** 获取所有胡牌分解方案（用于台数计算） */
export function getWinDecompositions(
  hand: Tile[],
  existingMelds: Meld[],
  jokerTile: Tile | null,
): WinDecomposition[] {
  const meldsNeeded = 4 - existingMelds.length;
  const { counts, wildCount } = buildCounts(hand, jokerTile);
  return getAllWinDecompositions(counts, wildCount, meldsNeeded);
}
