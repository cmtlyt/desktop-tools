import { useEffect, useMemo, useRef } from 'react';
import { Leafer } from 'leafer-ui';
import { getRandomString } from '@cmtlyt/base';
import { FlexBox, FlexDirection } from '@/components/base';
import {
  generateBlocks,
  getBlockFromPoint,
  getPointDistance,
  getScore,
  probeAround,
  render,
  showAllMine,
} from './util';
import { GameInfo } from './type';
import { SLActionType, useSubscribeSLAction } from './subject';
import { getLayoutStore } from '@/store';
import { AppearBox } from '@/components/appear-box';
import { addStorageItem, forceSaveStorage, logger } from '@/utils';
import { SL_HISTORY_STORAGE_KEY } from '../constant';
import { getSLStore } from './store';
import { HistoryInfo, RightArea } from './right-area';
import { emitHistoryAction, HistoryActionType } from '../components/history-drawer/subject';
import { isPhone } from '@/utils/is-phone';
import { GameConfigDrawer, GameInfoBox, PhoneController } from './components';

export function Component() {
  const canvasRef = useRef<HTMLElement>(null);
  const gameInfo = useRef<GameInfo>({
    gameId: getRandomString(),
    row: 30,
    col: 30,
    startTime: Date.now(),
    mineTotal: 200,
    mineCount: 0,
    userMiniCount: 0,
    gap: 2,
    blockSize: 20,
    openBlock: 0,
    mines: [],
    blocks: [],
    isPhone: isPhone(),
    status: 'paying',
    leafer: null as unknown as Leafer,
  });
  const setGameStatus = useMemo(() => getSLStore().setGameStatus, []);

  const start = () => {
    const { leafer } = gameInfo.current;
    gameInfo.current.mineCount = 0;
    gameInfo.current.openBlock = 0;
    gameInfo.current.userMiniCount = 0;
    gameInfo.current.status = 'paying';
    gameInfo.current.startTime = Date.now();
    gameInfo.current.gameId = getRandomString();
    setGameStatus('paying');
    leafer.clear();
    const { row, col, mineTotal } = gameInfo.current;
    const [blocks, mines] = generateBlocks(row, col, mineTotal);
    gameInfo.current.blocks = blocks;
    gameInfo.current.mines = mines;
    render(gameInfo.current);
  };

  useEffect(() => {
    if (gameInfo.current.leafer) return;
    gameInfo.current.leafer = new Leafer({ view: canvasRef.current! });
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useSubscribeSLAction((action) => {
    const { ext } = action;
    gameInfo.current.status = 'over';
    setGameStatus('over');
    const isWin = ext?.isWin || false;
    if (!isWin) showAllMine(gameInfo.current);
    const { blocks: _, leafer: __, isPhone: ___, ...rest } = gameInfo.current;
    const { startTime } = gameInfo.current;
    const time = Date.now();
    const historyInfo: HistoryInfo = { ...rest, time, isWin, durationOfUse: time - startTime, score: 0 };
    historyInfo.score = getScore(historyInfo);
    logger.event('game-sl-over', historyInfo);
    logger.expose('game-sl-over');
    addStorageItem(SL_HISTORY_STORAGE_KEY, historyInfo);
    forceSaveStorage();
    emitHistoryAction({ id: 'reload-history', type: HistoryActionType.RELOAD_HISTORY });
    getLayoutStore().showMessage({
      type: isWin ? void 0 : 'error',
      content: `${isWin ? '恭喜你，胜利了!' : '很遗憾，失败了!'} 得分: ${historyInfo.score}`,
    });
  }, SLActionType.GAME_OVER);

  useSubscribeSLAction(start, SLActionType.RESTART);

  const onMouseHandler: React.MouseEventHandler<HTMLElement> = useMemo(() => {
    let pos: [number, number] = [0, 0];
    return (e) => {
      if (gameInfo.current.status === 'over') return;
      if (e.type === 'mousedown') return (pos = [e.clientX, e.clientY]);
      if (e.button === 1) {
        const currPos = [e.clientX, e.clientY];
        const distance = getPointDistance(pos, currPos);
        if (distance > 0) return;
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;
        const { leafer } = gameInfo.current;
        const innerPoint = leafer.getInnerPointByLocal({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        const block = getBlockFromPoint(innerPoint, gameInfo.current);
        if (!block) return;
        probeAround(block, gameInfo.current);
      }
    };
  }, []);

  return (
    <AppearBox onFirstAppear={() => logger.appear('game-sl')}>
      <GameInfoBox gameInfo={gameInfo} />
      <FlexBox $flex="1" $direction={FlexDirection.COLUMN}>
        <FlexBox $flex="1" ref={canvasRef} onMouseDown={onMouseHandler} onMouseUp={onMouseHandler} />
      </FlexBox>
      <PhoneController />
      <GameConfigDrawer gameInfo={gameInfo} />
    </AppearBox>
  );
}

export const handle = {
  title: '扫雷',
  needBackIcon: true,
  rightArea: <RightArea />,
};
