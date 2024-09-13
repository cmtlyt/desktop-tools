import { FlexBox, FlexDirection } from '@/components/base';
import { Outlet } from 'react-router-dom';

export function Component() {
  return (
    <FlexBox direction={FlexDirection.column} flex="1">
      <header>header</header>
      <FlexBox flex="1">
        <aside>aside</aside>
        <FlexBox flex="1" direction={FlexDirection.column}>
          <Outlet />
        </FlexBox>
      </FlexBox>
      <footer>footer</footer>
    </FlexBox>
  );
}
