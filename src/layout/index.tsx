import { FlexBox, FlexDirection } from '@/components/base';
import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';
import { Aside } from './aside';

export function Component() {
  return (
    <FlexBox direction={FlexDirection.column} flex="1">
      <Header />
      <FlexBox flex="1">
        <Aside />
        <FlexBox flex="1" direction={FlexDirection.column}>
          <Outlet />
        </FlexBox>
      </FlexBox>
      <Footer />
    </FlexBox>
  );
}
