import { AppList } from '@/components/app-list';
import { FlexBox } from '@/components/base';

export function Component() {
  return (
    <FlexBox>
      <span>Hello World</span>
      <AppList />
    </FlexBox>
  );
}

export const handle = {
  title: '首页',
};
