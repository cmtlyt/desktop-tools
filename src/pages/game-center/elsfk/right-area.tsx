import { useState } from 'react';
import { ButtonList } from '@/components/button-list';
import { GameStatus, useELSFKStoreSlice } from './store';
import { ELSFKActionType, emitELSFKAction } from './subject';
import { HistoryDrawer, HistoryInfoWrapper, HistoryItem } from '../components/history-drawer';
import { ELSFK_HISTORY_STORAGE_KEY } from '../constant';
import { GameInfo } from './type';
import { FlexAlign, FlexDirection, FlexJustify } from '@/components/base';
import { DateView } from '@/components/date-view';

interface HistoryInfo extends GameInfo {
  time: number;
}

export function RightArea() {
  const { gameStatus } = useELSFKStoreSlice('gameStatus');
  const [openHistory, setOpenHistory] = useState(false);

  const isRunning = gameStatus === GameStatus.RUNNING;

  return (
    <>
      <ButtonList
        buttons={[
          {
            text: isRunning ? '暂停' : '开始',
            onClick() {
              // getELSFKStore().setGameStatus(gameStatus === GameStatus.running ? GameStatus.pause : GameStatus.running);
              emitELSFKAction({
                id: `elsfk-${isRunning ? 'pause' : 'start'}`,
                type: isRunning ? ELSFKActionType.PAUSE : ELSFKActionType.START,
              });
            },
          },
          {
            text: '重置',
            onClick() {
              emitELSFKAction({ id: 'elsfk-reload', type: ELSFKActionType.RELOAD });
            },
          },
          {
            text: '游戏记录',
            onClick: () => setOpenHistory(true),
          },
        ]}
      />
      <HistoryDrawer open={openHistory} storeKey={ELSFK_HISTORY_STORAGE_KEY} onClose={() => setOpenHistory(false)}>
        {(info: HistoryInfo) => (
          <HistoryItem key={info.gameId} $direction={FlexDirection.COLUMN} $gap="0.5">
            <HistoryInfoWrapper $alignItems={FlexAlign.CENTER} $justifyContent={FlexJustify.BETWEEN}>
              <span>分数: {info.score}</span>
              <DateView format="yyyy-MM-DD hh:mm:ss">{info.time}</DateView>
            </HistoryInfoWrapper>
          </HistoryItem>
        )}
      </HistoryDrawer>
    </>
  );
}
