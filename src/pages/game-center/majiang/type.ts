/** 花色 */
export enum Suit {
  /** 筒 */
  Tong = 'tong',
  /** 条 */
  Tiao = 'tiao',
  /** 万 */
  Wan = 'wan',
  /** 风牌 */
  Feng = 'feng',
}

/** 风位 */
export enum Wind {
  East = 'east',
  South = 'south',
  West = 'west',
  North = 'north',
}

/** 牌面值: 数牌 1-9, 风牌/字牌用枚举 */
export enum HonorValue {
  East = 'dong',
  South = 'nan',
  West = 'xi',
  North = 'bei',
  Zhong = 'zhong',
  Fa = 'fa',
  Bai = 'bai',
}

export interface Tile {
  /** 唯一 id */
  id: number;
  suit: Suit;
  /** 数牌 1-9 或 HonorValue */
  value: number | HonorValue;
  /** 展示名 */
  label: string;
  /** 是否为财神牌 */
  jokerMock?: boolean;
}

/** 面子类型 */
export enum MeldType {
  /** 顺子 */
  Sequence = 'sequence',
  /** 刻子(手牌暗刻) */
  Triplet = 'triplet',
  /** 碰 */
  Pong = 'pong',
  /** 明杠 */
  ExposedKong = 'exposed_kong',
  /** 暗杠 */
  ConcealedKong = 'concealed_kong',
  /** 补杠(碰后加杠) */
  AddedKong = 'added_kong',
}

export interface Meld {
  type: MeldType;
  tiles: Tile[];
  /** 来源玩家 index（吃/碰/杠时记录） */
  fromPlayer?: number;
  /** 被吃/碰/杠的来源牌 id，用于高亮展示 */
  claimedTileId?: number;
}

/** 玩家操作 */
export enum ActionType {
  /** 摸牌 */
  Draw = 'draw',
  /** 出牌 */
  Discard = 'discard',
  /** 吃 */
  Chow = 'chow',
  /** 碰 */
  Pong = 'pong',
  /** 明杠 */
  Kong = 'kong',
  /** 暗杠 */
  ConcealedKong = 'concealed_kong',
  /** 补杠 */
  AddedKong = 'added_kong',
  /** 胡牌 */
  Win = 'win',
  /** 抢杠胡 */
  RobKong = 'rob_kong',
  /** 跳过 */
  Pass = 'pass',
  /** 花牌杠(强制) */
  FlowerKong = 'flower_kong',
}

export interface PlayerAction {
  type: ActionType;
  tile?: Tile;
  /** 吃牌时的组合 */
  meldTiles?: Tile[];
  playerIndex: number;
}

export interface Player {
  index: number;
  name: string;
  /** 手牌 */
  hand: Tile[];
  /** 刚摸到的牌（未排序，显示在最右边） */
  lastDrawnTile: Tile | null;
  /** 已亮出面子(碰/杠等) */
  melds: Meld[];
  /** 花牌 */
  flowers: Tile[];
  /** 出过的牌 */
  discards: Tile[];
  /** 风位 */
  wind: Wind;
  /** 是否为 AI */
  isAI: boolean;
  /** 是否庄家 */
  isDealer: boolean;
}

export type GamePhase = 'idle' | 'dealing' | 'playing' | 'waiting_action' | 'win' | 'draw_game';

export interface PendingAction {
  playerIndex: number;
  actions: ActionType[];
  /** 每种操作对应的可选牌组 */
  options: Partial<Record<ActionType, Tile[][]>>;
  /** 触发来源牌 */
  triggerTile: Tile;
}

export interface GameState {
  /** 牌山 */
  wall: Tile[];
  /** 四个玩家 */
  players: Player[];
  /** 统一牌河，按出牌顺序保存 */
  discardPool: Tile[];
  /** 当前出牌者 index */
  currentPlayerIndex: number;
  /** 庄家 index */
  dealerIndex: number;
  /** 财神牌 */
  jokerTile: Tile | null;
  /** 连庄次数 */
  dealerStreakCount: number;
  /** 游戏阶段 */
  phase: GamePhase;
  /** 待处理的操作(碰/吃/杠/胡) */
  pendingActions: PendingAction[];
  /** 当前刚打出的牌 */
  lastDiscardedTile: Tile | null;
  /** 打出牌的玩家 */
  lastDiscardPlayerIndex: number;
  /** 本局是否有人杠上开花 */
  isKongBloom: boolean;
  /** 掷骰结果 */
  diceResult: [number, number];
}

/** 台数结算信息 */
export interface ScoreDetail {
  /** 基础台数(硬/软) */
  baseTai: number;
  /** 是否硬牌 */
  isHard: boolean;
  /** 牌型台数 */
  patternTai: number;
  /** 花牌台数 */
  flowerTai: number;
  /** 杠上开花 */
  kongBloomTai: number;
  /** 抢杠胡 */
  robKongTai: number;
  /** 风位台数 */
  windTai: number;
  /** 发财台数 */
  faTai: number;
  /** 财神专属台数 */
  jokerTai: number;
  /** 连庄台数 */
  dealerStreakTai: number;
  /** 庄家加成 */
  dealerBonusTai: number;
  /** 总台数(翻倍前) */
  rawTotal: number;
  /** 小数补整后 */
  roundedTotal: number;
  /** 高台翻倍后 */
  finalTotal: number;
  /** 明细描述 */
  details: string[];
}

export interface WinResult {
  winnerIndex: number;
  loserIndex: number;
  scoreDetail: ScoreDetail;
  /** 各玩家结算分数(正为赢,负为输) */
  settlements: number[];
  decomposition: WinDecomposition;
}

/** 花牌判定用 */
export type FlowerTileChecker = (tile: Tile, jokerTile: Tile | null) => boolean;

/** 胡牌分解结果 */
export interface WinDecomposition {
  melds: Meld[];
  pair: Tile[];
  /** 全顺子(无刻/碰) */
  isAllSequence: boolean;
}

/** 游戏模式 */
export type GameMode = 'local' | 'online';

export type PatternRuleGroup = 'base_pattern' | 'bonus' | 'joker';

/** 牌型/台数检测上下文 */
export interface ScoreContext {
  player: Player;
  decomposition: WinDecomposition;
  state: GameState;
  isHard: boolean;
  jokerTile: Tile | null;
  isRobKong: boolean;
  isSelfDraw: boolean;
}

/** 牌型/台数规则 */
export interface PatternRule {
  id: string;
  name: string;
  priority: number;
  group: PatternRuleGroup;
  detect: (ctx: ScoreContext) => number;
  describe?: (ctx: ScoreContext, tai: number) => string[];
}

/** 玩家操作接口: 本地、AI 和联机统一 */
export interface PlayerController {
  chooseDiscard: (player: Player, state: GameState) => Promise<Tile>;
  chooseAction: (player: Player, actions: ActionType[], state: GameState) => Promise<ActionType>;
  chooseChowOption: (options: Tile[][]) => Promise<Tile[]>;
  chooseConcealedKongTile: (player: Player, state: GameState) => Promise<Tile | null>;
  chooseAddedKongTile: (player: Player, state: GameState) => Promise<Tile | null>;
}

/** 出牌校验规则 */
export interface DiscardValidationRule {
  /** 规则标识 */
  id: string;
  /** 规则名称 */
  name: string;
  /** 校验函数：返回 true 表示允许出牌，false 表示禁止 */
  validate: (tile: Tile, player: Player, state: GameState) => boolean;
  /** 违规提示信息 */
  errorMessage: string;
}

export interface GameConfig {
  mode: GameMode;
  patternRules: PatternRule[];
  controllers: PlayerController[];
  /** 出牌校验规则 */
  discardRules: DiscardValidationRule[];
}
