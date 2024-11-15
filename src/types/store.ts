import { StoreApi } from 'zustand';

export type SetFunc<T = unknown> = StoreApi<T>['setState'];

export type GetFunc<T = unknown> = StoreApi<T>['getState'];

export type GetStore<T, R = T> = (set: SetFunc<T>, get: GetFunc<T>, store: StoreApi<T>) => R;
