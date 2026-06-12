import { Tile, Player, GameState, ActionType, Suit, MeldType, PlayerController } from './type';
import {
  isJokerTile, isSameTileValue, sortTiles, validateDiscard, DEFAULT_DISCARD_RULES,
} from './util';

/**
 * AI 出牌策略: 简单启发式
 * 优先保留: 对子 > 搭子(连续/间隔) > 孤张
 * 绝不打财神，遵守出牌校验规则
 */
export function aiChooseDiscard(player: Player, state: GameState): Tile {
  const hand = sortTiles(player.hand);
  const jokerTile = state.jokerTile;

  // 过滤不合法的牌（包括财神和其他校验规则）
  const candidates = hand.filter((t) => {
    const validation = validateDiscard(t, player, state, DEFAULT_DISCARD_RULES);
    return validation.valid;
  });
  
  if (candidates.length === 0) return hand[hand.length - 1];

  const scores = candidates.map((tile) => ({
    tile,
    score: evaluateTileImportance(tile, hand, jokerTile),
  }));

  scores.sort((a, b) => a.score - b.score);
  return scores[0].tile;
}

function evaluateTileImportance(tile: Tile, hand: Tile[], jokerTile: Tile | null): number {
  let score = 0;
  const others = hand.filter((t) => t.id !== tile.id);

  // 对子 +20
  const sameCount = others.filter((t) => isSameTileValue(t, tile)).length;
  score += sameCount * 20;

  // 数牌搭子
  if (tile.suit !== Suit.Feng && typeof tile.value === 'number') {
    const val = tile.value;
    const hasPrev = others.some((t) => t.suit === tile.suit && t.value === val - 1);
    const hasNext = others.some((t) => t.suit === tile.suit && t.value === val + 1);
    const hasPrev2 = others.some((t) => t.suit === tile.suit && t.value === val - 2);
    const hasNext2 = others.some((t) => t.suit === tile.suit && t.value === val + 2);

    if (hasPrev && hasNext) score += 15; // 两面搭
    else if (hasPrev || hasNext) score += 10; // 一面搭
    if (hasPrev2) score += 5; // 间隔搭
    if (hasNext2) score += 5;
  }

  // 财神加分
  if (isJokerTile(tile, jokerTile)) score += 100;

  // 风牌孤张减分
  if (tile.suit === Suit.Feng && sameCount === 0) score -= 5;

  return score;
}

/** AI 决定是否吃/碰/杠/胡 */
export function aiDecideAction(
  _player: Player,
  availableActions: ActionType[],
  _state: GameState,
): ActionType {
  // 优先胡
  if (availableActions.includes(ActionType.Win)) return ActionType.Win;
  if (availableActions.includes(ActionType.RobKong)) return ActionType.RobKong;

  // 暗杠
  if (availableActions.includes(ActionType.ConcealedKong)) return ActionType.ConcealedKong;

  // 补杠
  if (availableActions.includes(ActionType.AddedKong)) return ActionType.AddedKong;

  // 杠
  if (availableActions.includes(ActionType.Kong)) return ActionType.Kong;

  // 碰: 简单策略 — 总是碰
  if (availableActions.includes(ActionType.Pong)) return ActionType.Pong;

  // 吃: 简单策略 — 70% 概率吃
  if (availableActions.includes(ActionType.Chow)) {
    if (Math.random() < 0.7) return ActionType.Chow;
  }

  return ActionType.Pass;
}

/** AI 选择吃牌组合(选第一个) */
export function aiChooseChowOption(options: Tile[][]): Tile[] {
  return options[0] || [];
}

/** AI 选择暗杠的牌 */
export function aiChooseConcealedKongTile(player: Player, jokerTile: Tile | null): Tile | null {
  const counts = new Map<string, { tile: Tile; count: number }>();
  for (const tile of player.hand) {
    if (isJokerTile(tile, jokerTile)) continue;
    const key = `${tile.suit}-${tile.value}`;
    const entry = counts.get(key);
    if (entry) entry.count++;
    else counts.set(key, { tile, count: 1 });
  }
  for (const [, entry] of counts) {
    if (entry.count >= 4) return entry.tile;
  }
  return null;
}

/** AI 选择补杠的牌 */
export function aiChooseAddedKongTile(player: Player): Tile | null {
  for (const meld of player.melds) {
    if (meld.type === MeldType.Pong) {
      const match = player.hand.find((t) => isSameTileValue(t, meld.tiles[0]));
      if (match) return match;
    }
  }
  return null;
}

export class AIPlayerController implements PlayerController {
  async chooseDiscard(player: Player, state: GameState): Promise<Tile> {
    return aiChooseDiscard(player, state);
  }

  async chooseAction(player: Player, actions: ActionType[], state: GameState): Promise<ActionType> {
    return aiDecideAction(player, actions, state);
  }

  async chooseChowOption(options: Tile[][]): Promise<Tile[]> {
    return aiChooseChowOption(options);
  }

  async chooseConcealedKongTile(player: Player, state: GameState): Promise<Tile | null> {
    return aiChooseConcealedKongTile(player, state.jokerTile);
  }

  async chooseAddedKongTile(player: Player): Promise<Tile | null> {
    return aiChooseAddedKongTile(player);
  }
}
