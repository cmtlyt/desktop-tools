import { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { produce } from 'immer';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';
import { FlexAlign, FlexBox, FlexDirection, FlexJustify } from '@/components/base';
import { SBWDIcon } from './icon';
import { debounce } from '@cmtlyt/base';

const Wrapper = styled(FlexBox)`
  padding: var(--page-padding);
`;

const Table = styled(FlexBox)`
  width: 60vmin;
  height: 60vmin;
`;

interface CellProps {
  $speed: number;
  $rotate: number;
}

const Cell = styled(SBWDIcon)<CellProps>`
  width: 100%;
  height: 100%;
  transform: rotate(${({ $rotate }) => $rotate}deg);
  transition: transform ${({ $speed }) => $speed}ms;
`;

const Text = styled.span`
  font-size: 3rem;
`;

function getDirection(deg: number) {
  if (deg % 360 === 0) return 'top';
  if (deg % 360 === 90) return 'right';
  if (deg % 360 === 180) return 'bottom';
  return 'left';
}

function getNextPos(row: number, col: number, dir: ReturnType<typeof getDirection>) {
  if (dir === 'top') return [row - 1, col];
  if (dir === 'right') return [row, col + 1];
  if (dir === 'bottom') return [row + 1, col];
  return [row, col - 1];
}

function createUpdateFunc(
  speed: number,
  setData: React.Dispatch<React.SetStateAction<number[][]>>,
  setTotalRotate: React.Dispatch<React.SetStateAction<number>>,
) {
  const updateRotate = debounce(
    (row: number, col: number) => {
      setTotalRotate((v) => v + 90);
      setData(
        produce((draft) => {
          const currRotate = (draft[row][col] = draft[row][col] + 90);

          const dir = getDirection(currRotate);
          const [nextRow, nextCol] = getNextPos(row, col, dir);
          const nextValue = draft[nextRow]?.[nextCol];
          setTimeout(() => {
            if (nextValue === undefined) return;
            updateRotate(nextRow, nextCol);
          }, speed);
        }),
      );
    },
    10,
    true,
  );
  return (row: number, col: number) => {
    updateRotate(row, col);
  };
}

export function Component() {
  const size = [5, 5];
  const [row, col] = size;
  const [data, setData] = useState<number[][]>(Array.from({ length: row }, () => new Array(col).fill(0)));
  const speed = 500;
  const [totalRotate, setTotalRotate] = useState(0);
  const [totalStep, setTotalStep] = useState(10);

  const updateRotate = useMemo(() => createUpdateFunc(speed, setData, setTotalRotate), [speed]);

  const onClick = useCallback(
    (row: number, col: number) => {
      setTotalStep((v) => v - 1);
      updateRotate(row, col);
    },
    [updateRotate],
  );

  return (
    <AppearBox onFirstAppear={() => logger.appear('game-sbwd')}>
      <Wrapper
        $flex="1"
        $gap="5"
        $direction={FlexDirection.column}
        $alignItems={FlexAlign.center}
        $justifyContent={FlexJustify.center}
      >
        <FlexBox $gap="1">
          <Text>剩余步数: {totalStep}</Text>
          <Text>当前度数: {totalRotate}</Text>
        </FlexBox>
        <Table $direction={FlexDirection.column} $gap="1">
          {data.map((cells, rowIndex) => (
            <FlexBox $gap="1" key={rowIndex}>
              {cells.map((rotate, colIndex) => (
                <FlexBox $flex="1" key={colIndex}>
                  <Cell $rotate={rotate} $speed={speed} onClick={() => onClick(rowIndex, colIndex)} />
                </FlexBox>
              ))}
            </FlexBox>
          ))}
        </Table>
      </Wrapper>
    </AppearBox>
  );
}

export const handle = {
  title: '十步万度',
  needBackIcon: true,
};
