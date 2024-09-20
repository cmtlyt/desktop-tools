import styled from 'styled-components';
import { Link, To } from 'react-router-dom';
import { Button, FlexBox } from '../base';

interface ButtonItemOtherProps {
  text?: React.ReactNode;
  to?: To;
}

type ButtonItem = Parameters<typeof Button>[0] & ButtonItemOtherProps;

interface ButtonListProps extends ButtonListWrapperProps {
  wrapperProps?: Parameters<typeof ButtonListWrapper>[0];
  buttons: ButtonItem[];
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
  const { buttons, wrapperProps, $gap = 1 } = props;

  return (
    <ButtonListWrapper {...wrapperProps} $gap={$gap}>
      {buttons.map(({ text, to, ...buttonProps }, idx) => {
        const button = (
          <Button key={idx} {...buttonProps}>
            {text}
          </Button>
        );

        if (to) {
          return <Link key={idx} to={to} children={button} />;
        }
        return button;
      })}
    </ButtonListWrapper>
  );
}
