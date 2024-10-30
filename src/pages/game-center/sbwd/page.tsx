import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { produce } from 'immer';
import { debounce } from '@cmtlyt/base';
import { AppearBox } from '@/components/appear-box';
import { addStorageItem, forceSaveStorage, logger } from '@/utils';
import { FlexAlign, FlexBox, FlexDirection, FlexJustify } from '@/components/base';
import { getLayoutStore } from '@/store';
import { getSBWDStore, useSBWDStoreSlice } from './store';
import { SBWD_HISTORY_STORAGE_KEY } from '../constant';
import { GameInfo } from './type';
import { RightArea } from './right-area';
import { Cell, Table, Text, Wrapper } from './components';
import { getDirection, getNextPos } from './util';
import { emitHistoryAction, HistoryActionType } from '../components/history-drawer/subject';

export function Component() {
  const size = [5, 5];
  const [row, col] = size;
  const { speed, currentGameId, replayStep } = useSBWDStoreSlice(['speed', 'currentGameId', 'replayStep']);
  const [data, setData] = useState<number[][]>(Array.from({ length: row }, () => new Array(col).fill(0)));
  const [totalRotate, setTotalRotate] = useState(0);
  const [totalStep, setTotalStep] = useState(10);
  const [isRunner, setIsRunner] = useState(false);
  const stepHistory = useRef<string[]>([]);
  const gameId = useRef(currentGameId);
  const replayStepRef = useRef(replayStep);
  const isReplay = useRef(false);

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

  const onClick = useCallback(
    (row: number, col: number) => {
      if (isRunner) return;
      stepHistory.current.push(`${row},${col}`);
      setIsRunner(true);
      updateRotate(row, col);
      setTotalStep((v) => v - 1);
    },
    [isRunner, updateRotate],
  );

  const resetFunc = useCallback(() => {
    stepHistory.current = [];
    setData(Array.from({ length: row }, () => new Array(col).fill(0)));
    setTotalStep(10);
    setTotalRotate(0);
    isReplay.current = false;
  }, [row, col]);

  // 游戏状态判断
  useEffect(() => {
    if (!isRunner && totalStep <= 0) {
      if (isReplay.current) return getLayoutStore().showMessage({ content: '回放结束' });
      const gameInfo: GameInfo = { gameId: gameId.current, totalRotate, stepHistory: stepHistory.current };
      addStorageItem(SBWD_HISTORY_STORAGE_KEY, { ...gameInfo, time: Date.now() });
      forceSaveStorage();
      logger.event('game-sbwd-over', gameInfo);
      logger.expose('game-sbwd-over');
      emitHistoryAction({ id: 'reload-history', type: HistoryActionType.RELOAD_HISTORY });
      getLayoutStore().showMessage({ content: `游戏结束, 当前分数 ${totalRotate}!`, onClose: resetFunc });
    }
  }, [isRunner, resetFunc, totalRotate, totalStep]);

  // 重置游戏
  useEffect(() => {
    if (gameId.current === currentGameId) return;
    gameId.current = currentGameId;
    resetFunc();
  }, [currentGameId, resetFunc]);

  // 回放
  useEffect(() => {
    if (!replayStep) return;
    if (!replayStepRef.current?.length) {
      resetFunc();
      isReplay.current = true;
      replayStepRef.current = replayStep.slice();
    }
    const timer = setInterval(() => {
      if (isRunner) return;
      const [row, col] = replayStepRef.current!.shift()?.split(',').map(Number) || [];
      onClick(row, col);
      if (!replayStepRef.current!.length) {
        clearInterval(timer);
        getSBWDStore().replay(null);
        return;
      }
    }, speed);
    return () => clearInterval(timer);
  }, [replayStep, speed, isRunner, onClick, resetFunc]);

  return (
    <AppearBox onFirstAppear={() => logger.appear('game-sbwd')}>
      <Wrapper
        $flex="1"
        $gap="5"
        $direction={FlexDirection.COLUMN}
        $alignItems={FlexAlign.CENTER}
        $justifyContent={FlexJustify.CENTER}
      >
        <FlexBox $gap="1">
          <Text>剩余步数: {totalStep}</Text>
          <Text>当前度数: {totalRotate}</Text>
        </FlexBox>
        <Table $direction={FlexDirection.COLUMN} $gap="1">
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
  rightArea: <RightArea />,
};
