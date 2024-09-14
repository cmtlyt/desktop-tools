import { TbHomeFilled } from 'react-icons/tb';
import styled from 'styled-components';
import { AppList } from '@/components/app-list';
import { FlexDirection, ShadowFlexBox } from '@/components/base';

const AsideContent = styled(ShadowFlexBox)`
  padding: 0 0.5rem;
  height: 100%;
`;

const AppListBox = styled(AppList)`
  margin: 0 0.5rem;
`;

export function Aside() {
  return (
    <aside>
      <AsideContent $direction={FlexDirection.column}>
        <AppListBox
          needActiveStyle
          direction={FlexDirection.column}
          appListHander={(list) => [{ name: '首页', path: '/', icon: <TbHomeFilled /> }, ...list]}
        />
      </AsideContent>
    </aside>
  );
}
