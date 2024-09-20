import { useCallback, useMemo } from 'react';
import { Link, useMatches, matchPath } from 'react-router-dom';
import styled from 'styled-components';
import { FlexAlign, FlexBox, FlexDirection, FlexJustify, FlexWrap, ShadowFlexBox } from '@/components/base';
import { ApplyStyle } from '@/types';
import { AppInfo, appList } from './constant';
import { applyStyleSheet } from '../base/util';

interface AppItemProps extends ApplyStyle {
  $isActive?: boolean;
}

const AppItem = styled(Link)<AppItemProps>`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  ${applyStyleSheet('$style')}

  ${(props) => {
    const { $isActive } = props;

    if ($isActive) {
      return `color: var(--color-active);`;
    }
  }}
`;

const AppItemContent = styled(ShadowFlexBox)<ApplyStyle>`
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: var(--radius-button);

  ${applyStyleSheet('$style')}
`;

const IconWrap = styled(FlexBox)<ApplyStyle>`
  font-size: 2.4rem;

  ${applyStyleSheet('$style')}
`;

const AppName = styled.span<ApplyStyle>`
  font-size: 1.2rem;
  line-height: 1;

  ${applyStyleSheet.bind(null, '$style')}
`;

interface AppListProps {
  needActiveStyle?: boolean;
  direction?: FlexDirection;
  shadowOption?: Parameters<typeof ShadowFlexBox>[0];
  className?: string;
  appListHander?: (appList: AppInfo[]) => AppInfo[];
}

export function AppList(props: AppListProps) {
  const { direction, needActiveStyle, shadowOption, className, appListHander = (list) => list } = props;

  const matchers = useMatches();

  const lastMatch = useMemo(() => matchers.at(-1), [matchers]);

  const checkActive = useCallback(
    (path: string, deepMatch = false) => {
      if (deepMatch) return needActiveStyle && matchers.some((match) => !!matchPath(match?.pathname || '', path));
      return needActiveStyle && !!matchPath(lastMatch?.pathname || '', path);
    },
    [needActiveStyle, lastMatch, matchers],
  );

  const appListFinished = useMemo(() => {
    return appListHander(appList);
  }, [appListHander]);

  return (
    <FlexBox $wrap={FlexWrap.wrap} $direction={direction} className={className}>
      {appListFinished.map((app) => (
        <AppItem
          to={app.path}
          key={app.path}
          $isActive={checkActive(app.path, app.deepMatch)}
          $style={app.wrapperStyle}
        >
          <AppItemContent
            $direction={FlexDirection.column}
            $alignItems={FlexAlign.center}
            $justifyContent={FlexJustify.between}
            $style={app.contentStyle}
            {...shadowOption}
          >
            <IconWrap $style={app.iconStyle}>
              {typeof app.icon === 'string' ? <span>{app.icon}</span> : app.icon}
            </IconWrap>
            <AppName $style={app.labelStyle}>{app.name}</AppName>
          </AppItemContent>
        </AppItem>
      ))}
    </FlexBox>
  );
}
