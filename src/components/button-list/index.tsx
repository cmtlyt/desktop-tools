import styled from 'styled-components';
import { To } from 'react-router-dom';
import { isUndef, TObject } from '@cmtlyt/base';
import { Button, FlexBox } from '../base';
import { logger } from '@/utils';
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

export function ButtonList(props: ButtonListProps) {
  const { buttons, wrapperProps, $gap = 1, className } = props;

  return (
    <ButtonListWrapper {...wrapperProps} $gap={$gap} className={className}>
      {buttons.map(({ action, text, to, logInfo, onClick, ...buttonProps }, idx) => {
        const loggerInfo = { text, buttonProps, to, ...logInfo };

        const button = (
          <Button
            {...buttonProps}
            onClick={(e) => {
              if (!to) logger.click(action || 'button-list-click', loggerInfo);
              onClick?.(e);
            }}
          >
            {text}
          </Button>
        );

        return (
          <Switch if={!isUndef(to)} fullback={button} key={idx}>
            <Link
              to={to!}
              children={button}
              onClick={(e) => {
                e.stopPropagation();
                logger.click(action || 'button-list-link-click', loggerInfo);
              }}
            />
          </Switch>
        );
      })}
    </ButtonListWrapper>
  );
}
