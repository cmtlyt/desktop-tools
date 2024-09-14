import { useCallback, useMemo } from 'react';
import { Link, useMatches, matchPath } from 'react-router-dom';
import styled from 'styled-components';
import { FlexAlign, FlexBox, FlexDirection, FlexJustify, FlexWrap, ShadowFlexBox } from '@/components/base';
import { AppInfo, appList } from './constant';

interface AppItemProps {
  $isActive?: boolean;
  $styleText?: string;
}

const AppItem = styled(Link)<AppItemProps>`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  ${(props) => {
    const { $isActive } = props;

    if ($isActive) {
      return `color: var(--color-primary);`;
    }
  }}
`;

const AppItemContent = styled(ShadowFlexBox)`
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 1.2rem;
`;

const IconWrap = styled(FlexBox)`
  width: 2.4rem;
  height: 2.4rem;
  font-size: 2.4rem;
`;

const AppName = styled.span`
  font-size: 1.2rem;
  line-height: 1;
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
    [needActiveStyle, lastMatch],
  );

  const appListFinished = useMemo(() => {
    return appListHander(appList);
  }, [appListHander]);

  return (
    <FlexBox $wrap={FlexWrap.wrap} $direction={direction}>
      {appListFinished.map((app) => (
        <AppItem
          to={app.path}
          key={app.path}
          $isActive={checkActive(app.path)}
          style={app.style}
          $styleText={app.styleText}
        >
          <AppItemContent
            $direction={FlexDirection.column}
            $alignItems={FlexAlign.center}
            $justifyContent={FlexJustify.between}
          >
            <IconWrap>{typeof app.icon === 'string' ? <span>{app.icon}</span> : app.icon}</IconWrap>
            <AppName>{app.name}</AppName>
          </AppItemContent>
        </AppItem>
      ))}
    </FlexBox>
  );
}
