import { Modal } from 'antd';
import { useState } from 'react';
import { AppearBox } from '@/components/appear-box';
import { Button, ButtonTheme, FlexAlign, FlexBox, FlexDirection, FlexJustify } from '@/components/base';
import { ButtonList } from '@/components/button-list';
import { logger } from '@/utils';
import { getSBWDStore } from './store';
import { SBWD_HISTORY_STORAGE_KEY } from '../constant';
import { DateView } from '@/components/date-view';
import { GameInfo } from './type';
import { HistoryDrawer, HistoryInfoWrapper, HistoryItem } from '../components/history-drawer';

interface HistoryInfo extends GameInfo {
  time: number;
}

export function RightArea() {
  const [openHistory, setOpenHistory] = useState(false);

  return (
    <>
      <ButtonList
        buttons={[
          {
            text: '游戏规则',
            onClick() {
              Modal.info({
                title: '游戏规则',
                okText: '知道了',
                centered: true,
                content: (
                  <AppearBox onFirstAppear={() => logger.appear('game-sbwd-rule')}>
                    <FlexBox $gap="0.3" $direction={FlexDirection.COLUMN}>
                      <span>1. 点击指针, 其指针顺时针旋转 90 度后指向的圆圈指针依次旋转</span>
                      <span>2. 剩余步数用完, 游戏结束</span>
                    </FlexBox>
                  </AppearBox>
                ),
              });
            },
          },
          { text: '游戏记录', onClick: () => setOpenHistory(true) },
          { text: '重置', onClick: () => getSBWDStore().reset() },
        ]}
      />
      <HistoryDrawer open={openHistory} storeKey={SBWD_HISTORY_STORAGE_KEY} onClose={() => setOpenHistory(false)}>
        {(info: HistoryInfo) => (
          <HistoryItem key={info.gameId} $direction={FlexDirection.COLUMN} $gap="0.5">
            <HistoryInfoWrapper $alignItems={FlexAlign.CENTER} $justifyContent={FlexJustify.BETWEEN}>
              <span>分数: {info.totalRotate}</span>
              <DateView format="yyyy-MM-DD hh:mm:ss">{info.time}</DateView>
            </HistoryInfoWrapper>
            <FlexBox $justifyContent={FlexJustify.END}>
              <Button
                $presetTheme={ButtonTheme.PRIMARY}
                onClick={() => {
                  const stepHistory = info.stepHistory;
                  setOpenHistory(false);
                  getSBWDStore().replay(stepHistory);
                  logger.click('game-sbwd-history-replay', { stepHistory });
                }}
              >
                重放
              </Button>
            </FlexBox>
          </HistoryItem>
        )}
      </HistoryDrawer>
    </>
  );
}
