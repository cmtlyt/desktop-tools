import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppearBox } from '@/components/appear-box';
import { Button, ButtonTheme, FlexAlign, FlexBox, FlexDirection, FlexJustify, ShadowFlexBox } from '@/components/base';
import { getStorageItem, logger, reverse } from '@/utils';
import { SBWD_HISTORY_STORAGE_KEY } from '../constant';
import { DateView } from '@/components/date-view';
import { GameInfo } from './type';
import { Switch } from '@/components/switch';
import { SBWDActionType, useSubscribeSBWDAction } from './subject';
import { Empty } from '@/components/empty';

interface SBWDHistoryProps {
  onReplay: (stepHistory: string[]) => void;
}

interface HistoryInfo extends GameInfo {
  time: number;
}

const HistoryItem = styled(ShadowFlexBox)`
  padding: 1rem;
`;

const HistoryInfoWrapper = styled(FlexBox)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export function SBWDHistory(props: SBWDHistoryProps) {
  const { onReplay } = props;
  const [history, setHistory] = useState<HistoryInfo[]>([]);

  const loadHistory = async () => {
    const history: HistoryInfo[] = await getStorageItem(SBWD_HISTORY_STORAGE_KEY);
    setHistory(reverse(history));
  };

  useEffect(() => {
    loadHistory();
  }, []);

  useSubscribeSBWDAction(() => {
    loadHistory();
  }, SBWDActionType.RELOAD_HISTORY);

  const onClick = (stepHistory: string[]) => {
    logger.click('game-sbwd-history-replay', { stepHistory });
    onReplay(stepHistory);
  };

  return (
    <AppearBox onFirstAppear={() => logger.appear('game-sbwd-history')}>
      <FlexBox $direction={FlexDirection.column} $gap="1">
        <Switch if={history.length > 0} fullback={<Empty />}>
          {history?.map((info) => (
            <HistoryItem key={info.gameId} $direction={FlexDirection.column} $gap="0.5">
              <HistoryInfoWrapper $alignItems={FlexAlign.center} $justifyContent={FlexJustify.between}>
                <span>分数: {info.totalRotate}</span>
                <DateView format="yyyy-MM-DD hh:mm:ss">{info.time}</DateView>
              </HistoryInfoWrapper>
              <FlexBox $justifyContent={FlexJustify.end}>
                <Button $presetTheme={ButtonTheme.PRIMARY} onClick={() => onClick(info.stepHistory)}>
                  重放
                </Button>
              </FlexBox>
            </HistoryItem>
          ))}
        </Switch>
      </FlexBox>
    </AppearBox>
  );
}
