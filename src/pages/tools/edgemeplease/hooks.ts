import { useCallback, useEffect, useRef, useState } from 'react';
import { useEdgeStoreSlice, getEdgeStore } from './store';

/* ===== 消息系统（完全复刻原版） ===== */
interface MsgEntry {
  text: string;
  duration: number;  // 秒
  fps?: number;      // 第3项：闪烁频率（原版 Go 才有）
  type?: string;     // finsh 消息：'red' | 'green'
}

const MESSAGES: Record<string, MsgEntry[]> = {
  first: [
    { text: '快速达到边缘吧！', duration: 45, fps: 2 },
  ],
  go: [
    { text: '现在你可以打飞机了！', duration: 30, fps: 2 },
    { text: '现在用你最快的速度去撸！', duration: 15, fps: 4 },
    { text: '快速而努力地做到这一点！', duration: 10, fps: 4 },
    { text: '快速而努力地做到这一点！', duration: 10, fps: 4 },
    { text: '撸吧', duration: 30, fps: 2 },
    { text: '你想射吗？', duration: 20, fps: 3 },
    { text: '快射了？', duration: 20, fps: 2.5 },
    { text: '继续手艺活吧', duration: 30, fps: 1.5 },
    { text: '继续手艺活吧', duration: 25, fps: 2 },
    { text: '抚摸一下它吧', duration: 25, fps: 2 },
    { text: '慢一点，稳一点...', duration: 30, fps: 1 },
    { text: '用你的另一只手！', duration: 20, fps: 2.5 },
    { text: '只用两根手指去撸你的龟头！', duration: 25, fps: 2.5 },
    { text: '现在开撸！', duration: 30, fps: 2 },
    { text: '现在开撸！', duration: 30, fps: 2.3 },
    { text: '捏一下你的蛋蛋', duration: 10, fps: 3 },
    { text: '轻轻拍打你的蛋蛋', duration: 10, fps: 4 },
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
  finish: [
    { text: '停下！不好意思，这次你不能射了哦！再试一次，也许会有好运呢...现在把你的手从鸡巴上拿开，直到进度条走完为止。', duration: 45, type: 'red', fps: 2 },
    { text: '射吧！现在就射！', duration: 15, type: 'green', fps: 4 },
    { text: '射吧！别浪费时间了 ;)', duration: 60, type: 'green', fps: 1.5 },
    { text: '现在射精！来让这次成为你射的最多的一次。', duration: 25, type: 'green', fps: 2 },
    { text: '射吧！', duration: 25, type: 'green', fps: 2 },
    { text: '你只有五秒的时间去射精，否则就算你输了喔！', duration: 6, type: 'green', fps: 5 },
    { text: '现在你可以射了，开冲！', duration: 25, type: 'green', fps: 2.5 },
  ],
};

/* ===== 难度配置 [baseMultiplier, pauseMultiplier] ===== */
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
  const [progressColor, setProgressColor] = useState(''); // '' | 'red' | 'green'

  const g = useRef<{
    running: boolean;
    targetDuration: number;   // 秒（原版 targetDuration）
    baseMultiplier: number;   // mode[0]
    pauseMultiplier: number;  // mode[1]
    cumFactor: number;        // 用户选择的 cumOption
    controlStroke: string;    // 是否允许闪烁
    pass: number;             // 第几轮（原版 pass）
    startTime: number;        // 游戏开始时间戳
    timerId: ReturnType<typeof setTimeout> | null;
    flashIntervalId: ReturnType<typeof setInterval> | null;
  }>({
    running: false,
    targetDuration: 0,
    baseMultiplier: 1,
    pauseMultiplier: 1,
    cumFactor: 0.5,
    controlStroke: 'true',
    pass: 0,
    startTime: 0,
    timerId: null,
    flashIntervalId: null,
  });

  function pickMsg(msgs: MsgEntry[]): MsgEntry {
    return msgs[Math.floor(Math.random() * msgs.length)];
  }

  function clearTimers() {
    const ref = g.current;
    if (ref.timerId) { clearTimeout(ref.timerId); ref.timerId = null; }
    if (ref.flashIntervalId) { clearInterval(ref.flashIntervalId); ref.flashIntervalId = null; }
    setFlashOn(false);
    setShowFlash(false);
  }

  function updateFlash(fps: number | undefined) {
    const ref = g.current;
    if (ref.flashIntervalId) { clearInterval(ref.flashIntervalId); ref.flashIntervalId = null; }
    if (fps === undefined || ref.controlStroke === 'false') {
      setShowFlash(false);
      return;
    }
    // 原版：1000 / fps / 2 * baseMultiplier
    const timeout = 1000 / fps / 2 * ref.baseMultiplier;
    let i = 0;
    setShowFlash(true);
    ref.flashIntervalId = setInterval(() => {
      setFlashOn(i % 2 === 0);
      i++;
    }, timeout);
  }

  // ===== 开始游戏 =====
  const startGame = useCallback(() => {
    const s = getEdgeStore().setup;
    const [baseMultiplier, pauseMultiplier] = MODES[s.difficulty] ?? MODES[2];
    // 原版：duration * 60 * (Math.random() + 0.5)
    const targetDuration = s.duration * 60 * (Math.random() + 0.5);

    setStatus('playing');
    setRuntime({ gameTime: Math.ceil(targetDuration) });

    const ref = g.current;
    ref.running = true;
    ref.targetDuration = targetDuration;
    ref.baseMultiplier = baseMultiplier;
    ref.pauseMultiplier = pauseMultiplier;
    ref.cumFactor = s.cumOption;
    ref.controlStroke = 'true';
    ref.pass = 0;
    ref.startTime = Date.now();
    ref.timerId = null;
    ref.flashIntervalId = null;

    // 重置 UI
    setFinishType(null);
    setShowCumZone(false);
    setEdgeWidth(0);
    setCumWidth(0);
    setBarText('');
    setSpeedText('');
    setProgressColor('');

    // 原版：var startTime = new Date().getTime(); var pass = 0; goOn();
    goOn();
  }, [setStatus, setRuntime]);

  // ===== goOn — 完全复刻原版逻辑 =====
  function goOn() {
    const ref = g.current;
    if (!ref.running) return;

    ref.pass++;
    const duration = (Date.now() - ref.startTime) / 1000;  // 秒

    // 速度调整（原版）
    let multiplier = ref.baseMultiplier;
    if (duration > ref.targetDuration / 4 * 3) {
      multiplier = multiplier / 4;
      setSpeedText('⚡⚡⚡ 飞奔中！');
    } else if (duration > ref.targetDuration / 2) {
      multiplier = multiplier / 2;
      setSpeedText('⚡⚡ 加速了！');
    } else {
      setSpeedText('');
    }

    // 阶段类型
    const passType = ref.pass % 2 !== 0 ? 'go' : 'stop';
    if (passType === 'stop') {
      multiplier = multiplier * ref.pauseMultiplier;
    }

    // 判断是否结束（原版：只有 Stop 且时间到才结束）
    if (duration < ref.targetDuration || passType === 'go') {
      // === 继续游戏 ===
      const ourMessages = ref.pass === 1 ? MESSAGES.first : MESSAGES[passType];
      const msg = pickMsg(ourMessages);

      // 设置 CSS class（原版：$mw.removeClass('go').removeClass('stop').addClass(passType)）
      if (passType === 'go') {
        setProgressColor('');
        setShowCumZone(false);
      } else {
        setProgressColor('red');    // Stop 模式红色背景
        setShowCumZone(false);
      }

      setMessage(msg.text);
      setBarText(passType === 'go' ? 'Go 🔥' : '停 ✋');
      updateFlash(msg.fps);

      // 进度条：原版始终用 jerkbar
      const timeout = msg.duration * 1000 * multiplier;
      showProgress(timeout, 'jerkbar');
    } else {
      // === 时间到！结束 ===
      beginFinish();
    }
  }

  // ===== showProgress — 原版 showProgressAndGoOn =====
  function showProgress(timeout: number, bar: 'jerkbar' | 'cumbar') {
    const ref = g.current;
    if (!ref.running) return;

    const start = Date.now();

    function continueProgress() {
      if (!ref.running) return;
      const current = Date.now() - start;
      const percent = Math.min((current / timeout) * 100, 100);

      if (bar === 'jerkbar') {
        setEdgeWidth(percent);
        setCumWidth(0);
      } else {
        setCumWidth(percent);
        setEdgeWidth(0);
      }

      if (current > timeout) {
        // 原版：callback()（goOn 或 end）
        if (bar === 'cumbar') {
          // finish cum 结束后调用 end
          endGame();
        } else {
          goOn();
        }
      } else {
        ref.timerId = setTimeout(continueProgress, 100);  // 原版：100ms
      }
    }

    continueProgress();
  }

  // ===== 结束阶段 — 原版 goOn 的 else 分支 =====
  function beginFinish() {
    const ref = g.current;
    if (!ref.running) return;

    const ourMessages = MESSAGES.finish;
    let msg = pickMsg(ourMessages);

    // 随机 "outcum"（原版）
    if (Math.random() >= ref.cumFactor) {
      msg = ourMessages[0];  // 第一条 red（不能射）
    }

    if (ref.cumFactor === 0) {
      // cumFactor 为 0 → 不能射，直接显示结束文案，无进度条
      setMessage('时间到了！你不能射精。再试一次吧！');
      setBarText('');
      setShowCumZone(false);
      setProgressColor('red');
      clearTimers();
      setStatus('finished');
      return;
    }

    if (msg.type !== 'red') {
      // === 可以射精 ===
      setFinishType('cum');
      setShowCumZone(true);
      setBarText('射精！');
      setMessage(msg.text);
      setProgressColor('green');
      updateFlash(msg.fps);
      showProgress(msg.duration * 1000, 'cumbar');
    } else {
      // === 不能射精 ===
      setFinishType('edge');
      setShowCumZone(false);
      setBarText('不能射！');
      setMessage(msg.text);
      setProgressColor('red');
      updateFlash(undefined);
      showProgress(msg.duration * 1000, 'jerkbar');
    }
  }

  // ===== end — 原版 end 函数 =====
  function endGame() {
    const ref = g.current;
    if (!ref.running) return;
    ref.running = false;
    clearTimers();
    setMessage('游戏结束！下次加油！');
    setBarText('');
    setProgressColor('');
    setStatus('finished');
  }

  // ===== 射精按钮（这个原版没有，是 UI 加的，不影响核心逻辑） =====
  const doCum = useCallback(() => {
    // 按钮仅供 UI 反馈，核心进度条逻辑已经在 run
  }, []);

  // ===== 重置 =====
  const resetGame = useCallback(() => {
    const ref = g.current;
    ref.running = false;
    clearTimers();
    setEdgeWidth(0);
    setCumWidth(0);
    setFinishType(null);
    setProgressColor('');
    setStatus('setup');
    getEdgeStore().reset();
  }, [setStatus]);

  // ===== 清理 =====
  useEffect(() => {
    return () => {
      g.current.running = false;
      clearTimers();
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
    progressColor,
    startGame,
    doCum,
    resetGame,
  };
}
