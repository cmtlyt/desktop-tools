import {
  HonorValue, MeldType, PatternRule, Player, ScoreContext, Suit, Tile, Wind,
  WinDecomposition,
} from './type';

const WIND_TO_HONOR: Record<Wind, HonorValue> = {
  [Wind.East]: HonorValue.East,
  [Wind.South]: HonorValue.South,
  [Wind.West]: HonorValue.West,
  [Wind.North]: HonorValue.North,
};

function isSameTileValue(tileA: Tile, tileB: Tile): boolean {
  return tileA.suit === tileB.suit && tileA.value === tileB.value;
}

function isJokerTile(tile: Tile, jokerTile: Tile | null): boolean {
  if (!jokerTile) return false;
  return isSameTileValue(tile, jokerTile);
}

function getAllTilesForCheck(player: Player, decomposition: WinDecomposition): Tile[] {
  return [
    ...player.melds.flatMap((meld) => meld.tiles),
    ...decomposition.melds.flatMap((meld) => meld.tiles),
    ...decomposition.pair,
  ];
}

function isPongPong(ctx: ScoreContext): boolean {
  const allMelds = [...ctx.player.melds, ...ctx.decomposition.melds];
  return allMelds.every((meld) => meld.type !== MeldType.Sequence);
}

function isMixedOnesuit(ctx: ScoreContext): boolean {
  const allTiles = getAllTilesForCheck(ctx.player, ctx.decomposition);
  const numberSuits = new Set(allTiles.filter((tile) => tile.suit !== Suit.Feng).map((tile) => tile.suit));
  const hasFeng = allTiles.some((tile) => tile.suit === Suit.Feng);
  return numberSuits.size === 1 && hasFeng;
}

function isPureOnesuit(ctx: ScoreContext): boolean {
  const allTiles = getAllTilesForCheck(ctx.player, ctx.decomposition);
  const suits = new Set(allTiles.map((tile) => tile.suit));
  return suits.size === 1 && !suits.has(Suit.Feng);
}

function getAllMelds(ctx: ScoreContext) {
  return [...ctx.player.melds, ...ctx.decomposition.melds];
}

function countWindTai(ctx: ScoreContext): number {
  const windHonor = WIND_TO_HONOR[ctx.player.wind];
  return getAllMelds(ctx).filter((meld) => (
    meld.type !== MeldType.Sequence &&
    meld.tiles.length > 0 &&
    meld.tiles[0].suit === Suit.Feng &&
    meld.tiles[0].value === windHonor
  )).length;
}

function countFaTai(ctx: ScoreContext): number {
  return getAllMelds(ctx).filter((meld) => (
    meld.type !== MeldType.Sequence &&
    meld.tiles.length > 0 &&
    meld.tiles[0].suit === Suit.Feng &&
    meld.tiles[0].value === HonorValue.Fa
  )).length;
}

function countJokerTai(ctx: ScoreContext): number {
  const totalJokerCount = ctx.player.hand.filter((tile) => isJokerTile(tile, ctx.jokerTile)).length;
  const handAllSequence = ctx.decomposition.isAllSequence && ctx.player.melds.every(
    (meld) => meld.type === MeldType.Sequence,
  );
  const jokerReturnCount = handAllSequence ? totalJokerCount : 0;

  if (totalJokerCount >= 3) {
    const hasJokerTriplet = ctx.decomposition.melds.some(
      (meld) => meld.type === MeldType.Triplet && meld.tiles.length <= 0,
    );
    return (hasJokerTriplet || totalJokerCount >= 3 ? 15 : 0) + (jokerReturnCount >= 3 ? 50 : 0);
  }

  if (totalJokerCount === 2) {
    const pairHasJokers = ctx.decomposition.pair.filter((tile) => isJokerTile(tile, ctx.jokerTile)).length === 2 ||
      (ctx.decomposition.pair.length === 0 && totalJokerCount >= 2);
    return 1 + (pairHasJokers ? 6 : 0) + (jokerReturnCount >= 2 ? 6 : 0);
  }

  if (totalJokerCount === 1 && jokerReturnCount >= 1) return 1;
  return 0;
}

function getJokerDetails(ctx: ScoreContext): string[] {
  const details: string[] = [];
  const totalJokerCount = ctx.player.hand.filter((tile) => isJokerTile(tile, ctx.jokerTile)).length;
  const handAllSequence = ctx.decomposition.isAllSequence && ctx.player.melds.every(
    (meld) => meld.type === MeldType.Sequence,
  );
  const jokerReturnCount = handAllSequence ? totalJokerCount : 0;

  if (totalJokerCount >= 3) {
    const hasJokerTriplet = ctx.decomposition.melds.some(
      (meld) => meld.type === MeldType.Triplet && meld.tiles.length <= 0,
    );
    if (hasJokerTriplet || totalJokerCount >= 3) details.push('三财神做刻: +15台');
    if (jokerReturnCount >= 3) details.push('三财神归位: +50台');
  } else if (totalJokerCount === 2) {
    details.push('双财神: +1台');
    const pairHasJokers = ctx.decomposition.pair.filter((tile) => isJokerTile(tile, ctx.jokerTile)).length === 2 ||
      (ctx.decomposition.pair.length === 0 && totalJokerCount >= 2);
    if (pairHasJokers) details.push('双财神做将: +6台');
    if (jokerReturnCount >= 2) details.push('双财神归位: +6台');
  } else if (totalJokerCount === 1 && jokerReturnCount >= 1) {
    details.push('财神归位: +1台');
  }
  return details;
}

export const DEFAULT_PATTERN_RULES: PatternRule[] = [
  {
    id: 'pure_onesuit',
    name: '清一色',
    priority: 100,
    group: 'base_pattern',
    detect: (ctx) => (isPureOnesuit(ctx) ? (ctx.isHard ? 4 : 3) : 0),
  },
  {
    id: 'pong_pong',
    name: '碰碰胡',
    priority: 90,
    group: 'base_pattern',
    detect: (ctx) => (isPongPong(ctx) ? (ctx.isHard ? 4 : 3) : 0),
  },
  {
    id: 'mixed_onesuit',
    name: '混一色',
    priority: 80,
    group: 'base_pattern',
    detect: (ctx) => (isMixedOnesuit(ctx) ? (ctx.isHard ? 3 : 2) : 0),
  },
  {
    id: 'regular_hand',
    name: '普通牌',
    priority: 10,
    group: 'base_pattern',
    detect: (ctx) => (ctx.isHard ? 1 : 0.5),
  },
  {
    id: 'flower',
    name: '花牌',
    priority: 70,
    group: 'bonus',
    detect: (ctx) => ctx.player.flowers.length,
  },
  {
    id: 'kong_bloom',
    name: '杠上开花',
    priority: 60,
    group: 'bonus',
    detect: (ctx) => (ctx.state.isKongBloom ? 1 : 0),
  },
  {
    id: 'rob_kong',
    name: '抢杠胡',
    priority: 55,
    group: 'bonus',
    detect: (ctx) => (ctx.isRobKong ? 1 : 0),
  },
  {
    id: 'wind',
    name: '风位',
    priority: 50,
    group: 'bonus',
    detect: countWindTai,
  },
  {
    id: 'fa',
    name: '发财',
    priority: 45,
    group: 'bonus',
    detect: countFaTai,
  },
  {
    id: 'joker',
    name: '财神',
    priority: 40,
    group: 'joker',
    detect: countJokerTai,
    describe: getJokerDetails,
  },
  {
    id: 'dealer_streak',
    name: '连庄',
    priority: 30,
    group: 'bonus',
    detect: (ctx) => ctx.state.dealerStreakCount,
  },
  {
    id: 'dealer_bonus',
    name: '庄闲加成',
    priority: 20,
    group: 'bonus',
    detect: () => 1,
    describe: (ctx) => [ctx.player.isDealer ? '庄家胡: +1台' : '闲家胡: +1台'],
  },
];

DEFAULT_PATTERN_RULES.sort((ruleA, ruleB) => ruleB.priority - ruleA.priority);

export function sortPatternRulesInPlace(patternRules: PatternRule[]): PatternRule[] {
  patternRules.sort((ruleA, ruleB) => ruleB.priority - ruleA.priority);
  return patternRules;
}
