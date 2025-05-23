import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Watermark } from 'antd';
import { Header } from './header';
import { Footer } from './footer';
import { Aside } from './aside';
import { FlexBox, FlexDirection } from '@/components/base';
import { SyncPageInfo } from '@/components/sync-page-info';
import { Message } from '@/components/message';
import { LayoutLoading } from './loading';

const PageWrapper = styled(FlexBox)`
  position: relative;
  z-index: 1;
  overflow-y: auto;
`;

const WatermarkStyle = styled(Watermark)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export function Component() {
  return (
    <WatermarkStyle content={['cmtlyt', 'desktop-tools']} font={{ color: 'rgba(0,0,0,0.05)' }}>
      <LayoutLoading />
      <SyncPageInfo />
      <Message />
      <FlexBox $flex="1" style={{ height: '100%' }}>
        <Aside />
        <FlexBox $flex="1" $direction={FlexDirection.COLUMN} style={{ overflow: 'hidden' }}>
          <Header />
          <PageWrapper $flex="1" $direction={FlexDirection.COLUMN}>
            <Outlet />
          </PageWrapper>
          <Footer />
        </FlexBox>
      </FlexBox>
    </WatermarkStyle>
  );
}
