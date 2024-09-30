import { isValidElement } from 'react';

const jsonTypes = ['string', 'number', 'boolean', 'object', 'undefined'];

export function filterForJson(obj?: unknown) {
  if (!obj) return {};
  const temp: Record<string, unknown> = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (jsonTypes.includes(typeof value) && !isValidElement(value)) temp[key] = value;
  });
  return temp;
}
