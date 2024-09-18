import styled from 'styled-components';
import { FlexDirection, ShadowFlexBox } from '@/components/base';
import { AsideAppList } from './aside-app-list';

const AsideContent = styled(ShadowFlexBox)`
  height: 100%;
`;

const AsideWrapper = styled.aside`
  position: relative;
`;

export function Aside() {
  return (
    <AsideWrapper>
      <AsideContent $direction={FlexDirection.column}>
        <AsideAppList />
      </AsideContent>
    </AsideWrapper>
  );
}
