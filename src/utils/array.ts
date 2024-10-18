export function reverse<T extends unknown[]>(arr: T): T {
  const temp = arr.slice();
  return temp.reverse() as T;
}
