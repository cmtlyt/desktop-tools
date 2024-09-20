import styled from 'styled-components';
import { propsHandler } from './util';

export enum FlexDirection {
  row = 'row',
  column = 'column',
}

export enum FlexWrap {
  nowrap = 'nowrap',
  wrap = 'wrap',
}

export enum FlexAlign {
  start = 'flex-start',
  end = 'flex-end',
  center = 'center',
  baseline = 'baseline',
  stretch = 'stretch',
}

export enum FlexJustify {
  start = 'flex-start',
  end = 'flex-end',
  center = 'center',
  between = 'space-between',
  around = 'space-around',
}

interface FlexBoxProps {
  $flex?: number | string;
  $direction?: FlexDirection;
  $justifyContent?: FlexJustify;
  $alignItems?: FlexAlign;
  $wrap?: FlexWrap;
  $justifyItems?: FlexJustify;
  $alignContent?: FlexAlign;
  children?: React.ReactNode;
}

const needProps = ['$flex', '$justifyContent', '$alignItems', '$justifyItems', '$alignContent'];

function generateFlexSheet(props: FlexBoxProps) {
  const { $direction: direction, $wrap: wrap, ...otherProps } = props;

  return {
    flexDirection: direction,
    flexWrap: wrap,
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
