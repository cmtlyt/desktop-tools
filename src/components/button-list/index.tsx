import { Popover } from 'antd';
import { useMemo, useRef } from 'react';
import styled from 'styled-components';
import { To } from 'react-router-dom';
import { CgMoreR } from 'react-icons/cg';
import { isUndef, TObject } from '@cmtlyt/base';
import { Button, FlexBox, FlexDirection } from '../base';
import { logger, isPhone } from '@/utils';
import { Switch } from '../switch';
import { Link } from '../link';

interface ButtonItemOtherProps {
  text?: React.ReactNode;
  to?: To;
  action?: string;
  logInfo?: TObject<unknown>;
}

type ButtonItem = Parameters<typeof Button>[0] & ButtonItemOtherProps;

interface ButtonListProps extends ButtonListWrapperProps {
  wrapperProps?: Parameters<typeof ButtonListWrapper>[0];
  buttons: ButtonItem[];
  className?: string;
}

interface ButtonListWrapperProps {
  $gap?: number | string;
}

const ButtonListWrapper = styled(FlexBox)<ButtonListWrapperProps>`
  gap: ${(props) => {
    const { $gap } = props;
    // 如果是纯数字字符串或数字则拼接单位
    if (typeof $gap === 'string') {
      const gapNumber = parseFloat($gap);
      if (!isNaN(gapNumber) && String(gapNumber) === $gap) return `${$gap}rem`;
      return $gap;
    }
    return `${$gap}rem`;
  }};
`;

const MoreIcon = styled(CgMoreR)`
  height: 100%;
`;

const ButtonItemComp = (props: ButtonItem) => {
  const { action, text, to, logInfo, onClick, ...buttonProps } = props;
  const clickMore = useRef(false);

  const loggerInfo = { text, buttonProps, to, ...logInfo };

  const button = (
    <Button
      {...buttonProps}
      onClick={(e) => {
        if (clickMore.current) {
          clickMore.current = false;
          return logger.click('more-button-click');
        }
        if (!to) logger.click(action || 'button-list-click', loggerInfo);
        onClick?.(e);
      }}
    >
      {text}
    </Button>
  );

  return (
    <Switch if={!isUndef(to)} fullback={button}>
      {() => (
        <Link
          to={to!}
          children={button}
          onClick={(e) => {
            e.stopPropagation();
            logger.click(action || 'button-list-link-click', loggerInfo);
          }}
        />
      )}
    </Switch>
  );
};

export function ButtonList(props: ButtonListProps) {
  const { buttons, wrapperProps, $gap = 1, className } = props;

  const content = useMemo(
    () => (
      <ButtonListWrapper
        {...wrapperProps}
        $gap={$gap}
        $direction={FlexDirection[isPhone() ? 'COLUMN' : 'ROW']}
        className={className}
      >
        {buttons.map((item, idx) => (
          <ButtonItemComp {...item} key={idx} />
        ))}
      </ButtonListWrapper>
    ),
    [buttons, $gap, wrapperProps, className],
  );

  return (
    <Switch if={isPhone() && buttons.length > 1} fullback={content}>
      {() => (
        <Popover content={content} trigger="click">
          <Button>
            <MoreIcon />
          </Button>
        </Popover>
      )}
    </Switch>
  );
}
