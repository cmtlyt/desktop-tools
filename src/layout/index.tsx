import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './header';
import { Footer } from './footer';
import { Aside } from './aside';
import { FlexBox, FlexDirection } from '@/components/base';
import { SyncPageInfo } from '@/components/sync-page-info';
import { Message } from '@/components/message';

const PageWrapper = styled(FlexBox)`
  position: relative;
  overflow-y: auto;
`;

export function Component() {
  return (
    <>
      <SyncPageInfo />
      <Message />
      <FlexBox $flex="1" style={{ height: '100%' }}>
        <Aside />
        <FlexBox $flex="1" $direction={FlexDirection.column} style={{ overflow: 'hidden' }}>
          <Header />
          <PageWrapper $flex="1" $direction={FlexDirection.column}>
            <Outlet />
          </PageWrapper>
          <Footer />
        </FlexBox>
      </FlexBox>
    </>
  );
}
