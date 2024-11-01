import { Leafer } from 'leafer-ui';
import { useEffect, useRef } from 'react';
import { FlexBox, FlexDirection } from '@/components/base';
import { generateBlocks, render } from './util';
import { GameInfo } from './type';
import { SLActionType, useSubscribeSLAction } from './subject';
import { getLayoutStore } from '@/store';
import { AppearBox } from '@/components/appear-box';
import { addStorageItem, logger } from '@/utils';
import { SL_HISTORY_STORAGE_KEY } from '../constant';

export function Component() {
  const canvasRef = useRef<HTMLElement>(null);
  const gameInfo = useRef<GameInfo>({
    row: 30,
    col: 30,
    startTime: Date.now(),
    mineTotal: 500,
    gap: 2,
    blockSize: 20,
    blocks: [],
    status: 'paying',
    leafer: null as unknown as Leafer,
  });

  const start = () => {
    const { leafer } = gameInfo.current;
    gameInfo.current.status = 'paying';
    leafer.clear();
    const { row, col, mineTotal } = gameInfo.current;
    gameInfo.current.blocks = generateBlocks(row, col, mineTotal);
    render(gameInfo.current);
  };

  useEffect(() => {
    if (gameInfo.current.leafer) return;
    gameInfo.current.leafer = new Leafer({ view: canvasRef.current! });
    start();
  }, []);

  useSubscribeSLAction((action) => {
    const { ext } = action;
    gameInfo.current.status = 'over';
    const isWin = ext?.isWin;
    const { blocks: _, leafer: __, ...rest } = gameInfo.current;
    addStorageItem(SL_HISTORY_STORAGE_KEY, { ...rest, timer: Date.now(), isWin });
    getLayoutStore().showMessage({
      type: isWin ? void 0 : 'error',
      content: isWin ? '恭喜你，胜利了!' : '很遗憾，失败了!',
    });
  }, SLActionType.GAME_OVER);

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
};
