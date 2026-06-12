import { canWin, canWinWithTile } from './win-check';
import { Tile, Suit, HonorValue, Player, MeldType, Meld, Wind } from './type';

// ============================================================
// 辅助函数
// ============================================================

function createTile(suit: Suit, value: number | HonorValue, id: number): Tile {
  const labels: Record<Suit, string[]> = {
    [Suit.Wan]: ['', '一万', '二万', '三万', '四万', '五万', '六万', '七万', '八万', '九万'],
    [Suit.Tiao]: ['', '一条', '二条', '三条', '四条', '五条', '六条', '七条', '八条', '九条'],
    [Suit.Tong]: ['', '一筒', '二筒', '三筒', '四筒', '五筒', '六筒', '七筒', '八筒', '九筒'],
    [Suit.Feng]: [],
  };
  const honorLabels: Record<string, string> = {
    [HonorValue.East]: '东', [HonorValue.South]: '南',
    [HonorValue.West]: '西', [HonorValue.North]: '北',
    [HonorValue.Zhong]: '红中', [HonorValue.Fa]: '发财', [HonorValue.Bai]: '白板',
  };
  const label = suit === Suit.Feng
    ? honorLabels[value as string]
    : labels[suit][value as number];
  return { id, suit, value, label };
}

function createPlayer(hand: Tile[], melds: Meld[] = []): Player {
  return {
    index: 0, name: '测试玩家', hand, melds, discards: [], flowers: [],
    lastDrawnTile: null, wind: 'east' as Wind, isDealer: false, isAI: false,
  };
}

function chow(tiles: Tile[]): Meld { return { type: MeldType.Sequence, tiles, fromPlayer: 1 }; }
function pong(tiles: Tile[]): Meld { return { type: MeldType.Pong, tiles, fromPlayer: 1 }; }
function exposedKong(tiles: Tile[]): Meld { return { type: MeldType.ExposedKong, tiles, fromPlayer: 1 }; }
function concealedKong(tiles: Tile[]): Meld { return { type: MeldType.ConcealedKong, tiles, fromPlayer: -1 }; }

// ============================================================
// 测试运行器
// ============================================================

let passed = 0;
let failed = 0;

function assert(condition: boolean, name: string) {
  if (condition) {
    console.log(`  ✅ ${name}`);
    passed++;
  } else {
    console.log(`  ❌ ${name}`);
    failed++;
  }
}

// ============================================================
// 基础牌型
// ============================================================

console.log('\n【基础牌型】');

// n=5: 标准5面子+1将 - 无副露（17张手牌）: 123万 456万 789万 111筒 222筒 33筒
assert(canWin(createPlayer([
  createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2),
  createTile(Suit.Wan, 4, 3), createTile(Suit.Wan, 5, 4), createTile(Suit.Wan, 6, 5),
  createTile(Suit.Wan, 7, 6), createTile(Suit.Wan, 8, 7), createTile(Suit.Wan, 9, 8),
  createTile(Suit.Tong, 1, 9), createTile(Suit.Tong, 1, 10), createTile(Suit.Tong, 1, 11),
  createTile(Suit.Tong, 2, 12), createTile(Suit.Tong, 2, 13), createTile(Suit.Tong, 2, 14),
  createTile(Suit.Tong, 3, 15), createTile(Suit.Tong, 3, 16),
]), null), 'n=5: 5面子+1将（无副露，17张）');

// n=4: 4面子+1将（14张）
assert(canWin(createPlayer([
  createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2),
  createTile(Suit.Wan, 4, 3), createTile(Suit.Wan, 5, 4), createTile(Suit.Wan, 6, 5),
  createTile(Suit.Wan, 7, 6), createTile(Suit.Wan, 8, 7), createTile(Suit.Wan, 9, 8),
  createTile(Suit.Tong, 1, 9), createTile(Suit.Tong, 1, 10), createTile(Suit.Tong, 1, 11),
  createTile(Suit.Tong, 2, 12), createTile(Suit.Tong, 2, 13),
]), null), 'n=4: 4面子+1将（14张）');

// n=3: 3面子+1将（11张）
assert(canWin(createPlayer([
  createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2),
  createTile(Suit.Wan, 4, 3), createTile(Suit.Wan, 5, 4), createTile(Suit.Wan, 6, 5),
  createTile(Suit.Wan, 7, 6), createTile(Suit.Wan, 8, 7), createTile(Suit.Wan, 9, 8),
  createTile(Suit.Tong, 1, 9), createTile(Suit.Tong, 1, 10),
]), null), 'n=3: 3面子+1将（11张）');

// n=2: 2面子+1将（8张）
assert(canWin(createPlayer([
  createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2),
  createTile(Suit.Wan, 4, 3), createTile(Suit.Wan, 5, 4), createTile(Suit.Wan, 6, 5),
  createTile(Suit.Tong, 1, 6), createTile(Suit.Tong, 1, 7),
]), null), 'n=2: 2面子+1将（8张）');

// n=1: 1面子+1将（5张）
assert(canWin(createPlayer([
  createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2),
  createTile(Suit.Tong, 1, 3), createTile(Suit.Tong, 1, 4),
]), null), 'n=1: 1面子+1将（5张）');

// n=0: 只有将（2张）
assert(canWin(createPlayer([
  createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 1, 1),
]), null), 'n=0: 只有将（2张）');

// 7对子 - 不是合法胡牌牌型
assert(!canWin(createPlayer([
  createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 1, 1),
  createTile(Suit.Tiao, 2, 2), createTile(Suit.Tiao, 2, 3),
  createTile(Suit.Wan, 3, 4), createTile(Suit.Wan, 3, 5),
  createTile(Suit.Wan, 4, 6), createTile(Suit.Wan, 4, 7),
  createTile(Suit.Tong, 5, 8), createTile(Suit.Tong, 5, 9),
  createTile(Suit.Wan, 6, 10), createTile(Suit.Wan, 6, 11),
  createTile(Suit.Wan, 7, 12), createTile(Suit.Wan, 7, 13),
]), null), '7对子 - 不能胡');

// ============================================================
// 吃牌副露
// ============================================================

console.log('\n【吃牌副露】');

// 1吃 + 手牌4面子1将（14张）
assert(canWin(createPlayer([
  createTile(Suit.Wan, 4, 3), createTile(Suit.Wan, 5, 4), createTile(Suit.Wan, 6, 5),
  createTile(Suit.Wan, 7, 6), createTile(Suit.Wan, 8, 7), createTile(Suit.Wan, 9, 8),
  createTile(Suit.Tong, 1, 9), createTile(Suit.Tong, 1, 10), createTile(Suit.Tong, 1, 11),
  createTile(Suit.Tong, 2, 12), createTile(Suit.Tong, 2, 13), createTile(Suit.Tong, 2, 14),
  createTile(Suit.Tong, 3, 15), createTile(Suit.Tong, 3, 16),
], [chow([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2)])]), null), '1吃 + 手牌4面子1将（14张）');

// 2吃 + 手牌3面子1将（11张）
assert(canWin(createPlayer([
  createTile(Suit.Wan, 4, 6), createTile(Suit.Wan, 5, 7), createTile(Suit.Wan, 6, 8),
  createTile(Suit.Tong, 1, 9), createTile(Suit.Tong, 1, 10), createTile(Suit.Tong, 1, 11),
  createTile(Suit.Tong, 2, 12), createTile(Suit.Tong, 2, 13), createTile(Suit.Tong, 2, 14),
  createTile(Suit.Tong, 3, 15), createTile(Suit.Tong, 3, 16),
], [
  chow([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2)]),
  chow([createTile(Suit.Wan, 7, 3), createTile(Suit.Wan, 8, 4), createTile(Suit.Wan, 9, 5)]),
]), null), '2吃 + 手牌3面子1将（11张）');

// 3吃 + 手牌2面子1将（8张）: 123万 789万 234筒 | 678筒 234条 88条
assert(canWin(createPlayer([
  createTile(Suit.Tong, 6, 9), createTile(Suit.Tong, 7, 10), createTile(Suit.Tong, 8, 11),
  createTile(Suit.Tiao, 2, 12), createTile(Suit.Tiao, 3, 13), createTile(Suit.Tiao, 4, 14),
  createTile(Suit.Tiao, 8, 15), createTile(Suit.Tiao, 8, 16),
], [
  chow([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2)]),
  chow([createTile(Suit.Wan, 7, 3), createTile(Suit.Wan, 8, 4), createTile(Suit.Wan, 9, 5)]),
  chow([createTile(Suit.Tong, 2, 6), createTile(Suit.Tong, 3, 7), createTile(Suit.Tong, 4, 8)]),
]), null), '3吃 + 手牌2面子1将（8张）');

// 4吃 + 手牌1面子1将（5张）: 123万 789万 234筒 567条 | 888条 99条
assert(canWin(createPlayer([
  createTile(Suit.Tiao, 8, 12), createTile(Suit.Tiao, 8, 13), createTile(Suit.Tiao, 8, 14),
  createTile(Suit.Tiao, 9, 15), createTile(Suit.Tiao, 9, 16),
], [
  chow([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2)]),
  chow([createTile(Suit.Wan, 7, 3), createTile(Suit.Wan, 8, 4), createTile(Suit.Wan, 9, 5)]),
  chow([createTile(Suit.Tong, 2, 6), createTile(Suit.Tong, 3, 7), createTile(Suit.Tong, 4, 8)]),
  chow([createTile(Suit.Tiao, 5, 9), createTile(Suit.Tiao, 6, 10), createTile(Suit.Tiao, 7, 11)]),
]), null), '4吃 + 手牌1面子1将（5张）');

// 4吃 + 手牌只有将（2张）: 123万 789万 234筒 567条 | 88条
assert(canWin(createPlayer([
  createTile(Suit.Tiao, 8, 12), createTile(Suit.Tiao, 8, 13),
], [
  chow([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2)]),
  chow([createTile(Suit.Wan, 7, 3), createTile(Suit.Wan, 8, 4), createTile(Suit.Wan, 9, 5)]),
  chow([createTile(Suit.Tong, 2, 6), createTile(Suit.Tong, 3, 7), createTile(Suit.Tong, 4, 8)]),
  chow([createTile(Suit.Tiao, 5, 9), createTile(Suit.Tiao, 6, 10), createTile(Suit.Tiao, 7, 11)]),
]), null), '4吃 + 手牌只有将（2张，n=0）');

// 16张初始摸牌 + 4副露后只剩将（2张）
// 模拟：初始16张，经过4次吃牌后，手牌只剩2张对子
assert(canWin(createPlayer([
  createTile(Suit.Tiao, 8, 12), createTile(Suit.Tiao, 8, 13),
], [
  chow([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2)]),
  chow([createTile(Suit.Wan, 7, 3), createTile(Suit.Wan, 8, 4), createTile(Suit.Wan, 9, 5)]),
  chow([createTile(Suit.Tong, 2, 6), createTile(Suit.Tong, 3, 7), createTile(Suit.Tong, 4, 8)]),
  chow([createTile(Suit.Tiao, 5, 9), createTile(Suit.Tiao, 6, 10), createTile(Suit.Tiao, 7, 11)]),
]), null), '16张摸牌 + 4副露后只剩将（2张）');

// ============================================================
// 碰牌副露
// ============================================================

console.log('\n【碰牌副露】');

// 1碰 + 手牌4面子1将（14张）
assert(canWin(createPlayer([
  createTile(Suit.Wan, 2, 3), createTile(Suit.Wan, 3, 4), createTile(Suit.Wan, 4, 5),
  createTile(Suit.Wan, 5, 6), createTile(Suit.Wan, 6, 7), createTile(Suit.Wan, 7, 8),
  createTile(Suit.Wan, 8, 9), createTile(Suit.Wan, 8, 10), createTile(Suit.Wan, 8, 11),
  createTile(Suit.Wan, 9, 12), createTile(Suit.Wan, 9, 13), createTile(Suit.Wan, 9, 14),
  createTile(Suit.Tong, 1, 15), createTile(Suit.Tong, 1, 16),
], [pong([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 1, 1), createTile(Suit.Wan, 1, 2)])]), null), '1碰 + 手牌4面子1将（14张）');

// 2碰 + 手牌3面子1将（11张）
assert(canWin(createPlayer([
  createTile(Suit.Wan, 2, 6), createTile(Suit.Wan, 3, 7), createTile(Suit.Wan, 4, 8),
  createTile(Suit.Wan, 5, 9), createTile(Suit.Wan, 6, 10), createTile(Suit.Wan, 7, 11),
  createTile(Suit.Wan, 8, 12), createTile(Suit.Wan, 8, 13), createTile(Suit.Wan, 8, 14),
  createTile(Suit.Wan, 9, 15), createTile(Suit.Wan, 9, 16),
], [
  pong([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 1, 1), createTile(Suit.Wan, 1, 2)]),
  pong([createTile(Suit.Feng, HonorValue.East, 3), createTile(Suit.Feng, HonorValue.East, 4), createTile(Suit.Feng, HonorValue.East, 5)]),
]), null), '2碰 + 手牌3面子1将（11张）');

// ============================================================
// 杠牌副露
// ============================================================

console.log('\n【杠牌副露】');

// 1明杠 + 手牌4面子1将（14张）
assert(canWin(createPlayer([
  createTile(Suit.Wan, 2, 4), createTile(Suit.Wan, 3, 5), createTile(Suit.Wan, 4, 6),
  createTile(Suit.Wan, 5, 7), createTile(Suit.Wan, 6, 8), createTile(Suit.Wan, 7, 9),
  createTile(Suit.Wan, 8, 10), createTile(Suit.Wan, 8, 11), createTile(Suit.Wan, 8, 12),
  createTile(Suit.Wan, 9, 13), createTile(Suit.Wan, 9, 14), createTile(Suit.Wan, 9, 15),
  createTile(Suit.Tong, 1, 16), createTile(Suit.Tong, 1, 17),
], [exposedKong([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 1, 1), createTile(Suit.Wan, 1, 2), createTile(Suit.Wan, 1, 3)])]), null), '1明杠 + 手牌4面子1将（14张）');

// 1暗杠 + 手牌4面子1将（14张）
assert(canWin(createPlayer([
  createTile(Suit.Wan, 2, 4), createTile(Suit.Wan, 3, 5), createTile(Suit.Wan, 4, 6),
  createTile(Suit.Wan, 5, 7), createTile(Suit.Wan, 6, 8), createTile(Suit.Wan, 7, 9),
  createTile(Suit.Wan, 8, 10), createTile(Suit.Wan, 8, 11), createTile(Suit.Wan, 8, 12),
  createTile(Suit.Wan, 9, 13), createTile(Suit.Wan, 9, 14), createTile(Suit.Wan, 9, 15),
  createTile(Suit.Tong, 1, 16), createTile(Suit.Tong, 1, 17),
], [concealedKong([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 1, 1), createTile(Suit.Wan, 1, 2), createTile(Suit.Wan, 1, 3)])]), null), '1暗杠 + 手牌4面子1将（14张）');

// ============================================================
// 吃碰杠混合
// ============================================================

console.log('\n【吃碰杠混合】');

// 1吃1碰1杠 + 手牌2面子1将（8张）
assert(canWin(createPlayer([
  createTile(Suit.Wan, 8, 10), createTile(Suit.Wan, 8, 11), createTile(Suit.Wan, 8, 12),
  createTile(Suit.Wan, 9, 13), createTile(Suit.Wan, 9, 14), createTile(Suit.Wan, 9, 15),
  createTile(Suit.Tong, 1, 16), createTile(Suit.Tong, 1, 17),
], [
  chow([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2)]),
  pong([createTile(Suit.Wan, 4, 3), createTile(Suit.Wan, 4, 4), createTile(Suit.Wan, 4, 5)]),
  exposedKong([createTile(Suit.Wan, 7, 6), createTile(Suit.Wan, 7, 7), createTile(Suit.Wan, 7, 8), createTile(Suit.Wan, 7, 9)]),
]), null), '1吃1碰1杠 + 手牌2面子1将（8张）');

// 2吃1碰1杠 + 手牌1面子1将（5张）: 123万 789万 222筒 5555条 | 888条 99条
assert(canWin(createPlayer([
  createTile(Suit.Tiao, 8, 13), createTile(Suit.Tiao, 8, 14), createTile(Suit.Tiao, 8, 15),
  createTile(Suit.Tiao, 9, 16), createTile(Suit.Tiao, 9, 17),
], [
  chow([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2)]),
  chow([createTile(Suit.Wan, 7, 3), createTile(Suit.Wan, 8, 4), createTile(Suit.Wan, 9, 5)]),
  pong([createTile(Suit.Tong, 2, 6), createTile(Suit.Tong, 2, 7), createTile(Suit.Tong, 2, 8)]),
  exposedKong([createTile(Suit.Tiao, 5, 9), createTile(Suit.Tiao, 5, 10), createTile(Suit.Tiao, 5, 11), createTile(Suit.Tiao, 5, 12)]),
]), null), '2吃1碰1杠 + 手牌1面子1将（5张）');

// 3吃1杠 + 手牌2面子1将（8张）（用户场景）: 123万 789万 234筒 红中杠 | 678筒 234条 88条
assert(canWin(createPlayer([
  createTile(Suit.Tong, 6, 13), createTile(Suit.Tong, 7, 14), createTile(Suit.Tong, 8, 15),
  createTile(Suit.Tiao, 2, 16), createTile(Suit.Tiao, 3, 17), createTile(Suit.Tiao, 4, 18),
  createTile(Suit.Tiao, 8, 19), createTile(Suit.Tiao, 8, 20),
], [
  chow([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2)]),
  chow([createTile(Suit.Wan, 7, 3), createTile(Suit.Wan, 8, 4), createTile(Suit.Wan, 9, 5)]),
  chow([createTile(Suit.Tong, 2, 6), createTile(Suit.Tong, 3, 7), createTile(Suit.Tong, 4, 8)]),
  exposedKong([createTile(Suit.Feng, HonorValue.Zhong, 9), createTile(Suit.Feng, HonorValue.Zhong, 10), createTile(Suit.Feng, HonorValue.Zhong, 11), createTile(Suit.Feng, HonorValue.Zhong, 12)]),
]), null), '3吃1杠 + 手牌2面子1将（8张，用户场景）');

// ============================================================
// 财神牌型
// ============================================================

console.log('\n【财神牌型】');

const jokerZhong = createTile(Suit.Feng, HonorValue.Zhong, 99);

// 财神替换 - 无副露（17张）: 123万 456万 789万 111筒 222筒 红中红中
assert(canWin(createPlayer([
  createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2),
  createTile(Suit.Wan, 4, 3), createTile(Suit.Wan, 5, 4), createTile(Suit.Wan, 6, 5),
  createTile(Suit.Wan, 7, 6), createTile(Suit.Wan, 8, 7), createTile(Suit.Wan, 9, 8),
  createTile(Suit.Tong, 1, 9), createTile(Suit.Tong, 1, 10), createTile(Suit.Tong, 1, 11),
  createTile(Suit.Tong, 2, 12), createTile(Suit.Tong, 2, 13), createTile(Suit.Tong, 2, 14),
  createTile(Suit.Feng, HonorValue.Zhong, 15), createTile(Suit.Feng, HonorValue.Zhong, 16),
]), jokerZhong), '财神替换（无副露，17张）');

// 财神替换 - 有吃牌（14张）
assert(canWin(createPlayer([
  createTile(Suit.Wan, 4, 3), createTile(Suit.Wan, 5, 4), createTile(Suit.Wan, 6, 5),
  createTile(Suit.Wan, 7, 6), createTile(Suit.Wan, 8, 7), createTile(Suit.Wan, 9, 8),
  createTile(Suit.Tong, 1, 9), createTile(Suit.Tong, 1, 10), createTile(Suit.Tong, 1, 11),
  createTile(Suit.Tong, 2, 12), createTile(Suit.Tong, 2, 13), createTile(Suit.Tong, 2, 14),
  createTile(Suit.Feng, HonorValue.Zhong, 15), createTile(Suit.Feng, HonorValue.Zhong, 16),
], [chow([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2)])]), jokerZhong), '财神替换（有吃牌，14张）');

// 多财神（17张）: 123万 456万 789万 红中红中红中 222筒 33筒
assert(canWin(createPlayer([
  createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2),
  createTile(Suit.Wan, 4, 3), createTile(Suit.Wan, 5, 4), createTile(Suit.Wan, 6, 5),
  createTile(Suit.Wan, 7, 6), createTile(Suit.Wan, 8, 7), createTile(Suit.Wan, 9, 8),
  createTile(Suit.Feng, HonorValue.Zhong, 9), createTile(Suit.Feng, HonorValue.Zhong, 10), createTile(Suit.Feng, HonorValue.Zhong, 11),
  createTile(Suit.Tong, 2, 12), createTile(Suit.Tong, 2, 13), createTile(Suit.Tong, 2, 14),
  createTile(Suit.Tong, 3, 15), createTile(Suit.Tong, 3, 16),
]), jokerZhong), '多财神替换（17张）');

// ============================================================
// 别人出牌胡牌 (canWinWithTile)
// ============================================================

console.log('\n【别人出牌胡牌】');

// 3吃1杠听牌 - 别人出8条（手牌7张，需要8张）
assert(canWinWithTile(createPlayer([
  createTile(Suit.Tong, 6, 13), createTile(Suit.Tong, 7, 14), createTile(Suit.Tong, 8, 15),
  createTile(Suit.Tiao, 2, 16), createTile(Suit.Tiao, 3, 17), createTile(Suit.Tiao, 4, 18),
  createTile(Suit.Tiao, 8, 19),
], [
  chow([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2)]),
  chow([createTile(Suit.Wan, 7, 3), createTile(Suit.Wan, 8, 4), createTile(Suit.Wan, 9, 5)]),
  chow([createTile(Suit.Tong, 2, 6), createTile(Suit.Tong, 3, 7), createTile(Suit.Tong, 4, 8)]),
  exposedKong([createTile(Suit.Feng, HonorValue.Zhong, 9), createTile(Suit.Feng, HonorValue.Zhong, 10), createTile(Suit.Feng, HonorValue.Zhong, 11), createTile(Suit.Feng, HonorValue.Zhong, 12)]),
]), createTile(Suit.Tiao, 8, 20), null), '3吃1杠 - 别人出8条胡（7张+1张=8张）');

// 2碰听牌 - 别人出9万（手牌10张，需要11张）
assert(canWinWithTile(createPlayer([
  createTile(Suit.Wan, 2, 6), createTile(Suit.Wan, 3, 7), createTile(Suit.Wan, 4, 8),
  createTile(Suit.Wan, 5, 9), createTile(Suit.Wan, 6, 10), createTile(Suit.Wan, 7, 11),
  createTile(Suit.Wan, 8, 12), createTile(Suit.Wan, 8, 13), createTile(Suit.Wan, 8, 14),
  createTile(Suit.Wan, 9, 15),
], [
  pong([createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 1, 1), createTile(Suit.Wan, 1, 2)]),
  pong([createTile(Suit.Feng, HonorValue.East, 3), createTile(Suit.Feng, HonorValue.East, 4), createTile(Suit.Feng, HonorValue.East, 5)]),
]), createTile(Suit.Wan, 9, 16), null), '2碰 - 别人出9万胡（10张+1张=11张）');

// ============================================================
// 不能胡的牌型
// ============================================================

console.log('\n【不能胡的牌型】');

// 缺将: 123万 456万 789万 123筒 456筒（17张，无对子）
assert(!canWin(createPlayer([
  createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2),
  createTile(Suit.Wan, 4, 3), createTile(Suit.Wan, 5, 4), createTile(Suit.Wan, 6, 5),
  createTile(Suit.Wan, 7, 6), createTile(Suit.Wan, 8, 7), createTile(Suit.Wan, 9, 8),
  createTile(Suit.Tong, 1, 9), createTile(Suit.Tong, 2, 10), createTile(Suit.Tong, 3, 11),
  createTile(Suit.Tong, 4, 12), createTile(Suit.Tong, 5, 13), createTile(Suit.Tong, 6, 14),
  createTile(Suit.Tong, 7, 15), createTile(Suit.Tong, 8, 16),
]), null), '缺将 - 不能胡（17张）');

// 牌数不对: 16张（应该是17张）
assert(!canWin(createPlayer([
  createTile(Suit.Wan, 1, 0), createTile(Suit.Wan, 2, 1), createTile(Suit.Wan, 3, 2),
  createTile(Suit.Wan, 4, 3), createTile(Suit.Wan, 5, 4), createTile(Suit.Wan, 6, 5),
  createTile(Suit.Wan, 7, 6), createTile(Suit.Wan, 8, 7), createTile(Suit.Wan, 9, 8),
  createTile(Suit.Tong, 1, 9), createTile(Suit.Tong, 1, 10), createTile(Suit.Tong, 1, 11),
  createTile(Suit.Tong, 2, 12), createTile(Suit.Tong, 2, 13), createTile(Suit.Tong, 2, 14),
  createTile(Suit.Tong, 3, 15),
]), null), '牌数不对 - 不能胡（16张）');

// ============================================================
// 汇总
// ============================================================

console.log(`\n${'='.repeat(40)}`);
console.log(`总计: ${passed + failed} | ✅ 通过: ${passed} | ❌ 失败: ${failed}`);
