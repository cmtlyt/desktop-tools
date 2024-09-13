import { FlexBox, FlexDirection } from '@/components/base';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Component() {
  return (
    <FlexBox direction={FlexDirection.column} flex="1">
      <Header />
      <FlexBox flex="1">
        <aside>aside</aside>
        <FlexBox flex="1" direction={FlexDirection.column}>
          <Outlet />
        </FlexBox>
      </FlexBox>
      <Footer />
    </FlexBox>
  );
}
