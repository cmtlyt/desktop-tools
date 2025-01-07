import { useCallback, useMemo } from 'react';
import { useMatches, matchPath } from 'react-router-dom';
import styled from 'styled-components';
import { FlexAlign, FlexBox, FlexDirection, FlexJustify, FlexWrap, ShadowFlexBox } from '@/components/base';
import { ApplyStyle } from '@/types';
import { AppInfo, appList } from './constant';
import { applyStyleSheet } from '../base/util';
import { logger } from '@/utils';
import { Switch } from '../switch';
import { Link } from '../link';

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
  width: 100%;
  height: 100%;
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
    return appListHander(appList).filter((item) => !item.hide);
  }, [appListHander]);

  return (
    <FlexBox $wrap={FlexWrap.WRAP} $direction={direction} className={className}>
      {appListFinished.map((app) => (
        <AppItem
          to={app.path}
          key={app.path}
          $isActive={checkActive(app.path, app.deepMatch)}
          $style={app.wrapperStyle}
          onClick={() => logger.click('app-list-click', app)}
        >
          <AppItemContent
            $direction={FlexDirection.COLUMN}
            $alignItems={FlexAlign.CENTER}
            $justifyContent={FlexJustify.BETWEEN}
            $style={app.contentStyle}
            {...shadowOption}
          >
            <IconWrap $style={app.iconStyle} $alignItems={FlexAlign.CENTER} $justifyContent={FlexJustify.CENTER}>
              <Switch when={typeof app.icon === 'string'} fullback={app.icon}>
                {() => <span>{app.icon}</span>}
              </Switch>
            </IconWrap>
            <AppName $style={app.labelStyle}>{app.name}</AppName>
          </AppItemContent>
        </AppItem>
      ))}
    </FlexBox>
  );
}
