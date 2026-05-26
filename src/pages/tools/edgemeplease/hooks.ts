import { useCallback, useEffect, useRef, useState } from 'react';
import { useEdgeStoreSlice, getEdgeStore } from './store';

/* ===== 消息系统 ===== */
interface MsgEntry {
  text: string;
  duration: number;
  repeats: number;
  cumFactor?: number;
}

const MESSAGES: Record<string, MsgEntry[]> = {
  first: [{ text: '快速达到边缘吧！', duration: 45, repeats: 2 }],
  go: [
    { text: '现在你可以打飞机了！', duration: 30, repeats: 2 },
    { text: '现在用你最快的速度去撸！', duration: 15, repeats: 4 },
    { text: '快速而努力地做到这一点！', duration: 10, repeats: 4 },
    { text: '快速而努力地做着吧！', duration: 8, repeats: 6 },
    { text: '继续！去感受边缘！', duration: 6, repeats: 6 },
    { text: '继续保持下去！', duration: 6, repeats: 6 },
    { text: '现在！更快地去得到它！', duration: 5, repeats: 8 },
    { text: '千万别停下！', duration: 4, repeats: 8 },
    { text: '想象着你认为最性感的事！', duration: 5, repeats: 8 },
    { text: '快来了，继续！', duration: 4, repeats: 8 },
    { text: '到了吗？还没到吗？快到了？', duration: 4, repeats: 10 },
    { text: '不要想别的！继续！', duration: 4, repeats: 10 },
    { text: '继续边缘！', duration: 4, repeats: 10 },
    { text: '边缘！边缘！边缘！', duration: 4, repeats: 10 },
    { text: '继续！就快到了！', duration: 3, repeats: 15 },
    { text: '就是现在！', duration: 3, repeats: 15 },
    { text: '就是现在！继续！', duration: 3, repeats: 15 },
    { text: '想要射了吗？还不行哦！', duration: 3, repeats: 15 },
    { text: '是不是很兴奋？', duration: 3, repeats: 15 },
    { text: '想要更快吗？', duration: 3, repeats: 15 },
  ],
  stop: [
    { text: '停下！', duration: 10, repeats: 2 },
    { text: '别动！', duration: 8, repeats: 4 },
    { text: '站着别动！', duration: 8, repeats: 4 },
    { text: '不准动！', duration: 6, repeats: 6 },
    { text: '是不是很难？', duration: 6, repeats: 6 },
    { text: '是不是忍受不了了？', duration: 6, repeats: 6 },
    { text: '坚持住！', duration: 4, repeats: 8 },
    { text: '忍住！', duration: 4, repeats: 8 },
    { text: '难受的话就对了！', duration: 4, repeats: 8 },
    { text: '再停一会就好！', duration: 4, repeats: 8 },
    { text: '如果很兴奋就对了！', duration: 4, repeats: 8 },
    { text: '现在想射了吗？', duration: 4, repeats: 10 },
    { text: '停下来，感受一下！', duration: 4, repeats: 10 },
    { text: '想想别的事！', duration: 4, repeats: 10 },
    { text: '离边缘远一点！', duration: 4, repeats: 10 },
  ],
  end: [
    { text: '时间到了！不能射精！', duration: 0, repeats: 0, cumFactor: 0 },
    { text: '时间到了！但你不能射精！', duration: 0, repeats: 0, cumFactor: 0 },
    { text: '结束了，但是你不能射！', duration: 0, repeats: 0, cumFactor: 0 },
    { text: '结束了！不许射精！', duration: 0, repeats: 0, cumFactor: 0 },
    { text: '今天到此为止，不能射精！', duration: 0, repeats: 0, cumFactor: 0 },
    { text: '结束了，不幸的是你不能射精！', duration: 0, repeats: 0, cumFactor: 0 },
    { text: '时间到！今天不能射！', duration: 0, repeats: 0, cumFactor: 0 },
    { text: '结束了！你被禁止射精！', duration: 0, repeats: 0, cumFactor: 0 },
    { text: '结束了！现在把手拿开！', duration: 0, repeats: 0, cumFactor: 0 },
    { text: '结束了！不要射精！', duration: 0, repeats: 0, cumFactor: 0 },
    { text: '射精吧！', duration: 0, repeats: 0, cumFactor: 0.1 },
    { text: '射吧！', duration: 0, repeats: 0, cumFactor: 0.1 },
    { text: '想射就射吧！', duration: 0, repeats: 0, cumFactor: 0.1 },
    { text: '已经到了射的时候了！射吧！', duration: 0, repeats: 0, cumFactor: 0.1 },
    { text: '你可以射了！', duration: 0, repeats: 0, cumFactor: 0.15 },
    { text: '想射的话就射吧！', duration: 0, repeats: 0, cumFactor: 0.15 },
    { text: '准备好了吗？要射了！', duration: 0, repeats: 0, cumFactor: 0.15 },
    { text: '不准停，继续！', duration: 0, repeats: 0, cumFactor: 0.0 },
    { text: '不要停下，继续！', duration: 0, repeats: 0, cumFactor: 0.0 },
    { text: '继续到射为止！', duration: 0, repeats: 0, cumFactor: 0.0 },
  ],
};

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

type PhaseType = 'first' | 'go' | 'stop';

interface MutableState {
  elapsed: number;
  speed: number;
  phase: PhaseType;
  msgTimer: number;
  msgDurationMs: number;
  message: string;
  finished: boolean;
  cumAllowed: boolean;
  cumFactor: number;
  playTimeMs: number;
}

let asyncSeq = 0;

function isGo(phase: PhaseType): boolean {
  return phase === 'go' || phase === 'first';
}

export function useGameEngine() {
  // subscribe to store changes so the hook re-renders when setup/status changes
  useEdgeStoreSlice('setup');
  useEdgeStoreSlice('status');
  const { setStatus } = getEdgeStore();

  // --- Refs (hook order must be stable) ---
  const g = useRef<MutableState>({} as MutableState);
  const intervalId = useRef<number | null>(null);
  const startTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const seq = useRef(0);
  const msgProgress = useRef(0);

  // --- UI state ---
  const [message, setMessage] = useState('');
  const [flashOn, setFlashOn] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [showCumZone, setShowCumZone] = useState(false);
  const [edgeWidth, setEdgeWidth] = useState(0);
  const [cumWidth, setCumWidth] = useState(0);
  const [barText, setBarText] = useState('');
  const [speedText, setSpeedText] = useState('');
  const [finishType, setFinishType] = useState<'cum' | 'edge' | null>(null);

  /** Cleanup all timers and invalidate pending callbacks */
  const cleanup = useCallback(() => {
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
    if (startTimer.current !== null) {
      clearTimeout(startTimer.current);
      startTimer.current = null;
    }
    seq.current = ++asyncSeq;
  }, []);

  useEffect(() => cleanup, [cleanup]);

  /** Pick a random entry from the message pool for a given phase */
  const pickMessage = useCallback((phase: PhaseType): MsgEntry => pick(MESSAGES[phase]), []);

  /** Begin end-of-game sequence */
  const beginFinish = useCallback(() => {
    const state = g.current;
    state.finished = true;

    const entry = pick(MESSAGES.end);
    const baseCum = getEdgeStore().setup.cumOption;
    const cumFactor = baseCum + (entry.cumFactor ?? 0);
    const canCum = Math.random() < cumFactor;

    state.cumAllowed = canCum;
    state.cumFactor = cumFactor;
    state.message = entry.text;

    setMessage(entry.text);
    setShowFlash(true);
    setShowCumZone(true);
    setFinishType(canCum ? 'cum' : 'edge');
    setBarText(canCum ? '射精！' : '不能射！');
    setCumWidth(100);
  }, []);

  /** Switch to next phase / next message */
  const nextMessage = useCallback(() => {
    const state = g.current;
    if (state.finished) return;

    state.phase = state.phase === 'first' || state.phase === 'stop' ? 'go' : 'stop';
    const entry = pickMessage(state.phase);
    state.message = entry.text;
    state.msgDurationMs = entry.duration * 1000;
    state.msgTimer = entry.duration * entry.repeats * 1000;

    msgProgress.current = 0;
    setMessage(entry.text);
  }, [pickMessage]);

  /** Main game loop: runs every 100ms via setInterval */
  const gameLoop = useCallback(() => {
    const state = g.current;
    if (state.finished) return;

    state.elapsed += 100;
    state.msgTimer -= 100;

    // 计算消息进度 (用于 edge bar)
    const remain = state.msgTimer;
    const total = state.msgDurationMs * Math.max(1, Math.ceil(remain / state.msgDurationMs));
    if (state.msgDurationMs > 0) {
      msgProgress.current = Math.min(1 - remain / total, 1);
    }

    // UI: edge bar
    if (isGo(state.phase)) {
      setEdgeWidth(msgProgress.current * 100);
      setBarText(`边缘 ${Math.round(msgProgress.current * 100)}%`);
    } else {
      setEdgeWidth((1 - msgProgress.current) * 100);
      setBarText(`边缘 ${Math.round((1 - msgProgress.current) * 100)}%`);
    }

    // UI: flash 每 500ms 交替
    if (isGo(state.phase)) {
      setFlashOn(Math.floor(state.elapsed / 500) % 2 === 0);
    }

    // Speed check
    const ratio = state.elapsed / state.playTimeMs;
    let newSpeed = 0;
    if (ratio >= 0.05) newSpeed = 1;
    if (ratio >= 0.15) newSpeed = 2;
    if (ratio >= 0.30) newSpeed = 3;
    if (newSpeed !== state.speed) {
      state.speed = newSpeed;
      const labels = ['', '· 越来越快', '· 更快了', '· 最快的！'];
      setSpeedText(labels[newSpeed] || '');
    }

    // Game over?
    if (state.elapsed >= state.playTimeMs) {
      beginFinish();
      return;
    }

    // Message expired → next
    if (state.msgTimer <= 0) {
      nextMessage();
    }
  }, [beginFinish, nextMessage]);

  /** Start a new game */
  const startGame = useCallback(() => {
    cleanup();
    const s = getEdgeStore().setup;
    const localSeq = ++asyncSeq;
    seq.current = localSeq;

    const firstEntry = MESSAGES.first[0];
    g.current = {
      elapsed: 0,
      speed: 0,
      phase: 'first',
      msgTimer: firstEntry.duration * firstEntry.repeats * 1000,
      msgDurationMs: firstEntry.duration * 1000,
      message: firstEntry.text,
      finished: false,
      cumAllowed: false,
      cumFactor: 0,
      playTimeMs: s.duration * 60 * 1000,
    };
    msgProgress.current = 0;

    // Reset all UI
    setMessage(firstEntry.text);
    setFlashOn(false);
    setShowFlash(false);
    setShowCumZone(false);
    setEdgeWidth(0);
    setCumWidth(0);
    setBarText('边缘 0%');
    setSpeedText('');
    setFinishType(null);

    setStatus('playing');

    startTimer.current = setTimeout(() => {
      if (seq.current !== localSeq) return;
      intervalId.current = window.setInterval(gameLoop, 100);
    }, 500);
  }, [cleanup, gameLoop, setStatus]);

  /** Player clicks the cum button during finish */
  const doCum = useCallback(() => {
    if (g.current.cumAllowed) {
      g.current.cumAllowed = false;
      setMessage('💦 射了！');
      setBarText('已射');
      setCumWidth(100);
      cleanup();
    }
  }, [cleanup]);

  /** Reset back to setup screen */
  const resetGame = useCallback(() => {
    cleanup();
    setStatus('setup');
    setMessage('');
    setFlashOn(false);
    setShowFlash(false);
    setShowCumZone(false);
    setEdgeWidth(0);
    setCumWidth(0);
    setBarText('');
    setSpeedText('');
    setFinishType(null);
  }, [cleanup, setStatus]);

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
