import { FlexBox, FlexDirection } from '@/components/base';
import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';
import { Aside } from './aside';

export function Component() {
  return (
    <FlexBox $flex="1">
      <Aside />
      <FlexBox $flex="1" $direction={FlexDirection.column} style={{ overflow: 'hidden' }}>
        <Header />
        <FlexBox $flex="1" $direction={FlexDirection.column} style={{ overflowY: 'auto' }}>
          <Outlet />
        </FlexBox>
        <Footer />
      </FlexBox>
    </FlexBox>
  );
}
