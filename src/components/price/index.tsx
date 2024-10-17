import { memo, useState } from 'react';
import { isUndef } from '@cmtlyt/base';
import styled from 'styled-components';
import { FlexAlign, FlexBox } from '../base';
import { useFormatFontSize } from '@/hooks';
import { Show } from '../show';

interface PriceProps {
  value: string | number;
  fontSize?: string | number;
  decimalSize?: string | number;
  symbolSize?: string | number;
  color?: string;
  decimalColor?: string;
  symbolColor?: string;
  showPrefix?: boolean;
  className?: string;
}

interface FontProps {
  $fontSize: string | number;
  $color?: string;
}

const FontSpan = styled.span<FontProps>`
  ${(props) => {
    const { $color, $fontSize } = props;
    return { color: $color, fontSize: $fontSize };
  }}}
`;

export const Price = memo(function Price(props: PriceProps) {
  const {
    value,
    fontSize = 20,
    decimalSize = 16,
    symbolSize = 14,
    color,
    decimalColor,
    symbolColor,
    showPrefix = false,
    className,
  } = props;
  const [integer, decimal] = String(value).split('.');
  const [, forceUpdate] = useState<number>();

  const [_symbolSize, _fontSize, _decimalSize] = useFormatFontSize([symbolSize, fontSize, decimalSize]);

  if (isUndef(integer)) return null;

  return (
    <FlexBox
      className={className}
      $alignItems={FlexAlign.baseline}
      onClick={(e) => {
        e.stopPropagation();
        forceUpdate(Math.random());
      }}
    >
      <Show if={showPrefix}>
        <FontSpan $fontSize={_symbolSize} $color={symbolColor || color}>
          ¥
        </FontSpan>
      </Show>
      <FontSpan $fontSize={_fontSize} $color={color}>
        {integer}
      </FontSpan>
      <Show if={decimal.length > 0}>
        <FontSpan $fontSize={_decimalSize} $color={decimalColor || color}>
          {`.${decimal}`}
        </FontSpan>
      </Show>
    </FlexBox>
  );
});
