import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { produce } from 'immer';
import { debounce } from '@cmtlyt/base';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';
import { FlexAlign, FlexBox, FlexDirection, FlexJustify } from '@/components/base';
import { SBWDIcon } from './icon';
import { getLayoutStore } from '@/store';

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

const Cell = memo(styled(SBWDIcon)<CellProps>`
  width: 100%;
  height: 100%;
  transform: rotate(${({ $rotate }) => $rotate}deg);
  transition: transform ${({ $speed }) => $speed}ms;
`);

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

export function Component() {
  const size = [5, 5];
  const [row, col] = size;
  const [data, setData] = useState<number[][]>(Array.from({ length: row }, () => new Array(col).fill(0)));
  const speed = 500;
  const [totalRotate, setTotalRotate] = useState(0);
  const [totalStep, setTotalStep] = useState(10);
  const [isRunner, setIsRunner] = useState(false);

  const updateRotate = useMemo(() => {
    const updateRotateDebounce = debounce(
      (row: number, col: number) => {
        setTotalRotate((v) => v + 90);
        setData(
          produce((draft) => {
            const currRotate = (draft[row][col] = draft[row][col] + 90);

            const dir = getDirection(currRotate);
            const [nextRow, nextCol] = getNextPos(row, col, dir);
            const nextValue = draft[nextRow]?.[nextCol];
            setTimeout(() => {
              if (nextValue === undefined) return setIsRunner(false);
              updateRotateDebounce(nextRow, nextCol);
            }, speed);
          }),
        );
      },
      10,
      true,
    );
    return updateRotateDebounce;
  }, [speed]);

  const onClick = (row: number, col: number) => {
    if (isRunner) return;
    setIsRunner(true);
    updateRotate(row, col);
    setTotalStep((v) => v - 1);
  };

  const resetFunc = useCallback(() => {
    setData(Array.from({ length: row }, () => new Array(col).fill(0)));
    setTotalStep(10);
    setTotalRotate(0);
  }, [row, col]);

  useEffect(() => {
    if (!isRunner && totalStep <= 0) {
      logger.event('game-sbwd-over', { totalRotate });
      logger.expose();
      getLayoutStore().showMessage({ content: `游戏结束, 当前分数 ${totalRotate}!`, onClose: resetFunc });
    }
  }, [isRunner, resetFunc, totalRotate, totalStep]);

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
                <FlexBox $flex="1" key={colIndex} onClick={() => onClick(rowIndex, colIndex)}>
                  <Cell $rotate={rotate} $speed={speed} />
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
