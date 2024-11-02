import { useEffect, useMemo, useRef } from 'react';
import { Leafer } from 'leafer-ui';
import { getRandomString } from '@cmtlyt/base';
import { FlexBox, FlexDirection } from '@/components/base';
import { generateBlocks, getScore, render } from './util';
import { GameInfo } from './type';
import { SLActionType, useSubscribeSLAction } from './subject';
import { getLayoutStore } from '@/store';
import { AppearBox } from '@/components/appear-box';
import { addStorageItem, forceSaveStorage, logger } from '@/utils';
import { SL_HISTORY_STORAGE_KEY } from '../constant';
import { getSLStore } from './store';
import { HistoryInfo, RightArea } from './right-area';
import { emitHistoryAction, HistoryActionType } from '../components/history-drawer/subject';

export function Component() {
  const canvasRef = useRef<HTMLElement>(null);
  const gameInfo = useRef<GameInfo>({
    gameId: getRandomString(),
    row: 30,
    col: 30,
    startTime: Date.now(),
    mineTotal: 300,
    gap: 2,
    blockSize: 20,
    blocks: [],
    status: 'paying',
    leafer: null as unknown as Leafer,
  });
  const setGameStatus = useMemo(() => getSLStore().setGameStatus, []);

  const start = () => {
    const { leafer } = gameInfo.current;
    gameInfo.current.status = 'paying';
    gameInfo.current.startTime = Date.now();
    gameInfo.current.gameId = getRandomString();
    setGameStatus('paying');
    leafer.clear();
    const { row, col, mineTotal } = gameInfo.current;
    gameInfo.current.blocks = generateBlocks(row, col, mineTotal);
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
    const { blocks: _, leafer: __, ...rest } = gameInfo.current;
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

  return (
    <AppearBox onFirstAppear={() => logger.appear('game-sl')}>
      <FlexBox $flex="1" $direction={FlexDirection.COLUMN}>
        <FlexBox $flex="1" ref={canvasRef} />
      </FlexBox>
    </AppearBox>
  );
}

export const handle = {
  title: '扫雷',
  needBackIcon: true,
  rightArea: <RightArea />,
};
