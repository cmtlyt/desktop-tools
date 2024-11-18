/**
 * 初始化棋盘数据
 * 渲染棋盘
 * 绑定棋子相关事件
 *  click:
 *    普通状态: 激活棋子, 显示可移动点
 *    激活状态: 重置棋子状态, 隐藏可移动点
 * 可移动点相关事件
 *  click: 更新棋盘数据, 重置棋子状态, 隐藏可移动点
 * 可移动点判定
 *  移动方向无阻挡且不为己方棋子
 */

import { CheckerboardData, ChessItem, Position } from './type';

export const CheckerboardInfo = {
  width: 9,
  height: 10,
  chessInfo: [
    '0,0-black-che',
    '0,1-black-ma',
    '0,2-black-xiang',
    '0,3-black-shi',
    '0,4-black-jiang',
    '0,5-black-shi',
    '0,6-black-xiang',
    '0,7-black-ma',
    '0,8-black-che',
    '2,1-black-pao',
    '2,7-black-pao',
    '3,0-black-bing',
    '3,2-black-bing',
    '3,4-black-bing',
    '3,6-black-bing',
    '3,8-black-bing',
    '6,0-red-bing',
    '6,2-red-bing',
    '6,4-red-bing',
    '6,6-red-bing',
    '6,8-red-bing',
    '7,1-red-pao',
    '7,7-red-pao',
    '9,0-red-che',
    '9,1-red-ma',
    '9,2-red-xiang',
    '9,3-red-shi',
    '9,4-red-jiang',
    '9,5-red-shi',
    '9,6-red-xiang',
    '9,7-red-ma',
    '9,8-red-che',
  ],
};

export function initCheckerboard() {
  const { width, height, chessInfo } = CheckerboardInfo;
  const checkerboard: CheckerboardData = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => null),
  );
  chessInfo.forEach((item) => {
    const [pos, color, type] = item.split('-');
    const [row, col] = pos.split(',').map(Number);
    const chessItem = { type, color, isActive: false } as ChessItem;
    checkerboard[row][col] = chessItem;
  });
  return checkerboard;
}

export function bingMovePoints(pos: Position) {
  const [_row, _col] = pos;
}
