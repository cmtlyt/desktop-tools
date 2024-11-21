import { Popover } from 'antd';
import { useMemo, useRef } from 'react';
import styled from 'styled-components';
import { To } from 'react-router-dom';
import { CgMoreR } from 'react-icons/cg';
import { isUndef, TObject } from '@cmtlyt/base';
import { Button, ButtonProps, ButtonTheme, FlexBox, FlexDirection } from '../base';
import { logger, isPhone } from '@/utils';
import { Switch } from '../switch';
import { Link } from '../link';

interface ButtonItemOtherProps {
  text?: React.ReactNode;
  to?: To;
  action?: string;
  logInfo?: TObject<unknown>;
  noLog?: boolean;
  checkBtn?: {
    value: boolean;
    onChange: (value: boolean) => void;
  };
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

const LabelHideInput = styled.label`
  & > input {
    margin: 0;
    padding: 0;
    width: 0;
    height: 0;
    visibility: hidden;
    overflow: hidden;
  }
`;

const ButtonItemComp = (props: ButtonItem) => {
  const { action, text, to, logInfo, noLog, onClick, checkBtn, ...buttonProps } = props;
  const clickMore = useRef(false);

  const loggerInfo = { text, buttonProps, to, checked: checkBtn?.value, ...logInfo };

  const logAction = useMemo(() => {
    if (noLog) return;
    if (action) return action;
    if (to) return 'button-list-link-click';
    if (checkBtn) return 'button-list-checkbtn-click';
    return 'button-list-click';
  }, [action, to, noLog, checkBtn]);

  const button = (customProps?: ButtonProps) => (
    <Button
      {...buttonProps}
      {...customProps}
      onClick={(e) => {
        if (clickMore.current) {
          clickMore.current = false;
          if (noLog) return;
          return logger.click('more-button-click');
        }
        if (logAction) logger.click(logAction, loggerInfo);
        checkBtn?.onChange(!checkBtn.value);
        onClick?.(e);
      }}
    >
      {text}
    </Button>
  );

  if (checkBtn) {
    const { value } = checkBtn;
    return (
      <LabelHideInput>
        <input type="checkbox" checked={value} onChange={() => {}} />
        {button({ $presetTheme: ButtonTheme[value ? 'PRIMARY' : 'INFO'] })}
      </LabelHideInput>
    );
  }

  return (
    <Switch when={!isUndef(to)} fullback={button()}>
      {() => <Link to={to!} children={button()} />}
    </Switch>
  );
};

export function ButtonList(props: ButtonListProps) {
  const { buttons, wrapperProps, $gap = 1, className } = props;

  const filteredButtons = useMemo(() => {
    return buttons.filter((item) => !item.hidden);
  }, [buttons]);

  const content = useMemo(
    () => (
      <ButtonListWrapper
        {...wrapperProps}
        $gap={$gap}
        $direction={FlexDirection[isPhone() ? 'COLUMN' : 'ROW']}
        className={className}
      >
        {filteredButtons.map((item, idx) => (
          <ButtonItemComp {...item} key={idx} />
        ))}
      </ButtonListWrapper>
    ),
    [filteredButtons, $gap, wrapperProps, className],
  );

  return (
    <Switch when={isPhone() && buttons.length > 1} fullback={content}>
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
