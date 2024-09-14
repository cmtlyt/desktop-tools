import { UIMatch } from 'react-router-dom';

export type UIMatchWithHandle<T> = UIMatch<unknown, T>;

export type UIMatchWithData<T> = UIMatch<T, unknown>;

export type RemovePrefix<T, P extends string> = {
  [K in keyof T as K extends `${P}${infer U}` ? U : K]: T[K];
};
