import { useState } from 'react';
import { ButtonList } from '@/components/button-list';
import { emitSLAction, SLActionType } from './subject';
import { HistoryDrawer, HistoryInfoWrapper, HistoryItem } from '../components/history-drawer';
import { SL_HISTORY_STORAGE_KEY } from '../constant';
import { FlexAlign, FlexDirection, FlexJustify } from '@/components/base';
import { DateView } from '@/components/date-view';
import { BaseGameInfo } from './type';

export interface HistoryInfo extends BaseGameInfo {
  time: number;
  isWin: boolean;
  score: number;
  durationOfUse: number;
}

export function RightArea() {
  const [openHistory, setOpenHistory] = useState(false);

  return (
    <>
      <ButtonList
        buttons={[
          {
            text: '重置',
            onClick: () => emitSLAction({ id: 'sl-restart', type: SLActionType.RESTART }),
          },
          {
            text: '游戏配置',
            onClick: () => emitSLAction({ id: 'sl-config', type: SLActionType.CHANGE_CONFIG }),
          },
          { text: '游戏记录', onClick: () => setOpenHistory(true) },
        ]}
      />
      <HistoryDrawer open={openHistory} storeKey={SL_HISTORY_STORAGE_KEY} onClose={() => setOpenHistory(false)}>
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
