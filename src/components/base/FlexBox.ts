import styled from 'styled-components';

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
  flex?: number | string;
  direction?: FlexDirection;
  justifyContent?: FlexJustify;
  alignItems?: FlexAlign;
  flexWrap?: FlexWrap;
  justifyItems?: FlexJustify;
  alignContent?: FlexAlign;
  children?: React.ReactNode;
}

function generateFlexSheet(props: FlexBoxProps) {
  const { direction = FlexDirection.row, children: _, ...otherProps } = props;

  return {
    flexDirection: direction,
    ...otherProps,
  };
}

export const FlexBox = styled.section<FlexBoxProps>`
  display: flex;
  ${generateFlexSheet}
`;

interface ShadowFlexBoxProps extends FlexBoxProps {
  x?: string;
  y?: string;
  blur?: string;
  spread?: string;
  color?: string;
}

function generateBoxShadow(props: ShadowFlexBoxProps) {
  const {
    x = '0',
    y = '0',
    blur = '1rem',
    spread = '-0.4rem',
    color = 'var(--color-primary)',
  } = props;
  return `box-shadow: ${x} ${y} ${blur} ${spread} ${color}`;
}

export const ShadowFlexBox = styled(FlexBox)<ShadowFlexBoxProps>`
  ${generateBoxShadow}
`;
