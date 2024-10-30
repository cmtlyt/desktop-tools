export function getDirection(deg: number) {
  if (deg % 360 === 0) return 'top';
  if (deg % 360 === 90) return 'right';
  if (deg % 360 === 180) return 'bottom';
  return 'left';
}

export function getNextPos(row: number, col: number, dir: ReturnType<typeof getDirection>) {
  if (dir === 'top') return [row - 1, col];
  if (dir === 'right') return [row, col + 1];
  if (dir === 'bottom') return [row + 1, col];
  return [row, col - 1];
}
