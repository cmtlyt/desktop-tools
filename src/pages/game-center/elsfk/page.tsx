import { useCallback, useMemo, useRef, useState } from 'react';
import {
  generaeteElement,
  generateInitData,
  getClearLine,
  getElementVoPos,
  getMoveFunc,
  mergeRenderMap,
  rotate,
} from './util';
import { AppearBox } from '@/components/appear-box';
import { FlexAlign, FlexBox, FlexDirection, FlexJustify } from '@/components/base';
import { ElementInfo, ELSFKCustomEvent, GameInfo } from './type';
import { useGlobalEvent } from '@/hooks/use-global-event';
import { debounce } from '@cmtlyt/base';
import { Container, NextElement, RightArea, Row, Text } from './components';
import { GameStatus, getELSFKStore, useELSFKStoreSlice } from './store';
import { getLayoutStore } from '@/store';
import { ELSFKActionType, emitELSFKAction, useSubscribeELSFKAction } from './subject';
import { addStorageItem, forceSaveStorage, logger } from '@/utils';
import { ELSFK_HISTORY_STORAGE_KEY } from '../constant';

export function Component() {
  const { row, col, moveAddRow } = useELSFKStoreSlice(['row', 'col', 'moveAddRow']);
  const moveRow = row + moveAddRow;
  const speed = useRef(500);
  const downLock = useRef(false);
  const getInitData = useMemo(() => generateInitData(moveRow, row), [moveRow, row]);
  const staticMap = useRef(getInitData(false));
  const moveMap = useRef(getInitData(true));
  const element = useRef<ElementInfo>({} as ElementInfo);
  const nextElement = useRef<ElementInfo>({} as ElementInfo);
  const [renderMap, setRenderMap] = useState(mergeRenderMap(moveAddRow, staticMap.current, moveMap.current));
  const [clearLine, setClearLine] = useState<number[]>([]);
  const score = useRef(0);

  const rowMax = useMemo(() => (1 << col) - 1, [col]);

  const updateRenderMap = useCallback(() => {
    setRenderMap(mergeRenderMap(moveAddRow, staticMap.current, moveMap.current));
  }, [moveAddRow]);

  const moveFunc = useMemo(() => getMoveFunc(col, moveRow, moveAddRow), [col, moveRow, moveAddRow]);

  const createNext = useCallback(() => {
    const currElement = nextElement.current;
    let _nextElement = generaeteElement(col);
    new Array(Math.floor(Math.random() * 4)).forEach(() => (_nextElement = rotate(_nextElement)));
    const currVo = getElementVoPos(col, currElement);
    nextElement.current = _nextElement;
    element.current = currElement;
    moveMap.current = getInitData(true);
    moveMap.current.unshift(...currVo);
    moveMap.current.splice(moveRow);
  }, [getInitData, moveRow, col]);

  useGlobalEvent('keydown', (event: KeyboardEvent) => {
    if (event.code === 'ArrowLeft') {
      moveMap.current = moveFunc('left', staticMap.current, moveMap.current);
      element.current.rightSpace += 1;
      updateRenderMap();
    } else if (event.code === 'ArrowRight') {
      moveMap.current = moveFunc('right', staticMap.current, moveMap.current);
      element.current.rightSpace -= 1;
      updateRenderMap();
    } else if (event.code === 'ArrowUp') {
      element.current = rotate(element.current);
      const voPos = getElementVoPos(col, element.current);
      moveMap.current = [...voPos].concat(new Array(moveRow - voPos.length).fill(0));
      updateRenderMap();
    } else if (event.code === 'ArrowDown') {
      // 加速
      if (downLock.current) return;
      downLock.current = true;
      speed.current /= 4;
    }
  });

  useGlobalEvent('keyup', (e: KeyboardEvent) => {
    if (e.code === 'ArrowDown') {
      downLock.current = false;
      speed.current *= 4;
    }
  });

  const gameOver = useCallback(() => {
    getELSFKStore().setGameStatus(GameStatus.over);
    const gameInfo: GameInfo = { gameId: getELSFKStore().gameId, score: score.current };
    addStorageItem(ELSFK_HISTORY_STORAGE_KEY, { ...gameInfo, time: Date.now() });
    forceSaveStorage();
    logger.event('game-elsfk-over', gameInfo);
    logger.expose('game-elsfk-over');
    emitELSFKAction({ id: 'reload-history', type: ELSFKActionType.RELOAD_HISTORY });
    getLayoutStore().showMessage({ content: `游戏结束, 得分: ${score.current}` });
  }, []);

  const nextTick = useMemo(() => {
    return debounce(() => {
      const gameStatus = getELSFKStore().gameStatus;
      if (gameStatus !== GameStatus.running) return;
      setTimeout(() => {
        try {
          moveMap.current = moveFunc('bottom', staticMap.current, moveMap.current);
          element.current.topPos += 1;
        } catch (e) {
          const err = e as ELSFKCustomEvent;
          if (err.custom && err.action === 'submit') {
            const _staticMap = mergeRenderMap(moveAddRow, staticMap.current, moveMap.current);
            staticMap.current = _staticMap;
            // 判断是否有需要消除的行
            const clearLine = getClearLine(row, _staticMap, rowMax);
            if (clearLine.length) {
              score.current += clearLine.length * col;
              setClearLine(clearLine);
              setTimeout(() => {
                clearLine.forEach((idx) => {
                  _staticMap.splice(idx, 1);
                  _staticMap.unshift(0);
                });
                setClearLine([]);
                createNext();
                nextTick();
              }, 2000);
              return;
            }
            // 判断是否触顶
            if (_staticMap[0]) {
              return gameOver();
            }
            createNext();
          }
        }
        updateRenderMap();
        nextTick();
      }, speed.current);
    }, 10);
  }, [moveFunc, createNext, rowMax, moveAddRow, row, col, updateRenderMap, gameOver]);

  const reset = useCallback(
    (isUser = false) => {
      staticMap.current = getInitData(false);
      moveMap.current = getInitData(true);
      nextElement.current = isUser ? ({} as ElementInfo) : generaeteElement(col);
      speed.current = 500;
      downLock.current = false;
    },
    [getInitData, col],
  );

  const start = useCallback(() => {
    if (getELSFKStore().gameStatus !== GameStatus.over) return;
    getELSFKStore().setGameStatus(GameStatus.running);
    reset();
    createNext();
    nextTick();
  }, [createNext, nextTick, reset]);

  useSubscribeELSFKAction(({ type }) => {
    const { setGameStatus, gameStatus } = getELSFKStore();
    if (type === ELSFKActionType.START) {
      if (gameStatus === GameStatus.pause) {
        setGameStatus(GameStatus.running);
        nextTick();
      } else start();
    } else if (type === ELSFKActionType.PAUSE) {
      setGameStatus(GameStatus.pause);
    } else if (type === ELSFKActionType.RELOAD) {
      reset(true);
      setGameStatus(GameStatus.over);
      updateRenderMap();
    }
  });

  return (
    <AppearBox>
      <FlexBox
        $flex="1"
        $alignItems={FlexAlign.center}
        $justifyContent={FlexJustify.center}
        $gap="1"
        $direction={FlexDirection.column}
      >
        <Text>当前得分: {score.current}</Text>
        <FlexBox $gap="1" $justifyContent={FlexJustify.center}>
          <Container $gap="0.5" $direction={FlexDirection.column}>
            {renderMap.map((rowData, rowIdx) => (
              <Row key={rowIdx} rowData={rowData} $isClear={clearLine.includes(rowIdx)} />
            ))}
          </Container>
          <FlexBox>
            <NextElement elementInfo={nextElement.current} />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </AppearBox>
  );
}

export const handle = {
  title: '俄罗斯方块',
  needBackIcon: true,
  rightArea: <RightArea />,
};
