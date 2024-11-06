import { IndexedDBStorage } from '@cmtlyt/storage';
import { STORAGE_KEY } from '@/constant';
import { Many } from '@/types';
import { StateStorage } from 'zustand/middleware';

const storage = new IndexedDBStorage({ dbName: STORAGE_KEY, autoSaveDelay: 0 });

export async function setStorageItem(name: string, value: unknown) {
  return storage.setItem(name, value);
}

export async function getStorageItem(name: string) {
  return storage.getItem(name);
}

export async function removeStorageItem(name: string) {
  return storage.removeItem(name);
}

export async function forceSaveStorage() {
  return storage.forceSave();
}

export async function addStorageItem(name: string, value: Many<unknown>, isSingle = true) {
  const list = (await getStorageItem(name)) ?? [];
  if (!Array.isArray(list)) throw new TypeError(`${name} is not an array, please use setStorageItem`);
  if (isSingle) list.push(value);
  else list.push(...(value as unknown[]));
  return setStorageItem(name, list);
}

export const stateStorage: StateStorage = {
  getItem: getStorageItem,
  async setItem(name, value) {
    await setStorageItem(name, value);
    forceSaveStorage();
  },
  async removeItem(name) {
    await removeStorageItem(name);
    forceSaveStorage();
  },
};
