import { elementMap } from './constant';
import { ElementInfo, Position } from './type';

export function generateInitData(moveRow: number, row: number) {
  return (isMove: boolean) => new Array(isMove ? moveRow : row).fill(0);
}

export function mergeRenderMap(moveAdd: number, map: number[], moveMap: number[]): number[] {
  return map.map((item, idx) => item | moveMap[idx + moveAdd]);
}

export function generaeteElement(col: number): ElementInfo {
  const random = Math.floor(Math.random() * elementMap.length);
  const elementZipData = elementMap[random].split('/');
  const size = elementZipData.length;
  const rightSpace = Math.floor((col - size) / 2);
  const elementData = elementZipData.map((item) => parseInt(item, 10));
  return { size, elementData, rightSpace, topPos: 0, width: getElementWidth(elementData) };
}

export function getMoveFunc(col: number, moveRow: number, moveAdd: number) {
  return (pos: Position, map: number[], _moveMap: number[]) => {
    const moveMap = [..._moveMap];
    switch (pos) {
      case 'left': {
        if (
          moveMap.some((item, idx) => {
            const mapRow = map[idx - moveAdd];
            if (mapRow && mapRow & (item << 1)) return true;
            return item & (1 << (col - 1));
          })
        ) {
          break;
        }
        return moveMap.map((item) => item << 1);
      }
      case 'right': {
        if (
          moveMap.some((item, idx) => {
            const mapRow = map[idx - moveAdd];
            if (mapRow && mapRow & (item >> 1)) return true;
            return item & 1;
          })
        ) {
          break;
        }
        return moveMap.map((item) => item >> 1);
      }
      case 'bottom': {
        const notDown = moveMap.slice(2).some((item, idx) => {
          const mapRow = map[idx + 1];
          return mapRow & item;
        });
        const lastRow = moveMap[moveRow - 1];
        if (notDown || lastRow) throw { custom: true, action: 'submit' };
        moveMap.unshift(0);
        moveMap.pop();
        break;
      }
      default:
        pos satisfies never;
        return moveMap;
    }
    return moveMap;
  };
}

function getElementVo(size: number, elementData: number[]) {
  return elementData.map((item) => item.toString(2).padStart(size, '0').split(''));
}

function getElementWidth(elementData: number[]): number {
  return Math.max(...elementData.map((item) => item.toString(2).replace(/(^0+)|(0+$)/g, '').length));
}

export function getElementVoPos(col: number, element: ElementInfo) {
  const { elementData, rightSpace, topPos, width } = element;
  let _rightSpace = rightSpace;
  if (_rightSpace - width / 2 < 0) _rightSpace = 0;
  else if (_rightSpace + width > col) _rightSpace = col - width;
  element.rightSpace = _rightSpace;
  return new Array(topPos).fill(0).concat(elementData.map((item) => item << _rightSpace));
}

export function rotate(elementInfo: ElementInfo): ElementInfo {
  const { size, elementData } = elementInfo;
  const rotateData = getElementVo(size, elementData);
  const target = Array.from({ length: rotateData.length }, () => new Array(rotateData.length));
  for (let y = 0; y < rotateData.length; ++y) {
    const rowData = rotateData[y];
    for (let x = 0; x < rowData.length; ++x) target[size - 1 - x][y] = rotateData[y][x];
  }
  const newData = target.map((item) => parseInt(item.join(''), 2));
  return { ...elementInfo, elementData: newData, width: getElementWidth(newData) };
}

export function getClearLine(row: number, map: number[], rowMax: number) {
  const clearLine = [];
  for (let i = 0; i < row; ++i) if (map[i] === rowMax) clearLine.push(i);
  return clearLine;
}

export function number2VO(num: number, col: number): string[] {
  return num.toString(2).padStart(col).split('');
}
