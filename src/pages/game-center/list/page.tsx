import styled from 'styled-components';
import { AppList } from '@/components/app-list';
import { gameList } from './constant';
import { FlexBox } from '@/components/base';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';

const GameWrapper = styled(FlexBox)`
  padding: var(--page-padding);
`;

export function Component() {
  return (
    <AppearBox onFirstAppear={() => logger.appear('game-list')}>
      <GameWrapper>
        <AppList
          appListHander={() =>
            gameList.map((item) => ({
              ...item,
              contentStyle: { width: '10rem', height: '10rem' },
              iconStyle: { fontSize: '8rem' },
              labelStyle: { fontSize: '1.8rem' },
            }))
          }
        />
      </GameWrapper>
    </AppearBox>
  );
}

export const handle = {
  title: '游戏列表',
  crumbLabel: '列表',
};
