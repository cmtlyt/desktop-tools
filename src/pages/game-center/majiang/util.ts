import {
  Tile,
  Suit,
  HonorValue,
  Wind,
  Player,
  GameState,
  MeldType,
  WinDecomposition,
  ScoreDetail,
  ActionType,
  PendingAction,
  PatternRule,
  ScoreContext,
  DiscardValidationRule,
} from './type';
import { DEFAULT_PATTERN_RULES, sortPatternRulesInPlace } from './score-config';
import { canWin, canWinWithTile, getWinDecompositions } from './win-check';

export { canWin, canWinWithTile, getWinDecompositions };

// ============================================================
// 常量 & 牌表
// ============================================================

const SUIT_LABELS: Record<Suit, string[]> = {
  [Suit.Tong]: ['', '一筒', '二筒', '三筒', '四筒', '五筒', '六筒', '七筒', '八筒', '九筒'],
  [Suit.Tiao]: ['', '一条', '二条', '三条', '四条', '五条', '六条', '七条', '八条', '九条'],
  [Suit.Wan]: ['', '一万', '二万', '三万', '四万', '五万', '六万', '七万', '八万', '九万'],
  [Suit.Feng]: [],
};

const HONOR_LABELS: Record<HonorValue, string> = {
  [HonorValue.East]: '东',
  [HonorValue.South]: '南',
  [HonorValue.West]: '西',
  [HonorValue.North]: '北',
  [HonorValue.Zhong]: '红中',
  [HonorValue.Fa]: '发财',
  [HonorValue.Bai]: '白板',
};

const WIND_ORDER: Wind[] = [Wind.East, Wind.South, Wind.West, Wind.North];

// ============================================================
// 建牌 & 洗牌
// ============================================================

export function createAllTiles(): Tile[] {
  const tiles: Tile[] = [];
  let id = 0;
  const numberSuits = [Suit.Tong, Suit.Tiao, Suit.Wan];
  for (const suit of numberSuits) {
    for (let value = 1; value <= 9; value++) {
      for (let copy = 0; copy < 4; copy++) {
        tiles.push({ id: id++, suit, value, label: SUIT_LABELS[suit][value] });
      }
    }
  }
  const honors: HonorValue[] = [
    HonorValue.East,
    HonorValue.South,
    HonorValue.West,
    HonorValue.North,
    HonorValue.Zhong,
    HonorValue.Fa,
    HonorValue.Bai,
  ];
  for (const value of honors) {
    for (let copy = 0; copy < 4; copy++) {
      tiles.push({ id: id++, suit: Suit.Feng, value, label: HONOR_LABELS[value] });
    }
  }
  return tiles;
}

export function shuffleTiles(tiles: Tile[]): Tile[] {
  const shuffled = [...tiles];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ============================================================
// 花牌 & 财神判定
// ============================================================

/** 默认花牌: 红中、白板 */
const DEFAULT_FLOWER_VALUES = new Set<HonorValue>([HonorValue.Zhong, HonorValue.Bai]);

/** 判断一张牌是否为花牌(需考虑财神替补) */
export function isFlowerTile(tile: Tile, jokerTile: Tile | null): boolean {
  if (tile.suit !== Suit.Feng) return false;
  const tileValue = tile.value as HonorValue;
  if (jokerTile && isSameTileValue(tile, jokerTile)) return false;
  if (DEFAULT_FLOWER_VALUES.has(tileValue)) return true;
  if (jokerTile && DEFAULT_FLOWER_VALUES.has(jokerTile.value as HonorValue)) {
    return tileValue === HonorValue.Fa;
  }
  return false;
}

/** 判断是否为财神牌 */
export function isJokerTile(tile: Tile, jokerTile: Tile | null): boolean {
  if (!jokerTile) return false;
  return isSameTileValue(tile, jokerTile);
}

/** 牌面值相同(不看 id) */
export function isSameTileValue(tileA: Tile, tileB: Tile): boolean {
  return tileA.suit === tileB.suit && tileA.value === tileB.value;
}

// ============================================================
// 排序
// ============================================================

const SUIT_ORDER: Record<Suit, number> = {
  [Suit.Wan]: 0,
  [Suit.Tong]: 1,
  [Suit.Tiao]: 2,
  [Suit.Feng]: 3,
};

const HONOR_ORDER: Record<HonorValue, number> = {
  [HonorValue.East]: 0,
  [HonorValue.South]: 1,
  [HonorValue.West]: 2,
  [HonorValue.North]: 3,
  [HonorValue.Zhong]: 4,
  [HonorValue.Fa]: 5,
  [HonorValue.Bai]: 6,
};

function tileOrderKey(tile: Tile): number {
  const suitBase = SUIT_ORDER[tile.suit] * 100;
  if (tile.suit === Suit.Feng) return suitBase + HONOR_ORDER[tile.value as HonorValue];
  return suitBase + (tile.value as number);
}

export function sortTiles(tiles: Tile[]): Tile[] {
  return [...tiles].sort((a, b) => tileOrderKey(a) - tileOrderKey(b));
}

// ============================================================
// 发牌流程
// ============================================================

export function rollDice(): [number, number] {
  return [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)];
}

/**
 * 初始化游戏: 建牌、洗牌、掷骰、摸牌、定财神
 */
export function initGame(dealerIndex: number, dealerStreakCount: number): GameState {
  const allTiles = shuffleTiles(createAllTiles());
  const dice1 = rollDice();
  const dice2 = rollDice();
  const diceTotal = dice1[0] + dice1[1] + dice2[0] + dice2[1];

  // 首局随机庄家，后续使用传入的 dealerIndex
  const actualDealerIndex = dealerStreakCount === 0 && dealerIndex === 0 ? Math.floor(Math.random() * 4) : dealerIndex;

  // 风位根据庄家位置动态分配：庄家=东，下家=南，对家=西，上家=北
  const players: Player[] = Array.from({ length: 4 }, (_, i) => {
    const windOffset = (i - actualDealerIndex + 4) % 4;
    const wind = WIND_ORDER[windOffset];
    return {
      index: i,
      name: i === 0 ? '你' : `电脑${i}`,
      hand: [],
      lastDrawnTile: null,
      melds: [],
      flowers: [],
      discards: [],
      wind,
      isAI: i !== 0,
      isDealer: i === actualDealerIndex,
    };
  });

  const wall = [...allTiles];

  // 每人摸 16 张 (4 轮 * 每轮 4 张)
  for (let round = 0; round < 4; round++) {
    for (let p = 0; p < 4; p++) {
      const playerIdx = (actualDealerIndex + p) % 4;
      const drawn = wall.splice(0, 4);
      players[playerIdx].hand.push(...drawn);
    }
  }
  // 庄家多摸 1 张
  players[actualDealerIndex].hand.push(wall.shift()!);

  // 从牌山末尾取财神
  const jokerTile = wall.pop()!;

  // 处理花牌: 手牌中花牌移到花区, 从牌山末尾补牌
  for (const player of players) {
    processFlowerTiles(player, wall, jokerTile);
  }

  // 排序手牌
  for (const player of players) {
    player.hand = sortTiles(player.hand);
  }

  return {
    wall,
    players,
    discardPool: [],
    currentPlayerIndex: actualDealerIndex,
    dealerIndex: actualDealerIndex,
    jokerTile,
    dealerStreakCount,
    phase: 'playing',
    pendingActions: [],
    lastDiscardedTile: null,
    lastDiscardPlayerIndex: -1,
    isKongBloom: false,
    diceResult: [diceTotal, 0],
  };
}

/** 将手牌中的花牌移到花区并从牌山末尾补牌 */
function processFlowerTiles(player: Player, wall: Tile[], jokerTile: Tile | null): void {
  let hasFlower = true;
  while (hasFlower) {
    hasFlower = false;
    for (let i = player.hand.length - 1; i >= 0; i--) {
      if (isFlowerTile(player.hand[i], jokerTile)) {
        player.flowers.push(player.hand.splice(i, 1)[0]);
        if (wall.length > 0) {
          player.hand.push(wall.pop()!);
        }
        hasFlower = true;
      }
    }
  }
}

// ============================================================
// 摸牌 & 出牌
// ============================================================

/** 从牌山头部摸一张 */
export function drawTile(state: GameState, playerIndex: number): Tile | null {
  if (state.wall.length <= 16) return null; // 保留 8 对 = 16 张时荒庄
  const tile = state.wall.shift()!;
  const player = state.players[playerIndex];

  // 检查是否是花牌，如果是则自动杠牌并从末尾补牌
  if (isFlowerTile(tile, state.jokerTile)) {
    player.flowers.push(tile);
    return drawFlowerReplacement(state, playerIndex);
  }

  // 摸牌时不加入手牌，只显示在摸牌区
  player.lastDrawnTile = tile;
  return tile;
}

/** 从牌山末尾补一张(杠/花补牌) */
export function drawFromEnd(state: GameState, playerIndex: number): Tile | null {
  if (state.wall.length <= 16) return null;
  const tile = state.wall.pop()!;
  const player = state.players[playerIndex];

  // 检查是否是花牌，如果是则自动杠牌并继续补牌
  if (isFlowerTile(tile, state.jokerTile)) {
    player.flowers.push(tile);
    return drawFlowerReplacement(state, playerIndex);
  }

  // 摸牌时不加入手牌，只显示在摸牌区
  player.lastDrawnTile = tile;
  return tile;
}

/** 花牌补牌：从牌山末尾摸牌，如果还是花牌则继续补，直到摸到非花牌或牌山耗尽 */
function drawFlowerReplacement(state: GameState, playerIndex: number): Tile | null {
  const player = state.players[playerIndex];
  while (state.wall.length > 16) {
    const replacement = state.wall.pop()!;
    if (isFlowerTile(replacement, state.jokerTile)) {
      player.flowers.push(replacement);
      continue;
    }
    player.lastDrawnTile = replacement;
    return replacement;
  }
  return null;
}

/** 出牌 */
export function discardTile(player: Player, tile: Tile): void {
  // 如果出的是摸的牌，直接从摸牌区出
  if (player.lastDrawnTile?.id === tile.id) {
    player.discards.push(tile);
    player.lastDrawnTile = null;
    return;
  }

  // 出的是手牌中的牌
  const index = player.hand.findIndex((t) => t.id === tile.id);
  if (index === -1) return;
  player.hand.splice(index, 1);
  player.discards.push(tile);

  // 出牌后，将摸的牌加入手牌并排序
  if (player.lastDrawnTile) {
    player.hand.push(player.lastDrawnTile);
    player.hand = sortTiles(player.hand);
    player.lastDrawnTile = null;
  }
}

// ============================================================
// 吃、碰、杠
// ============================================================

/** 碰牌 */
export function performPong(player: Player, discardTile: Tile, fromPlayerIndex: number): void {
  const matching = player.hand.filter((t) => isSameTileValue(t, discardTile));
  const removed = matching.slice(0, 2);
  for (const tile of removed) {
    const idx = player.hand.findIndex((t) => t.id === tile.id);
    if (idx !== -1) player.hand.splice(idx, 1);
  }
  player.melds.push({
    type: MeldType.Pong,
    tiles: [...removed, discardTile],
    fromPlayer: fromPlayerIndex,
    claimedTileId: discardTile.id,
  });
}

/** 吃牌 */
export function performChow(player: Player, discardTile: Tile, selectedTiles: Tile[], fromPlayerIndex?: number): void {
  for (const tile of selectedTiles) {
    const idx = player.hand.findIndex((t) => t.id === tile.id);
    if (idx !== -1) player.hand.splice(idx, 1);
  }
  const meldTiles = sortTiles([...selectedTiles, discardTile]);
  player.melds.push({
    type: MeldType.Sequence,
    tiles: meldTiles,
    fromPlayer: fromPlayerIndex,
    claimedTileId: discardTile.id,
  });
}

/** 明杠 */
export function performExposedKong(
  player: Player,
  discardTile: Tile,
  fromPlayerIndex: number,
  wall: Tile[],
): Tile | null {
  const matching = player.hand.filter((t) => isSameTileValue(t, discardTile));
  const removed = matching.slice(0, 3);
  for (const tile of removed) {
    const idx = player.hand.findIndex((t) => t.id === tile.id);
    if (idx !== -1) player.hand.splice(idx, 1);
  }
  player.melds.push({
    type: MeldType.ExposedKong,
    tiles: [...removed, discardTile],
    fromPlayer: fromPlayerIndex,
    claimedTileId: discardTile.id,
  });
  if (wall.length <= 16) return null;
  const drawn = wall.pop()!;
  player.hand.push(drawn);
  return drawn;
}

/** 暗杠 */
export function performConcealedKong(player: Player, tile: Tile, wall: Tile[]): Tile | null {
  const matching = player.hand.filter((t) => isSameTileValue(t, tile));
  if (matching.length < 4) return null;
  for (const t of matching.slice(0, 4)) {
    const idx = player.hand.findIndex((h) => h.id === t.id);
    if (idx !== -1) player.hand.splice(idx, 1);
  }
  player.melds.push({
    type: MeldType.ConcealedKong,
    tiles: matching.slice(0, 4),
  });
  if (wall.length <= 16) return null;
  const drawn = wall.pop()!;
  player.hand.push(drawn);
  return drawn;
}

/** 补杠(碰变杠) */
export function performAddedKong(player: Player, tile: Tile, wall: Tile[]): Tile | null {
  const pongIndex = player.melds.findIndex((m) => m.type === MeldType.Pong && isSameTileValue(m.tiles[0], tile));
  if (pongIndex === -1) return null;
  const handIdx = player.hand.findIndex((t) => isSameTileValue(t, tile));
  if (handIdx === -1) return null;
  const addedTile = player.hand.splice(handIdx, 1)[0];
  player.melds[pongIndex].type = MeldType.AddedKong;
  player.melds[pongIndex].tiles.push(addedTile);
  if (wall.length <= 16) return null;
  const drawn = wall.pop()!;
  player.hand.push(drawn);
  return drawn;
}

// ============================================================
// 操作检测
// ============================================================

/** 检测玩家对一张弃牌可做的操作 */
export function detectActions(state: GameState, discardTile: Tile, discardPlayerIndex: number): PendingAction[] {
  const pending: PendingAction[] = [];

  for (let i = 0; i < 4; i++) {
    if (i === discardPlayerIndex) continue;
    const player = state.players[i];
    const actions: ActionType[] = [];
    const options: Partial<Record<ActionType, Tile[][]>> = {};

    // 胡牌检测
    if (canWinWithTile(player, discardTile, state.jokerTile)) {
      actions.push(ActionType.Win);
    }

    // 碰检测
    const pongMatches = player.hand.filter((t) => isSameTileValue(t, discardTile));
    if (pongMatches.length >= 2) {
      actions.push(ActionType.Pong);
    }

    // 杠检测
    if (pongMatches.length >= 3) {
      actions.push(ActionType.Kong);
    }

    // 吃检测(仅上家)
    if (i === (discardPlayerIndex + 1) % 4 && discardTile.suit !== Suit.Feng) {
      const chowOptions = getChowOptions(player, discardTile, state);
      if (chowOptions.length > 0) {
        actions.push(ActionType.Chow);
        options[ActionType.Chow] = chowOptions;
      }
    }

    if (actions.length > 0) {
      pending.push({ playerIndex: i, actions, options, triggerTile: discardTile });
    }
  }

  return pending;
}

/** 检测自摸后可做的操作(暗杠/补杠/自摸胡) */
export function detectSelfActions(state: GameState, playerIndex: number, drawnTile?: Tile): ActionType[] {
  const player = state.players[playerIndex];
  const actions: ActionType[] = [];

  // 将摸牌区的牌也纳入手牌一起检测（暗杠/补杠/胡牌都需要）
  const effectiveHand = player.lastDrawnTile ? [...player.hand, player.lastDrawnTile] : player.hand;

  // 自摸胡
  if (canWin(player, state.jokerTile, effectiveHand)) {
    actions.push(ActionType.Win);
  }

  // 暗杠：手牌（含摸牌区）中有4张相同的牌
  const counts = getTileValueCounts(effectiveHand);
  for (const [, count] of counts.entries()) {
    if (count >= 4) {
      actions.push(ActionType.ConcealedKong);
      break;
    }
  }

  // 补杠：碰牌副露的牌，手牌（含摸牌区）中有相同牌
  for (const meld of player.melds) {
    if (meld.type === MeldType.Pong) {
      if (effectiveHand.some((t) => isSameTileValue(t, meld.tiles[0]))) {
        actions.push(ActionType.AddedKong);
        break;
      }
    }
  }

  // 花牌处理
  if (drawnTile && isFlowerTile(drawnTile, state.jokerTile)) {
    actions.push(ActionType.FlowerKong);
  }

  return actions;
}

function getChowOptions(player: Player, tile: Tile, state: GameState): Tile[][] {
  if (tile.suit === Suit.Feng) return [];
  const value = tile.value as number;

  // 吃牌需要排除财神
  const sameSuit = player.hand.filter(
    (t) => t.suit === tile.suit && typeof t.value === 'number' && !isJokerTile(t, state.jokerTile),
  );
  const options: Tile[][] = [];

  // tile 作为最小: 需要 value+1, value+2
  const mid1 = sameSuit.find((t) => t.value === value + 1);
  const high1 = sameSuit.find((t) => t.value === value + 2);
  if (mid1 && high1) options.push([mid1, high1]);

  // tile 作为中间: 需要 value-1, value+1
  const low2 = sameSuit.find((t) => t.value === value - 1);
  const high2 = sameSuit.find((t) => t.value === value + 1);
  if (low2 && high2) options.push([low2, high2]);

  // tile 作为最大: 需要 value-2, value-1
  const low3 = sameSuit.find((t) => t.value === value - 2);
  const mid3 = sameSuit.find((t) => t.value === value - 1);
  if (low3 && mid3) options.push([low3, mid3]);

  // 去重
  const seen = new Set<string>();
  return options.filter((opt) => {
    const key = opt
      .map((t) => `${t.suit}-${t.value}`)
      .sort()
      .join('|');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// ============================================================
// 胡牌判定（已迁移到 win-check.ts）
// ============================================================

function getTileValueKey(tile: Tile): string {
  return `${tile.suit}-${tile.value}`;
}

function getTileValueCounts(tiles: Tile[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const tile of tiles) {
    const key = getTileValueKey(tile);
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  return counts;
}

// ============================================================
// 牌型判定
// ============================================================

/** 碰碰胡: 全刻/碰, 无顺子 */
export function isPongPong(player: Player, decomposition: WinDecomposition): boolean {
  const allMelds = [...player.melds, ...decomposition.melds];
  return allMelds.every((m) => m.type !== MeldType.Sequence);
}

/** 混一色: 只有一种数牌花色 + 风牌 */
export function isMixedOnesuit(player: Player, decomposition: WinDecomposition): boolean {
  const allTiles = getAllTilesForCheck(player, decomposition);
  const numberSuits = new Set(allTiles.filter((t) => t.suit !== Suit.Feng).map((t) => t.suit));
  const hasFeng = allTiles.some((t) => t.suit === Suit.Feng);
  return numberSuits.size === 1 && hasFeng;
}

/** 清一色: 只有一种花色(无风牌) */
export function isPureOnesuit(player: Player, decomposition: WinDecomposition): boolean {
  const allTiles = getAllTilesForCheck(player, decomposition);
  const suits = new Set(allTiles.map((t) => t.suit));
  return suits.size === 1 && !suits.has(Suit.Feng);
}

function getAllTilesForCheck(player: Player, decomposition: WinDecomposition): Tile[] {
  const tiles: Tile[] = [];
  for (const meld of player.melds) tiles.push(...meld.tiles);
  for (const meld of decomposition.melds) tiles.push(...meld.tiles);
  tiles.push(...decomposition.pair);
  return tiles;
}

// ============================================================
// 台数计算
// ============================================================

let activePatternRules: PatternRule[] = sortPatternRulesInPlace([...DEFAULT_PATTERN_RULES]);

export function setPatternRules(patternRules: PatternRule[]): void {
  activePatternRules = sortPatternRulesInPlace(patternRules);
}

interface ScoreItem {
  id: string;
  name: string;
  tai: number;
  details: string[];
}

function buildScoreDetails(ctx: ScoreContext, rule: PatternRule, tai: number): string[] {
  if (rule.describe) return rule.describe(ctx, tai);
  if (rule.id === 'regular_hand') return [ctx.isHard ? '硬牌: 1台' : '软牌: 0.5台'];
  if (rule.id === 'flower') return [`花牌x${tai}: +${tai}台`];
  if (rule.group === 'base_pattern') return [`${rule.name}: ${tai}台`];
  return [`${rule.name}: +${tai}台`];
}

export function calculateScore(
  state: GameState,
  winnerIndex: number,
  decomposition: WinDecomposition,
  isRobKong: boolean,
  isSelfDraw: boolean,
): ScoreDetail {
  const player = state.players[winnerIndex];
  const jokerTile = state.jokerTile;

  const handJokerCount =
    player.hand.filter((tile) => isJokerTile(tile, jokerTile)).length +
    decomposition.pair.filter((tile) => isJokerTile(tile, jokerTile)).length +
    decomposition.melds.flatMap((meld) => meld.tiles).filter((tile) => isJokerTile(tile, jokerTile)).length;
  const isHard = handJokerCount === 0;

  const ctx: ScoreContext = {
    player,
    decomposition,
    state,
    isHard,
    jokerTile,
    isRobKong,
    isSelfDraw,
  };

  const matchedGroup = new Set<string>();
  const scoreItems: ScoreItem[] = [];

  for (const rule of activePatternRules) {
    if (rule.group === 'base_pattern' && matchedGroup.has(rule.group)) continue;
    const tai = rule.detect(ctx);
    if (tai <= 0) continue;
    scoreItems.push({
      id: rule.id,
      name: rule.name,
      tai,
      details: buildScoreDetails(ctx, rule, tai),
    });
    if (rule.group === 'base_pattern') matchedGroup.add(rule.group);
  }

  const baseTai = scoreItems.find((item) => item.id === 'regular_hand')?.tai ?? 0;
  const patternTai = scoreItems
    .filter((item) => ['pure_onesuit', 'pong_pong', 'mixed_onesuit'].includes(item.id))
    .reduce((sum, item) => sum + item.tai, 0);
  const flowerTai = scoreItems.find((item) => item.id === 'flower')?.tai ?? 0;
  const kongBloomTai = scoreItems.find((item) => item.id === 'kong_bloom')?.tai ?? 0;
  const robKongTai = scoreItems.find((item) => item.id === 'rob_kong')?.tai ?? 0;
  const windTai = scoreItems.find((item) => item.id === 'wind')?.tai ?? 0;
  const faTai = scoreItems.find((item) => item.id === 'fa')?.tai ?? 0;
  const jokerTai = scoreItems.find((item) => item.id === 'joker')?.tai ?? 0;
  const dealerStreakTai = scoreItems.find((item) => item.id === 'dealer_streak')?.tai ?? 0;
  const dealerBonusTai = scoreItems.find((item) => item.id === 'dealer_bonus')?.tai ?? 0;

  const rawTotal =
    baseTai +
    patternTai +
    flowerTai +
    kongBloomTai +
    robKongTai +
    windTai +
    faTai +
    jokerTai +
    dealerStreakTai +
    dealerBonusTai;
  const roundedTotal = Math.ceil(rawTotal);
  const finalTotal = roundedTotal >= 6 ? roundedTotal * 2 : roundedTotal;

  const details = scoreItems.sort((itemA, itemB) => itemB.tai - itemA.tai).flatMap((item) => item.details);

  if (roundedTotal >= 6) details.push(`高台翻倍(${roundedTotal}→${finalTotal})`);

  return {
    baseTai,
    isHard,
    patternTai,
    flowerTai,
    kongBloomTai,
    robKongTai,
    windTai,
    faTai,
    jokerTai,
    dealerStreakTai,
    dealerBonusTai,
    rawTotal,
    roundedTotal,
    finalTotal,
    details,
  };
}

// ============================================================
// 结算
// ============================================================

export function settleScores(
  state: GameState,
  winnerIndex: number,
  _loserIndex: number,
  scoreDetail: ScoreDetail,
): number[] {
  const settlements = [0, 0, 0, 0];
  const isDealer = winnerIndex === state.dealerIndex;
  const winnerTai = scoreDetail.finalTotal;

  if (isDealer) {
    // 庄家胡牌: 其余三家各付 winnerTai
    for (let i = 0; i < 4; i++) {
      if (i === winnerIndex) {
        settlements[i] = winnerTai * 3;
      } else {
        settlements[i] = -winnerTai;
      }
    }
  } else {
    // 闲家胡牌
    const dealerIdx = state.dealerIndex;
    // const dealerTai = state.dealerStreakCount + 1; // 庄家台数基准
    // 庄家额外输台数差
    for (let i = 0; i < 4; i++) {
      if (i === winnerIndex) continue;
      if (i === dealerIdx) {
        // 仅输差值(如果庄家台数 > 闲家台数则庄家少输)
        // 按规则: 闲家胡牌自身台数+1; 仅与庄家抵扣台数差
        const diff = Math.max(winnerTai, 0);
        settlements[i] = -diff;
        settlements[winnerIndex] += diff;
      } else {
        settlements[i] = -winnerTai;
        settlements[winnerIndex] += winnerTai;
      }
    }
  }

  return settlements;
}

/** 是否荒庄 */
export function isDrawGame(state: GameState): boolean {
  return state.wall.length <= 16;
}

/** 下一个玩家 */
export function nextPlayerIndex(current: number): number {
  return (current + 1) % 4;
}

/** 获取牌的显示简称 */
export function getTileShortLabel(tile: Tile): string {
  if (tile.suit === Suit.Feng) return HONOR_LABELS[tile.value as HonorValue] || '?';
  const suitChar = { [Suit.Wan]: '万', [Suit.Tong]: '筒', [Suit.Tiao]: '条' }[tile.suit] || '';
  return `${tile.value}${suitChar}`;
}

/** 获取牌面 emoji / 简码(用于渲染) */
export function getTileSuitIcon(suit: Suit): string {
  switch (suit) {
    case Suit.Wan:
      return '万';
    case Suit.Tong:
      return '筒';
    case Suit.Tiao:
      return '条';
    case Suit.Feng:
      return '字';
  }
}

// ============================================================
// 出牌校验规则
// ============================================================

/** 默认出牌校验规则 */
export const DEFAULT_DISCARD_RULES: DiscardValidationRule[] = [
  {
    id: 'no_joker_discard',
    name: '财神不可打出',
    validate: (tile, _player, state) => {
      if (!state.jokerTile) return true;
      return !isJokerTile(tile, state.jokerTile);
    },
    errorMessage: '财神不能打出',
  },
  {
    id: 'no_chow_tile_discard',
    name: '吃牌后不可打出吃的那张牌',
    validate: (tile, player, state) => {
      // 检查最近一次吃牌操作
      const lastMeld = player.melds[player.melds.length - 1];
      if (!lastMeld || lastMeld.type !== MeldType.Sequence) return true;
      // 如果刚吃过牌，检查是否要打出的牌与吃的那张相同
      if (lastMeld.claimedTileId !== undefined) {
        const claimedTile = state.discardPool.find((t) => t.id === lastMeld.claimedTileId);
        if (claimedTile && tile.suit === claimedTile.suit && tile.value === claimedTile.value) {
          return false;
        }
      }
      return true;
    },
    errorMessage: '刚吃的牌不能立即打出',
  },
];

/** 校验出牌是否合法 */
export function validateDiscard(
  tile: Tile,
  player: Player,
  state: GameState,
  rules: DiscardValidationRule[],
): { valid: boolean; message?: string } {
  for (const rule of rules) {
    if (!rule.validate(tile, player, state)) {
      return { valid: false, message: rule.errorMessage };
    }
  }
  return { valid: true };
}
