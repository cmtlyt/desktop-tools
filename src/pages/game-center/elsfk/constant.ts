const elementMaps = [
  ['0/15/0/0', '2/2/3', '3/3', '3/6/0', '6/3/0', '0/7/2', '2/2/6'],
  ['0/7/0', '1/3', '3/3/3', '6/6/4', '3/3/1'],
  ['0/7/5', '1/7/4', '4/7/1', '1'],
  ['1/3/6', '1/3/7', '1/1'],
  ['1/2/4', '7/7/7'],
];

export function getElementMap(score: number) {
  const level = ~~(score / 200) + 1;
  return elementMaps.slice(0, level).flat();
}
