import styled from 'styled-components';
import { propsHandler } from './util';
import { formatSize } from '@/hooks';

export enum FlexDirection {
  ROW = 'row',
  COLUMN = 'column',
}

export enum FlexWrap {
  NOWRAP = 'nowrap',
  WRAP = 'wrap',
}

export enum FlexAlign {
  START = 'flex-start',
  END = 'flex-end',
  CENTER = 'center',
  BASELINE = 'baseline',
  STRETCH = 'stretch',
}

export enum FlexJustify {
  START = 'flex-start',
  END = 'flex-end',
  CENTER = 'center',
  BETWEEN = 'space-between',
  AROUND = 'space-around',
}

interface FlexBoxProps {
  $flex?: number | string;
  $direction?: FlexDirection;
  $justifyContent?: FlexJustify;
  $alignItems?: FlexAlign;
  $wrap?: FlexWrap;
  $justifyItems?: FlexJustify;
  $alignContent?: FlexAlign;
  $gap?: string | number;
  children?: React.ReactNode;
}

const needProps = ['$flex', '$justifyContent', '$alignItems', '$justifyItems', '$alignContent'];

function generateFlexSheet(props: FlexBoxProps) {
  const { $direction: direction, $wrap: wrap, $gap = 0, ...otherProps } = props;

  const gap = formatSize($gap);

  return {
    flexDirection: direction,
    flexWrap: wrap,
    gap,
    ...propsHandler(otherProps, [], needProps),
  };
}

export const FlexBox = styled.section<FlexBoxProps>`
  display: flex;
  ${generateFlexSheet}
`;

interface ShadowFlexBoxProps extends FlexBoxProps {
  $x?: string;
  $y?: string;
  $blur?: string;
  $spread?: string;
  $color?: string;
}

function generateBoxShadow(props: ShadowFlexBoxProps) {
  const {
    $x: x = '0',
    $y: y = '0',
    $blur: blur = '1rem',
    $spread: spread = '-0.4rem',
    $color: color = 'var(--color-shadow)',
  } = props;
  return `box-shadow: ${x} ${y} ${blur} ${spread} ${color}`;
}

export const ShadowFlexBox = styled(FlexBox)<ShadowFlexBoxProps>`
  background-color: white;
  ${generateBoxShadow}
`;
