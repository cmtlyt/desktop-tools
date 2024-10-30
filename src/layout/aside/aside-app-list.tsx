import { memo } from 'react';
import styled from 'styled-components';
import { TbHomeFilled } from 'react-icons/tb';
import { AppList } from '@/components/app-list';
import { FlexDirection } from '@/components/base';

const AppListBox = styled(AppList)`
  margin: 0 0.5rem;
`;

export const AsideAppList = memo(() => {
  return (
    <AppListBox
      needActiveStyle
      direction={FlexDirection.COLUMN}
      shadowOption={{ $blur: '0.8rem' }}
      appListHander={(list) => [{ name: '首页', path: '/', icon: <TbHomeFilled /> }, ...list]}
    />
  );
});
