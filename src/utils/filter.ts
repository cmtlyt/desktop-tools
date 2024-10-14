import { isValidElement } from 'react';
import { Many } from '@/types';

const jsonTypes = ['string', 'number', 'boolean', 'object', 'undefined'];

export function filterForJson(obj?: unknown) {
  if (!obj) return {};
  const temp: Record<string, unknown> = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (jsonTypes.includes(typeof value) && !isValidElement(value)) temp[key] = value;
  });
  return temp;
}

export function pick<T extends object, K extends keyof T>(obj: T, keys: Many<K>): Pick<T, K> {
  if (!Array.isArray(keys)) keys = [keys] as Many<K>;
  const temp = {} as Pick<T, K>;
  (keys as K[]).forEach((key) => {
    temp[key] = obj[key];
  });
  return temp;
}
