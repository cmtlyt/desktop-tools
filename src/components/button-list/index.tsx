import styled from 'styled-components';
import { Link, To } from 'react-router-dom';
import { isUndef } from '@cmtlyt/base';
import { Button, FlexBox } from '../base';
import { logger } from '@/utils';
import { Switch } from '../switch';

interface ButtonItemOtherProps {
  text?: React.ReactNode;
  to?: To;
  action?: string;
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
      {buttons.map(({ action, text, to, onClick, ...buttonProps }, idx) => {
        const loggerInfo = { text, buttonProps };

        const button = (
          <Button
            {...buttonProps}
            onClick={(e) => {
              if (!to) logger.click({ action: action || 'button-list-click', ...loggerInfo });
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
                logger.click({ action: action || 'button-list-link-click', ...loggerInfo });
              }}
            />
          </Switch>
        );
      })}
    </ButtonListWrapper>
  );
}
