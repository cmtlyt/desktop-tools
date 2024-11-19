import { memo } from 'react';
import styled from 'styled-components';
import { FlexBox, FlexDirection } from '@/components/base';
import { Icon } from './icon';
import { getMovePoints, moveChess } from './util';
import { getZGXQStore, useZGXQStoreSlice } from './state';
import { CheckerboardData, ChessItem, Position } from './type';
import { Switch } from '@/components/switch';
import { CheckerboardInfo } from './constant';
import { isPhone } from '@/utils';

export const BoardWrapper = styled(FlexBox)`
  --cell-size: ${isPhone() ? '9vmin' : '7vmin'};
  --base-line-width: 0.1rem;
  --line-width: var(--base-line-width);
  --line-gap: 0.5rem;
  --base-line-length: 1rem;
  --line-length: var(--base-line-length);

  position: relative;
  width: calc(${CheckerboardInfo.width - 1} * var(--cell-size));
  height: calc(${CheckerboardInfo.height - 1} * var(--cell-size));
`;

export const BoardContent = styled(FlexBox)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  height: max-content;

  &::before {
    content: '楚河';
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translateY(-50%) rotate(90deg);
    font-size: calc(var(--cell-size) / 2);
    writing-mode: vertical-lr;
    letter-spacing: 0.5em;
  }
  &::after {
    content: '汉界';
    position: absolute;
    top: 50%;
    right: 25%;
    transform: translateY(-50%) rotate(-90deg);
    font-size: calc(var(--cell-size) / 2);
    writing-mode: vertical-lr;
    letter-spacing: 0.5em;
  }
`;

export const BoardBg = styled.section`
  position: absolute;
  inset: 0;
  background-image: 
    // 中间白块
    linear-gradient(#fff, #fff),
    // 网格
    repeating-linear-gradient(
        #000,
        #000 var(--line-width),
        transparent var(--line-width),
        transparent var(--cell-size)
      ),
    repeating-linear-gradient(
      90deg,
      #000,
      #000 var(--line-width),
      transparent var(--line-width),
      transparent var(--cell-size)
    ),
    // 棋盘上方的虚线1
    repeating-linear-gradient(transparent 0, transparent 0.5rem, #fff 0.5rem, #fff 1rem),
    linear-gradient(
      45deg,
      transparent,
      transparent calc(50% - var(--line-width) / 2),
      #000 calc(50% - var(--line-width) / 2),
      #000 calc(50% + var(--line-width) / 2),
      transparent calc(50% + var(--line-width) / 2),
      transparent 0
    ),
    // 棋盘上方的虚线2
    linear-gradient(
        -45deg,
        transparent,
        transparent calc(50% - var(--line-width) / 2),
        #000 calc(50% - var(--line-width) / 2),
        #000 calc(50% + var(--line-width) / 2),
        transparent calc(50% + var(--line-width) / 2),
        transparent 0
      ),
    // 棋盘下方的虚线1
    repeating-linear-gradient(transparent 0, transparent 0.5rem, #fff 0.5rem, #fff 1rem),
    linear-gradient(
      45deg,
      transparent,
      transparent calc(50% - var(--line-width) / 2),
      #000 calc(50% - var(--line-width) / 2),
      #000 calc(50% + var(--line-width) / 2),
      transparent calc(50% + var(--line-width) / 2),
      transparent 0
    ),
    // 棋盘下方的虚线2
    linear-gradient(
        -45deg,
        transparent,
        transparent calc(50% - var(--line-width) / 2),
        #000 calc(50% - var(--line-width) / 2),
        #000 calc(50% + var(--line-width) / 2),
        transparent calc(50% + var(--line-width) / 2),
        transparent 0
      );
  background-position:
    var(--line-width) calc(50% + var(--line-width)),
    0 0,
    0 0,
    50% 0,
    50% 0,
    calc(50% + var(--line-width)) 0,
    calc(50% + var(--line-width)) calc(100% + var(--line-width)),
    calc(50% + var(--line-width)) calc(100% + var(--line-width)),
    calc(50% + var(--line-width)) calc(100% + var(--line-width));
  background-size:
    calc(100% - var(--line-width) * 2) calc(var(--cell-size) - var(--line-width)),
    100% 100%,
    100% 100%,
    calc(var(--cell-size) * 2) calc(var(--cell-size) * 2),
    calc(var(--cell-size) * 2) calc(var(--cell-size) * 2),
    calc(var(--cell-size) * 2) calc(var(--cell-size) * 2),
    calc(var(--cell-size) * 2) calc(var(--cell-size) * 2),
    calc(var(--cell-size) * 2) calc(var(--cell-size) * 2),
    calc(var(--cell-size) * 2) calc(var(--cell-size) * 2);
  background-repeat: no-repeat;

  border: var(--line-width) solid #000;
  border-top-width: 0;
  border-left-width: 0;

  outline: var(--line-width) solid #000;
  outline-offset: 5px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: calc(var(--cell-size) * 2 - var(--line-gap));
    left: calc(var(--cell-size) + var(--line-gap) * 1.25);
    width: var(--line-length);
    height: var(--line-width);
    background: #000;
    box-shadow:
      0 calc(var(--line-gap) * 2),
      calc(var(--line-length) * -1 - var(--line-gap) * 2) 0,
      calc(var(--line-length) * -1 - var(--line-gap) * 2) calc(var(--line-gap) * 2),
      calc(var(--cell-size) * 6) 0,
      calc(var(--cell-size) * 6) calc(var(--line-gap) * 2),
      calc(var(--cell-size) * 6 - var(--line-length) - var(--line-gap) * 2) 0,
      calc(var(--cell-size) * 6 - var(--line-length) - var(--line-gap) * 2) calc(var(--line-gap) * 2),
      calc(var(--cell-size) * -1) var(--cell-size),
      calc(var(--cell-size) * -1) calc(var(--line-gap) * 2 + var(--cell-size)),
      var(--cell-size) var(--cell-size),
      var(--cell-size) calc(var(--line-gap) * 2 + var(--cell-size)),
      calc(var(--cell-size) - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) - var(--line-length) - var(--line-gap) * 2) calc(var(--line-gap) * 2 + var(--cell-size)),
      calc(var(--cell-size) * 3) var(--cell-size),
      calc(var(--cell-size) * 3) calc(var(--line-gap) * 2 + var(--cell-size)),
      calc(var(--cell-size) * 3 - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) * 3 - var(--line-length) - var(--line-gap) * 2) calc(var(--line-gap) * 2 + var(--cell-size)),
      calc(var(--cell-size) * 5) var(--cell-size),
      calc(var(--cell-size) * 5) calc(var(--line-gap) * 2 + var(--cell-size)),
      calc(var(--cell-size) * 5 - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) * 5 - var(--line-length) - var(--line-gap) * 2) calc(var(--line-gap) * 2 + var(--cell-size)),
      calc(var(--cell-size) * 7 - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) * 7 - var(--line-length) - var(--line-gap) * 2) calc(var(--line-gap) * 2 + var(--cell-size));
    -webkit-box-reflect: below calc(var(--cell-size) * 5 + 0.75rem);
    box-reflect: below calc(var(--cell-size) * 5 + 0.75rem);
  }

  &::after {
    --line-width: var(--base-line-length);
    --line-length: var(--base-line-width);
    top: calc(var(--cell-size) * 2 - var(--line-gap) - var(--line-width));
    transform: translateY(calc(var(--line-length) / 2));
    box-shadow:
      0 calc(var(--line-gap) * 2 + var(--line-width)),
      calc(var(--line-length) * -1 - var(--line-gap) * 2) 0,
      calc(var(--line-length) * -1 - var(--line-gap) * 2) calc(var(--line-gap) * 2 + var(--line-width)),
      calc(var(--cell-size) * 6) 0,
      calc(var(--cell-size) * 6) calc(var(--line-gap) * 2 + var(--line-width)),
      calc(var(--cell-size) * 6 - var(--line-length) - var(--line-gap) * 2) 0,
      calc(var(--cell-size) * 6 - var(--line-length) - var(--line-gap) * 2)
        calc(var(--line-gap) * 2 + var(--line-width)),
      calc(var(--cell-size) * -1) var(--cell-size),
      calc(var(--cell-size) * -1) calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width)),
      var(--cell-size) var(--cell-size),
      var(--cell-size) calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width)),
      calc(var(--cell-size) - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) - var(--line-length) - var(--line-gap) * 2)
        calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width)),
      calc(var(--cell-size) * 3) var(--cell-size),
      calc(var(--cell-size) * 3) calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width)),
      calc(var(--cell-size) * 3 - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) * 3 - var(--line-length) - var(--line-gap) * 2)
        calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width)),
      calc(var(--cell-size) * 5) var(--cell-size),
      calc(var(--cell-size) * 5) calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width)),
      calc(var(--cell-size) * 5 - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) * 5 - var(--line-length) - var(--line-gap) * 2)
        calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width)),
      calc(var(--cell-size) * 7 - var(--line-length) - var(--line-gap) * 2) var(--cell-size),
      calc(var(--cell-size) * 7 - var(--line-length) - var(--line-gap) * 2)
        calc(var(--line-gap) * 2 + var(--cell-size) + var(--line-width));
    -webkit-box-reflect: below calc(var(--cell-size) * 5 + 0.95rem);
    box-reflect: below calc(var(--cell-size) * 5 + 0.95rem);
  }
`;

export const Row = styled(FlexBox)`
  position: relative;
  flex: 1;
  width: 100%;
`;

interface CellProps {
  $actived?: boolean;
}

export const Cell = styled(FlexBox)<CellProps>`
  position: relative;
  flex: 1;
  box-sizing: border-box;
  padding: 0.5rem;
  width: var(--cell-size);
  height: var(--cell-size);
  font-size: calc(var(--cell-size) - 3vmin);

  ${({ $actived }) => {
    if (!$actived) return '';
    return `
      &::before{
        content:'';
        position:absolute;
        inset: 40%;
        z-index: 1;
        border-radius:50%;
        background: yellowgreen;
      }
    `;
  }}
`;

interface CellItemProps {
  $actived?: boolean;
}

export const CellItem = styled(Icon)<CellItemProps>`
  background-color: #fff;

  @keyframes twinkle {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  ${({ $actived }) => {
    if (!$actived) return '';
    return `
      animation: twinkle 500ms infinite alternate;
    `;
  }}
`;

export const RenderContent = memo(() => {
  const { checkerboard } = useZGXQStoreSlice('checkerboard');

  return (
    <BoardContent $direction={FlexDirection.COLUMN}>
      {checkerboard.map((rowInfo, idx) => (
        <RenderRow key={idx} rowInfo={rowInfo} row={idx} />
      ))}
    </BoardContent>
  );
});

interface RenderRowProps {
  row: number;
  rowInfo: CheckerboardData[number];
}

export const RenderRow = (props: RenderRowProps) => {
  const { rowInfo, row } = props;
  const { currentChessMovePoints } = useZGXQStoreSlice('currentChessMovePoints');

  return (
    <Row>
      {rowInfo.map((item, idx) => (
        <RenderCell key={idx} info={item} row={row} cel={idx} activePoints={currentChessMovePoints} />
      ))}
    </Row>
  );
};

interface RenderCellProps {
  row: number;
  cel: number;
  info: CheckerboardData[number][number];
  activePoints?: string[];
}

function cellClickHandler(info: ChessItem, pos: Position) {
  const { isActive, type } = info;
  const store = getZGXQStore();
  const { currentUser } = store;
  if (currentUser !== info.color) return;
  const { checkerboard, currentChess, changeCheckerboard, setCurrentChessMovePoints, setCurrentChess } = store;
  const [row, cel] = pos;
  changeCheckerboard((draft) => {
    if (currentChess) {
      const { pos: oldPos } = currentChess;
      draft[oldPos[0]][oldPos[1]]!.isActive = false;
    }
    const cell = draft[row][cel]!;
    cell.isActive = !isActive;
  });
  const movePoints = isActive ? void 0 : getMovePoints(checkerboard, type, { ...info, pos });
  setCurrentChessMovePoints(movePoints);
  setCurrentChess(isActive ? void 0 : { ...info, pos });
}

function moveClickHandler(pos: Position) {
  const { currentChess, changeCheckerboard, setCurrentChess, setCurrentChessMovePoints, changeUser } = getZGXQStore();
  changeCheckerboard((draft) => {
    moveChess(draft, currentChess!, pos);
  });
  setCurrentChess(void 0);
  setCurrentChessMovePoints(void 0);
  changeUser();
}

export function RenderCell(props: RenderCellProps) {
  const { info, row, cel, activePoints } = props;

  const actived = activePoints?.includes(`${row},${cel}`);
  const { isActive, ...otherProps } = info || ({} as ChessItem);

  return (
    <Cell $actived={actived} onClick={() => actived && moveClickHandler([row, cel])}>
      <Switch if={info} fullback={<section />}>
        {() => (
          <CellItem
            $actived={isActive}
            {...otherProps}
            onClick={() => {
              if (actived) return;
              cellClickHandler(info!, [row, cel]);
            }}
          />
        )}
      </Switch>
    </Cell>
  );
}
