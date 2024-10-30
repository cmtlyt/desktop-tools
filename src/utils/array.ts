export function reverse<T extends unknown[]>(arr: T): T {
  if (!Array.isArray(arr)) return [] as unknown as T;
  const temp = arr.slice();
  return temp.reverse() as T;
}
