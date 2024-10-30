import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppearBox } from '@/components/appear-box';
import { FlexBox, FlexDirection, ShadowFlexBox } from '@/components/base';
import { getStorageItem, logger, reverse } from '@/utils';
import { Switch } from '@/components/switch';
import { Empty } from '@/components/empty';
import { HistoryActionType, useSubscribeHistoryAction } from './subject';

interface HistoryProps {
  storeKey: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: (historyItem: any) => React.ReactNode;
}

export const HistoryItem = styled(ShadowFlexBox)`
  padding: 1rem;
`;

export const HistoryInfoWrapper = styled(FlexBox)`
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export function History(props: HistoryProps) {
  const { storeKey, children } = props;
  const [history, setHistory] = useState<unknown[]>([]);

  const loadHistory = async () => {
    const history: unknown[] = await getStorageItem(storeKey);
    setHistory(reverse(history));
  };

  useEffect(() => {
    loadHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useSubscribeHistoryAction(() => {
    loadHistory();
  }, HistoryActionType.RELOAD_HISTORY);

  return (
    <AppearBox onFirstAppear={() => logger.appear('game-sbwd-history')}>
      <FlexBox $direction={FlexDirection.COLUMN} $gap="1">
        <Switch if={history.length > 0} fullback={<Empty />}>
          {history?.map((info) => children(info))}
        </Switch>
      </FlexBox>
    </AppearBox>
  );
}
