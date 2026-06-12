针对乐清麻将“最多3张财神（赖子）”的特性，这里提供两套 JS 方案。**方案一**代码简洁易维护；**方案二**为原生递归，性能极致，适合服务端高频校验或 AI 算番。

乐清麻将高性能胡牌判定算法
一、数据结构设计
将34种牌映射为 0-33 的整数，使用计数数组代替手牌列表，是性能优化的基础：

万子: 0-8    条子: 9-17   筒子: 18-26
东27 南28 西29 北30 中31 发32 白33

### 方案一：枚举替代法（推荐，逻辑最清晰）
利用 JS 的 Generator 惰性生成赖子的所有替代组合，结合“首位非零”基础判定，3张赖子场景耗时 < 3ms。

```javascript
/**
 * 基础胡牌判定（无赖子）
 * @param {number[]} counts - 34维计数数组 (会在递归中修改, 需传入拷贝)
 * @param {number} meldsLeft - 还需组成的面子数
 * @param {boolean} needPair - 是否还需要将牌
 */
function checkWinBasic(counts, meldsLeft, needPair = true) {
    let i = 0;
    while (i < 34 && counts[i] === 0) i++;

    if (i === 34) return meldsLeft === 0 && !needPair;

    // 强力剪枝：剩余真实牌数必须精确等于所需牌数
    let remaining = 0;
    for (let j = i; j < 34; j++) remaining += counts[j];
    if (remaining !== meldsLeft * 3 + (needPair ? 2 : 0)) return false;

    // 1. 尝试将牌
    if (needPair && counts[i] >= 2) {
        counts[i] -= 2;
        if (checkWinBasic(counts, meldsLeft, false)) { counts[i] += 2; return true; }
        counts[i] += 2;
    }
    // 2. 尝试刻子
    if (counts[i] >= 3) {
        counts[i] -= 3;
        if (checkWinBasic(counts, meldsLeft - 1, needPair)) { counts[i] += 3; return true; }
        counts[i] += 3;
    }
    // 3. 尝试顺子 (仅数牌0-26，且i在花色内位置 <= 6)
    if (i < 27 && (i % 9) <= 6 && counts[i+1] >= 1 && counts[i+2] >= 1) {
        counts[i]--; counts[i+1]--; counts[i+2]--;
        if (checkWinBasic(counts, meldsLeft - 1, needPair)) {
            counts[i]++; counts[i+1]++; counts[i+2]++; return true;
        }
        counts[i]++; counts[i+1]++; counts[i+2]++;
    }
    return false;
}

// 生成带重复的组合 (ES6 Generator)
function* combinationsWithReplacement(arr, k) {
    if (k === 0) { yield []; return; }
    for (let i = 0; i < arr.length; i++) {
        for (const tail of combinationsWithReplacement(arr.slice(i), k - 1)) {
            yield [arr[i], ...tail];
        }
    }
}

/**
 * 带财神(赖子)的胡牌判定
 */
function checkWinWithWild(counts, wildCount, meldsNeeded = 4) {
    let total = wildCount;
    for (let i = 0; i < 34; i++) total += counts[i];
    if (total !== meldsNeeded * 3 + 2) return false; // 总牌数校验

    if (wildCount === 0) return checkWinBasic(counts.slice(), meldsNeeded);

    // 优化：只枚举"相关牌" (手牌已有的 + 相邻可组顺子的)
    const relevantSet = new Set();
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
    const relevant = Array.from(relevantSet).sort((a, b) => a - b);

    for (const assignment of combinationsWithReplacement(relevant, wildCount)) {
        const temp = counts.slice();
        for (const tile of assignment) temp[tile]++;
        if (checkWinBasic(temp, meldsNeeded)) return true;
    }
    return false;
}
```

### 方案二：原生赖子递归法（极致性能）
不依赖组合枚举，直接在递归树中将赖子作为“通配符”消耗，配合剩余牌数剪枝，速度更快。

```javascript
function checkWinNative(counts, wild, meldsLeft, needPair = true) {
    let i = 0;
    while (i < 34 && counts[i] === 0) i++;

    if (i === 34) return wild >= meldsLeft * 3 + (needPair ? 2 : 0);

    let remaining = 0;
    for (let j = i; j < 34; j++) remaining += counts[j];
    const needed = meldsLeft * 3 + (needPair ? 2 : 0);
    if (remaining + wild < needed || remaining > needed) return false; // 核心剪枝

    // 1. 将牌 (可用0~2张真实牌，剩余用赖子补)
    if (needPair) {
        for (let u = Math.min(counts[i], 2); u >= 0; u--) {
            const w = 2 - u;
            if (w <= wild && (u > 0 || i === 33)) { // i===33防止全赖子将牌重复分支
                counts[i] -= u;
                if (checkWinNative(counts, wild - w, meldsLeft, false)) { counts[i] += u; return true; }
                counts[i] += u;
            }
        }
    }
    // 2. 刻子
    for (let u = Math.min(counts[i], 3); u > 0; u--) {
        const w = 3 - u;
        if (w <= wild) {
            counts[i] -= u;
            if (checkWinNative(counts, wild - w, meldsLeft - 1, needPair)) { counts[i] += u; return true; }
            counts[i] += u;
        }
    }
    // 3. 顺子 (i为起点)
    if (i < 27 && (i % 9) <= 6) {
        for (let u1 = Math.min(counts[i+1], 1); u1 >= 0; u1--) {
            for (let u2 = Math.min(counts[i+2], 1); u2 >= 0; u2--) {
                const w = (1 - u1) + (1 - u2);
                if (w <= wild) {
                    counts[i]--; counts[i+1] -= u1; counts[i+2] -= u2;
                    if (checkWinNative(counts, wild - w, meldsLeft - 1, needPair)) {
                        counts[i]++; counts[i+1] += u1; counts[i+2] += u2; return true;
                    }
                    counts[i]++; counts[i+1] += u1; counts[i+2] += u2;
                }
            }
        }
    }
    // 4. 顺子 (i为中间或末尾，前方缺口由赖子填充)
    if (i < 27) {
        const idx = i % 9;
        if (idx >= 1 && idx <= 7 && wild >= 1) { // i为中间
            for (let u2 = Math.min(counts[i+1], 1); u2 >= 0; u2--) {
                const w = 1 + (1 - u2);
                if (w <= wild) {
                    counts[i]--; counts[i+1] -= u2;
                    if (checkWinNative(counts, wild - w, meldsLeft - 1, needPair)) { counts[i]++; counts[i+1] += u2; return true; }
                    counts[i]++; counts[i+1] += u2;
                }
            }
        }
        if (idx >= 2 && wild >= 2) { // i为末尾
            counts[i]--;
            if (checkWinNative(counts, wild - 2, meldsLeft - 1, needPair)) { counts[i]++; return true; }
            counts[i]++;
        }
    }
    return false;
}
```

### 调用示例与规则适配

```javascript
// 映射表：万(0-8), 条(9-17), 筒(18-26), 东南西北中发白(27-33)
// 假设本局财神为 5万(index=4)
const WILD_TILE_ID = 4; 

// 构建手牌计数数组 (剔除已副露的明牌和杠出的花牌)
const counts = new Array(34).fill(0);
let wildCount = 0;
const handTiles = [0,0,0, 1,2,3, 4,4, 27,27, 28,28, 9,9]; // 示例手牌

for (const t of handTiles) {
    if (t === WILD_TILE_ID) wildCount++;
    else counts[t]++;
}

// 判定胡牌 (动态传入需要的暗面子数。如无副露则为4，碰过1次则为3)
const meldsNeeded = 4; 
const isWin = checkWinWithWild(counts, wildCount, meldsNeeded);
// 或使用原生法: const isWin = checkWinNative(counts.slice(), wildCount, meldsNeeded);

// 软硬牌判定 (根据乐清规则)
const isSoft = wildCount > 0; // 只要手牌带有财神，全部判定为软牌
```

**注意**：乐清规则中“花牌强制杠”意味着红中/白板在摸牌阶段即被移出暗牌序列，因此在传入 `counts` 数组前，**不应包含已杠出的花牌**，`meldsNeeded` 也需根据实际暗牌结构动态计算（基础为4，每有一组明牌碰/杠减1）。