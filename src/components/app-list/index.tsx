import { useCallback, useMemo } from 'react';
import { Link, useMatches, matchPath } from 'react-router-dom';
import styled from 'styled-components';
import { FlexBox, FlexDirection, FlexWrap } from '@/components/base';
import { AppInfo, appList } from './constant';

interface AppItemProps {
  $isActive?: boolean;
}

const AppItem = styled(Link)<AppItemProps>`
  ${(props) => {
    const { $isActive } = props;

    if ($isActive) {
      return `color: var(--color-primary);`;
    }
  }}
`;

interface AppListProps {
  needActiveStyle?: boolean;
  direction?: FlexDirection;
  appListHander?: (appList: AppInfo[]) => AppInfo[];
}

export function AppList(props: AppListProps) {
  const { direction, needActiveStyle, appListHander = (list) => list } = props;

  const matchers = useMatches();

  const lastMatch = useMemo(() => matchers.at(-1), [matchers]);

  const checkActive = useCallback(
    (path: string) => needActiveStyle && !!matchPath(lastMatch?.pathname || '', path),
    [needActiveStyle, lastMatch]
  );

  const appListFinished = useMemo(() => {
    return appListHander(appList);
  }, [appListHander]);

  return (
    <FlexBox wrap={FlexWrap.wrap} direction={direction}>
      {appListFinished.map((app) => (
        <AppItem to={app.path} key={app.path} $isActive={checkActive(app.path)}>
          {app.name}
        </AppItem>
      ))}
    </FlexBox>
  );
}
