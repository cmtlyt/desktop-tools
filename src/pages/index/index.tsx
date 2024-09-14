import { FlexBox, FlexDirection } from '@/components/base';
import { IndexAppList } from './index-app-list';

export function Component() {
  return (
    <FlexBox $direction={FlexDirection.column}>
      <span>Hello World</span>
      <IndexAppList />
    </FlexBox>
  );
}

export const handle = {
  title: '首页',
};
