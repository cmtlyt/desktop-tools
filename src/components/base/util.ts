import type { TExclude } from '@cmtlyt/base';
import { RemovePrefix } from '@/types';
import { ColorVar, ThemeColor } from './type';

const ignoreProps = ['children', 'className'];

type IgnoreProps = 'children' | 'className';

export function propsHandler<T extends Record<string, unknown>>(
  props: T,
  userIgnoreProps: string[] = [],
  needProps: string[] = Object.keys(props),
): RemovePrefix<TExclude<T, IgnoreProps>, '$'> {
  const newProps: Record<string, unknown> = {};
  const ignorePropsFinished = [...ignoreProps, ...userIgnoreProps];

  needProps.forEach((key) => {
    if (ignorePropsFinished.includes(key)) return;

    if (key.startsWith('$')) {
      newProps[key.slice(1)] = props[key];
    } else {
      newProps[key] = props[key];
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return newProps as any;
}

export function applyStyleSheet(key: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: any) => {
    const style = props[key];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return style as any;
  };
}

export function getThemeColorVar(colorInfo: Partial<ThemeColor>): ColorVar {
  const { font = '', bg = '', border = '' } = colorInfo;

  return { '--font-color': font, '--bg-color': bg, '--border-color': border };
}

export function colorVar2Str(colorInfo: Partial<ColorVar>) {
  return Object.entries(colorInfo)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n');
}
