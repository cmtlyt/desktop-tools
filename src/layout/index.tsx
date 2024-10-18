import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';
import { Aside } from './aside';
import { FlexBox, FlexDirection } from '@/components/base';
import { SyncPageInfo } from '@/components/sync-page-info';
import { Message } from '@/components/message';

export function Component() {
  return (
    <>
      <SyncPageInfo />
      <Message />
      <FlexBox $flex="1" style={{ height: '100%' }}>
        <Aside />
        <FlexBox $flex="1" $direction={FlexDirection.column} style={{ overflow: 'hidden' }}>
          <Header />
          <FlexBox $flex="1" $direction={FlexDirection.column} style={{ overflowY: 'auto' }}>
            <Outlet />
          </FlexBox>
          <Footer />
        </FlexBox>
      </FlexBox>
    </>
  );
}
