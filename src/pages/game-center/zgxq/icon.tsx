import { memo } from 'react';
import styled from 'styled-components';
import { ChessType } from './type';

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  type: ChessType;
  color: 'red' | 'black';
  className?: string;
}

function getChessLabel(_type: ChessType, color: IconProps['color']) {
  switch (_type) {
    case ChessType.Bing:
      return color === 'red' ? '兵' : '卒';
    case ChessType.Pao:
      return color === 'red' ? '炮' : '砲';
    case ChessType.Che:
      return color === 'red' ? '车' : '車';
    case ChessType.Ma:
      return color === 'red' ? '马' : '馬';
    case ChessType.Xiang:
      return color === 'red' ? '相' : '象';
    case ChessType.Shi:
      return color === 'red' ? '仕' : '士';
    case ChessType.Jiang:
      return color === 'red' ? '帅' : '將';
    default:
      _type satisfies never;
  }
}

interface WrapperProps {
  $color: IconProps['color'];
}

const IconWrapper = styled.section<WrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${(props) => props.$color};
  font-size: 50%;
  font-weight: bold;
  line-height: 1;
  border-radius: 50%;
  aspect-ratio: 1 / 1;

  &::before,
  &::after {
    position: absolute;
    content: '';
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 0.2rem currentColor;
  }

  &::after {
    inset: 10%;
  }
`;

export const Icon = memo(function Icon(props: IconProps) {
  const { type, color, className, ...rest } = props;
  return (
    <IconWrapper $color={color} className={className} {...rest}>
      {getChessLabel(type, color)}
    </IconWrapper>
  );
});
