import styled from 'styled-components';
import { FlexBox, FlexDirection } from '@/components/base';
import { number2VO } from './util';
import { GameStatus, useELSFKStoreSlice } from './store';
import { ElementInfo } from './type';
import { memo } from 'react';
import { ButtonList } from '@/components/button-list';
import { ELSFKActionType, emitELSFKAction } from './subject';

interface BlockProps {
  $active: boolean;
}

export const Container = styled(FlexBox)`
  width: 40vh;
  height: 80vh;
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
    <NextContainer $gap="0.5" $direction={FlexDirection.column}>
      {elementData.map((rowData, rowIdx) => (
        <Row key={rowIdx} rowData={rowData} col={size} />
      ))}
    </NextContainer>
  );
});

export function RightArea() {
  const { gameStatus } = useELSFKStoreSlice('gameStatus');

  const isRunning = gameStatus === GameStatus.running;

  return (
    <ButtonList
      buttons={[
        {
          text: isRunning ? '暂停' : '开始',
          onClick() {
            // getELSFKStore().setGameStatus(gameStatus === GameStatus.running ? GameStatus.pause : GameStatus.running);
            emitELSFKAction({
              id: `elsfk-${isRunning ? 'pause' : 'start'}`,
              type: isRunning ? ELSFKActionType.PAUSE : ELSFKActionType.START,
            });
          },
        },
        {
          text: '重置',
          onClick() {
            emitELSFKAction({ id: 'elsfk-reload', type: ELSFKActionType.RELOAD });
          },
        },
      ]}
    />
  );
}
