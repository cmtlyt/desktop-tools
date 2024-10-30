import styled from 'styled-components';
import { FlexAlign, FlexBox, FlexDirection } from '@/components/base';
import { number2VO } from './util';
import { useELSFKStoreSlice } from './store';
import { ElementInfo, Position } from './type';
import { memo } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { MdOutlineRotate90DegreesCcw } from 'react-icons/md';

interface BlockProps {
  $active: boolean;
}

export const Container = styled(FlexBox)`
  width: 100%;
  height: 100%;
  max-width: 35vh;
  max-height: 70vh;
  aspect-ratio: 1/2;
  color: var(--color-primary);
`;

export const NextContainer = styled(Container)`
  width: 15vmin;
  height: 15vmin;
`;

const Block = styled.div<BlockProps>`
  flex: 1;
  color: ${(props) => (props.$active ? 'inherit' : '#0002')};
  box-shadow:
    inset 0 0 0 0.2rem currentColor,
    inset 0 0 0 0.8rem #fff ${(props) => (props.$active ? ', inset 0 0 0 10rem currentColor' : '')};
`;

export const Text = styled.span`
  font-size: 2rem;
`;

interface RowWrapperProps {
  $isClear?: boolean;
}

export const RowWrapper = styled(FlexBox)<RowWrapperProps>`
  ${({ $isClear }) => ($isClear ? 'animation: clear-row 500ms ease-in-out infinite alternate;' : '')}

  @keyframes clear-row {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

interface RowProps {
  col?: number;
  rowData: number;
  $isClear?: boolean;
}

export function Row(props: RowProps) {
  const { rowData, $isClear, col: userCol } = props;
  const { col } = useELSFKStoreSlice('col');

  return (
    <RowWrapper $flex="1" $gap="0.5" $isClear={$isClear}>
      {number2VO(rowData, userCol || col).map((cell, cellIdx) => (
        <Block key={cellIdx} $active={String(cell) === '1'} />
      ))}
    </RowWrapper>
  );
}

interface NextElementProps {
  elementInfo: ElementInfo;
}

export const NextElement = memo(function (props: NextElementProps) {
  const { elementInfo } = props;
  const { elementData = [], size } = elementInfo;

  return (
    <NextContainer $gap="0.5" $direction={FlexDirection.COLUMN}>
      {elementData.map((rowData, rowIdx) => (
        <Row key={rowIdx} rowData={rowData} col={size} />
      ))}
    </NextContainer>
  );
});

const IconWrapper = styled(FlexBox)`
  height: 70%;
  aspect-ratio: 1/1;

  & > svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    height: unset;
    width: 40%;
  }
`;

interface ControllerProps {
  move: (pos: Position) => void;
  rotate: () => void;
}

const ControllerContainer = styled(FlexBox)`
  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
    margin-bottom: 40%;
  }
`;

export function Controller(props: ControllerProps) {
  const { move, rotate } = props;
  return (
    <ControllerContainer $gap="1" $alignItems={FlexAlign.CENTER}>
      <IconWrapper onClick={() => move('left')}>
        <FiArrowLeftCircle />
      </IconWrapper>
      <IconWrapper onClick={() => move('right')}>
        <FiArrowRightCircle />
      </IconWrapper>
      <IconWrapper onClick={() => rotate()}>
        <MdOutlineRotate90DegreesCcw />
      </IconWrapper>
    </ControllerContainer>
  );
}

export const ToolsWrapper = styled(FlexBox)`
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const GameWrapper = styled(FlexBox)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
