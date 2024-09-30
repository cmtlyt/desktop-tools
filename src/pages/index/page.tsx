import { FlexBox, FlexDirection } from '@/components/base';
import { IndexAppList } from './index-app-list';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';

export function Component() {
  return (
    <AppearBox onFirstAppear={() => logger.appear('index')}>
      <FlexBox $direction={FlexDirection.column}>
        <span>Hello World</span>
        <IndexAppList />
      </FlexBox>
    </AppearBox>
  );
}

export const handle = {
  title: '首页',
};
