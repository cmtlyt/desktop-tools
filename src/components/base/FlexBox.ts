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
