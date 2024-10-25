import { Drawer, Modal } from 'antd';
import { useState } from 'react';
import { AppearBox } from '@/components/appear-box';
import { FlexBox, FlexDirection } from '@/components/base';
import { ButtonList } from '@/components/button-list';
import { forceSaveStorage, logger, setStorageItem } from '@/utils';
import { getSBWDStore } from './store';
import { SBWDHistory } from './history';
import { SBWD_HISTORY_STORAGE_KEY } from '../constant';
import { emitSBWDAction, SBWDActionType } from './subject';

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
                    <FlexBox $gap="0.3" $direction={FlexDirection.column}>
                      <span>1. 点击指针, 其指针顺时针旋转 90 度后指向的圆圈指针依次旋转</span>
                      <span>2. 剩余步数用完, 游戏结束</span>
                    </FlexBox>
                  </AppearBox>
                ),
              });
            },
          },
          { text: '对局记录', onClick: () => setOpenHistory(true) },
          { text: '重置', onClick: () => getSBWDStore().reset() },
        ]}
      />
      <Drawer
        title="对局记录"
        onClose={() => setOpenHistory(false)}
        open={openHistory}
        width="40rem"
        styles={{ body: { padding: 'var(--page-padding)' } }}
        extra={
          <ButtonList
            buttons={[
              {
                text: '清空记录',
                async onClick() {
                  await setStorageItem(SBWD_HISTORY_STORAGE_KEY, []);
                  await forceSaveStorage();
                  emitSBWDAction({ id: 'clear-history', type: SBWDActionType.RELOAD_HISTORY });
                },
              },
            ]}
          />
        }
      >
        <SBWDHistory
          onReplay={(stepHistory) => {
            setOpenHistory(false);
            getSBWDStore().replay(stepHistory);
          }}
        />
      </Drawer>
    </>
  );
}
