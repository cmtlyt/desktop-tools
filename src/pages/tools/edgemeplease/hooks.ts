import { useCallback, useEffect, useRef, useState } from 'react';
import { useEdgeStoreSlice, getEdgeStore } from './store';

/* ===== 消息系统 ===== */
interface MsgEntry {
  text: string;
  duration: number;
  repeats: number;
  type?: string;   // 'red' | 'green' for finish messages
  speed?: number;  // flash fps for go messages
}

const MESSAGES: Record<string, MsgEntry[]> = {
  first: [{ text: '快速达到边缘吧！', duration: 45, repeats: 2 }],
  go: [
    { text: '现在你可以打飞机了！', duration: 30, repeats: 2, speed: 2 },
    { text: '现在用你最快的速度去撸！', duration: 15, repeats: 4, speed: 4 },
    { text: '快速而努力地做到这一点！', duration: 10, repeats: 4, speed: 4 },
    { text: '撸吧', duration: 30, repeats: 2, speed: 2 },
    { text: '你想射吗？', duration: 20, repeats: 3, speed: 3 },
    { text: '快射了？', duration: 20, repeats: 2.5, speed: 2.5 },
    { text: '继续手艺活吧', duration: 30, repeats: 1.5, speed: 1.5 },
    { text: '继续手艺活吧', duration: 25, repeats: 2, speed: 2 },
    { text: '抚摸一下它吧', duration: 25, repeats: 2, speed: 2 },
    { text: '慢一点，稳一点...', duration: 30, repeats: 1, speed: 1 },
    { text: '用你的另一只手！', duration: 20, repeats: 2.5, speed: 2.5 },
    { text: '只用两根手指去撸你的龟头！', duration: 25, repeats: 2.5, speed: 2.5 },
    { text: '现在开撸！', duration: 30, repeats: 2, speed: 2 },
    { text: '现在开撸！', duration: 30, repeats: 2.3, speed: 2.3 },
    { text: '捏一下你的蛋蛋', duration: 10, repeats: 3, speed: 3 },
    { text: '轻轻拍打你的蛋蛋', duration: 10, repeats: 4, speed: 4 },
  ],
  stop: [
    { text: '别碰它了！平静一下，然后准备下一阶段...', duration: 25 },
    { text: '不要撸了！', duration: 20 },
    { text: '停下！深呼吸 ;-)', duration: 10 },
    { text: '停下！深呼吸 ;-)', duration: 5 },
    { text: '停下！然后....', duration: 3 },
    { text: '立刻把你的手从鸡巴上拿开', duration: 25 },
    { text: '立刻把你的手从鸡巴上拿开', duration: 20 },
    { text: '立刻把你的手从鸡巴上拿开', duration: 20 },
    { text: '把手背在脑后', duration: 25 },
    { text: '摸摸你的乳头。', duration: 25 },
    { text: '卷曲手臂，展示一下你的肱二头肌', duration: 25 },
    { text: '舔一下你结实的臂膀', duration: 20 },
    { text: '摸摸你的身体', duration: 25 },
    { text: '现在停下来', duration: 15 },
    { text: '停！', duration: 25 },
    { text: '停！', duration: 15 },
    { text: '停！', duration: 20 },
    { text: '不要射！别碰它了！', duration: 25 },
  ],
  end: [
    { text: '不好意思，这次你不能射了哦！再试一次，也许会有好运呢...现在把你的手从鸡巴上拿开，直到进度条走完为止。', duration: 45, type: 'red', speed: 2 },
    { text: '射吧！现在就射！', duration: 15, type: 'green', speed: 4 },
    { text: '射吧！别浪费时间了 ;)', duration: 60, type: 'green', speed: 1.5 },
    { text: '现在射精！来让这次成为你射的最多的一次。', duration: 25, type: 'green', speed: 2 },
    { text: '射吧！', duration: 25, type: 'green', speed: 2 },
    { text: '你只有五秒的时间去射精，否则就算你输了喔！', duration: 6, type: 'green', speed: 5 },
    { text: '现在你可以射了，开冲！', duration: 25, type: 'green', speed: 2.5 },
  ],
};

// ===== 难度配置 [baseMultiplier, pauseMultiplier] =====
const MODES: Record<number, [number, number]> = {
  0: [1.25, 1.5],
  1: [1, 1.25],
  2: [1, 1],
  3: [0.75, 0.6],
  4: [0.6, 0.3],
};

/* ===== 游戏引擎 ===== */
export function useGameEngine() {
  const { setup } = useEdgeStoreSlice('setup');
  const { setStatus, setRuntime } = getEdgeStore();

  const [message, setMessage] = useState('');
  const [flashOn, setFlashOn] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [showCumZone, setShowCumZone] = useState(false);
  const [edgeWidth, setEdgeWidth] = useState(0);
  const [cumWidth, setCumWidth] = useState(0);
  const [barText, setBarText] = useState('');
  const [speedText, setSpeedText] = useState('');
  const [finishType, setFinishType] = useState<'cum' | 'edge' | null>(null);

  const gameRef = useRef<{
    running: boolean;
    phase: string;           // 'first' | 'go' | 'stop' | 'finish' | 'cancel'
    elapsed: number;         // ms elapsed
    playTimeMs: number;      // total game duration in ms
    cumOption: number;       // cum factor from setup
    baseMultiplier: number;  // from MODES
    pauseMultiplier: number;
    speedMultiplier: number;
    prevPhaseEnd: number;    // timestamp when last phase ended (for speed calc)
    onCumResolve: ((val: boolean) => void) | null;
    flashInterval: ReturnType<typeof setInterval> | null;
  }>({
    running: false,
    phase: '',
    elapsed: 0,
    playTimeMs: 0,
    cumOption: 0,
    baseMultiplier: 1,
    pauseMultiplier: 1,
    speedMultiplier: 1,
    prevPhaseEnd: 0,
    onCumResolve: null,
    flashInterval: null,
  });

  // ===== 内部更新 =====
  function set(obj: Partial<typeof gameRef.current>) {
    Object.assign(gameRef.current, obj);
  }

  // ===== 随机选消息 =====
  function pickMsg(msgs: MsgEntry[]): MsgEntry {
    return msgs[Math.floor(Math.random() * msgs.length)];
  }

  // ===== 清理 flash =====
  function clearFlash() {
    const fi = gameRef.current.flashInterval;
    if (fi) clearInterval(fi);
    gameRef.current.flashInterval = null;
    setFlashOn(false);
    setShowFlash(false);
  }

  // ===== 更新速度倍率（原版逻辑：过半减半，3/4再减半） =====
  function updateSpeed(elapsedSec: number) {
    const g = gameRef.current;
    const playSec = g.playTimeMs / 1000;
    let mult = g.baseMultiplier;
    if (elapsedSec > playSec / 4 * 3) {
      mult = mult / 4;
    } else if (elapsedSec > playSec / 2) {
      mult = mult / 2;
    }
    g.speedMultiplier = mult;
  }

  // ===== 开始游戏 =====
  const startGame = useCallback(() => {
    const s = getEdgeStore().setup;
    const durationMin = s.duration;
    const playTimeMs = durationMin * 60 * (Math.random() + 0.5) * 1000;  // 原版随机化
    const [baseMultiplier, pauseMultiplier] = MODES[s.difficulty] ?? MODES[2];

    setStatus('playing');
    setRuntime({ gameTime: Math.ceil(playTimeMs / 1000) });

    const g = gameRef.current;
    g.running = true;
    g.phase = 'first';
    g.elapsed = 0;
    g.playTimeMs = playTimeMs;
    g.cumOption = s.cumOption;
    g.baseMultiplier = baseMultiplier;
    g.pauseMultiplier = pauseMultiplier;
    g.speedMultiplier = 1;
    g.prevPhaseEnd = Date.now();
    g.onCumResolve = null;

    // 重置 UI
    setFinishType(null);
    setShowCumZone(false);
    setEdgeWidth(0);
    setCumWidth(0);
    setBarText('');
    setSpeedText('');

    // 开始
    nextPhase();
  }, [setStatus, setRuntime]);

  // ===== 下一阶段（原版 goOn 逻辑） =====
  function nextPhase() {
    const g = gameRef.current;
    if (!g.running) return;

    // 计算已过时间
    const elapsedSec = g.elapsed / 1000;

    // 更新速度倍率
    updateSpeed(elapsedSec);

    // 计算本轮阶段类型
    let phase: string;
    if (g.phase === '') {
      // 第一次调用
      phase = 'first';
    } else if (g.phase === 'first') {
      phase = 'stop';  // 原版：热身 → Stop
    } else if (g.phase === 'go') {
      phase = 'stop';  // Go → Stop
    } else {
      phase = 'go';    // Stop → Go
    }

    // 判断是否结束（原版：只有 Stop 阶段且时间到才结束）
    const isTimeUp = g.elapsed >= g.playTimeMs;
    if (isTimeUp && phase === 'stop') {
      beginFinish();
      return;
    }
    if (isTimeUp && phase === 'go') {
      // 时间到了但还在 Go，再跑一轮 Stop 才结束
      // 这里不做特殊处理，自然进入 stop 后下一轮会触发 finish
    }

    g.phase = phase;
    g.prevPhaseEnd = Date.now();
    clearFlash();

    if (phase === 'first') {
      // 热身
      const msg = MESSAGES.first[0];
      const durationMs = msg.duration * msg.repeats * 1000;
      setMessage(msg.text);
      setBarText('打飞机吧');

      // 热身用 go 样式（原版：first 阶段 passType = 'go'）
      setShowCumZone(false);
      setEdgeWidth(0);
      setCumWidth(0);

      runPhaseTiming(durationMs, msg, false);
    } else if (phase === 'go') {
      const msg = pickMsg(MESSAGES.go);
      // 原版 Go 时间：duration * speedMultiplier
      const durationMs = msg.duration * g.speedMultiplier * 1000;
      setMessage(msg.text);
      setBarText('Go 🔥');
      setShowCumZone(false);
      setEdgeWidth(0);

      // Go 阶段闪烁
      if (msg.speed) {
        startFlash(msg.speed);
      }

      runPhaseTiming(durationMs, msg, true);
    } else {
      // Stop
      const msg = pickMsg(MESSAGES.stop);
      // 原版 Stop 时间：duration * speedMultiplier * pauseMultiplier
      const durationMs = msg.duration * g.speedMultiplier * g.pauseMultiplier * 1000;
      setMessage(msg.text);
      setBarText('停 ✋');
      setShowCumZone(false);
      setEdgeWidth(0);

      runPhaseTiming(durationMs, msg, false);
    }
  }

  // ===== 阶段计时 =====
  function runPhaseTiming(durationMs: number, _msg: MsgEntry, isGo: boolean) {
    const g = gameRef.current;
    if (!g.running) return;

    const startTime = Date.now();
    let lastTick = startTime;

    function tick() {
      if (!g.running) return;
      const now = Date.now();
      const tickDelta = now - lastTick;
      lastTick = now;

      g.elapsed += tickDelta;
      const phaseProgress = Math.min((now - startTime) / durationMs, 1);

      // 原版：Go 和 Stop 阶段 edgeFill 都从 0 → 100%
      setEdgeWidth(phaseProgress * 100);

      if (phaseProgress >= 1) {
        // 阶段结束，进入下一阶段
        nextPhase();
        return;
      }

      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  // ===== 开始闪烁 =====
  function startFlash(fps: number) {
    clearFlash();
    if (fps <= 0) return;
    setShowFlash(true);
    setFlashOn(true);

    const interval = 1000 / fps;
    gameRef.current.flashInterval = setInterval(() => {
      setFlashOn(prev => !prev);
    }, interval);
  }

  // ===== 结束阶段 =====
  function beginFinish() {
    const g = gameRef.current;
    if (!g.running) return;

    g.phase = 'finish';
    clearFlash();
    setEdgeWidth(0);
    setCumWidth(0);

    // 选中一条 finish 消息
    let msg = pickMsg(MESSAGES.end);

    // 强制 red 判定：如果 random >= cumOption，用第一条 red 消息
    if (Math.random() >= g.cumOption) {
      msg = MESSAGES.end[0];  // 第一条是 red
    }

    const canCum = g.cumOption > 0 && msg.type !== 'red';
    const durationMs = msg.duration * 1000;

    if (canCum) {
      // 可以射精：显示 cum zone，cumbar 填充
      g.phase = 'finish';
      setFinishType('cum');
      setShowCumZone(true);
      setBarText('射精！');
      setMessage(msg.text);
      if (msg.speed) startFlash(msg.speed);

      animateCumFill(durationMs);
    } else {
      // 不能射：不显示 cum zone，edge 继续填充（原版 jerkbar 倒计时）
      g.phase = 'cancel';
      setFinishType('edge');
      setShowCumZone(false);
      setBarText('不能射！');
      setMessage(msg.text);

      animateEdgeFill(durationMs);
    }
  }

  // ===== 射精进度条动画（cumFill 从 0→100） =====
  function animateCumFill(durationMs: number) {
    const g = gameRef.current;
    if (!g.running) return;

    const startTime = Date.now();

    function tick() {
      if (!g.running) return;
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      setCumWidth(progress * 100);

      if (progress >= 1) {
        endGame();
        return;
      }
      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  // ===== 不能射进度条动画（edgeFill 从 0→100） =====
  function animateEdgeFill(durationMs: number) {
    const g = gameRef.current;
    if (!g.running) return;

    const startTime = Date.now();

    function tick() {
      if (!g.running) return;
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      setEdgeWidth(progress * 100);

      if (progress >= 1) {
        endGame();
        return;
      }
      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  // ===== 结束游戏 =====
  function endGame() {
    const g = gameRef.current;
    if (!g.running) return;
    g.running = false;
    clearFlash();
    setStatus('finished');
  }

  // ===== 射精按钮 =====
  const doCum = useCallback(() => {
    const g = gameRef.current;
    if (g.onCumResolve) {
      g.onCumResolve(true);
      g.onCumResolve = null;
    }
  }, []);

  // ===== 重置 =====
  const resetGame = useCallback(() => {
    const g = gameRef.current;
    g.running = false;
    clearFlash();
    setEdgeWidth(0);
    setCumWidth(0);
    setFinishType(null);
    setStatus('setup');
    getEdgeStore().reset();
  }, [setStatus]);

  // ===== 清理 =====
  useEffect(() => {
    return () => {
      const g = gameRef.current;
      g.running = false;
      clearFlash();
    };
  }, []);

  return {
    message,
    flashOn,
    showFlash,
    showCumZone,
    edgeWidth,
    cumWidth,
    barText,
    speedText,
    finishType,
    startGame,
    doCum,
    resetGame,
  };
}
