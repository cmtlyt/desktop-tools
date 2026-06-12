import { useCallback, useState } from 'react';
import { StartPage } from './start-page';
import { GameBoard } from './game-board';

// ============================================================
// 主页面
// ============================================================

function MajiangPage() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = useCallback(() => {
    setGameStarted(true);
  }, []);

  const handleExit = useCallback(() => {
    setGameStarted(false);
  }, []);

  if (!gameStarted) {
    return <StartPage onStartGame={handleStartGame} />;
  }

  return <GameBoard onExit={handleExit} />;
}

export function Component() {
  return <MajiangPage />;
}

export const handle = {
  title: '乐清麻将',
  needBackIcon: true,
};
