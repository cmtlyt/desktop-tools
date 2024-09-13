import { UIMatch } from 'react-router-dom';

export type UIMatchWithHandle<T> = UIMatch<unknown, T>;

export type UIMatchWithData<T> = UIMatch<T, unknown>;
