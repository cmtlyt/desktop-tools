import { TbHomeFilled } from 'react-icons/tb';
import styled from 'styled-components';
import { AppList } from '@/components/app-list';
import { FlexDirection, ShadowFlexBox } from '@/components/base';

const AsideContent = styled(ShadowFlexBox)`
  height: 100%;
`;

const AppListBox = styled(AppList)`
  margin: 0 0.5rem;
`;

const AsideWrapper = styled.aside`
  position: relative;
`;

export function Aside() {
  return (
    <AsideWrapper>
      <AsideContent $direction={FlexDirection.column}>
        <AppListBox
          needActiveStyle
          direction={FlexDirection.column}
          shadowOption={{ $blur: '0.8rem' }}
          appListHander={(list) => [{ name: '首页', path: '/', icon: <TbHomeFilled /> }, ...list]}
        />
      </AsideContent>
    </AsideWrapper>
  );
}
