import { cacheByReturn } from '@cmtlyt/base';

export function opfsSupport() {
  return 'storage' in navigator;
}

export function isOpfsUrl(path: string) {
  return path.startsWith('opfs://');
}

export function checkOpfsUrl(path: string) {
  if (path.startsWith('opfs://')) return;
  throw new Error(`${path} Not a opfs url`);
}

export const getOpfsRoot = cacheByReturn(async () => {
  const opfsRoot = await navigator.storage.getDirectory();
  return opfsRoot;
});

async function deepGetDirectoryHandle(paths: string[], autoCreate = true) {
  const opfsRoot = await getOpfsRoot();
  const pathLength = paths.length;
  let currHandle = opfsRoot;
  for (let i = 0, dirname = paths[i]; i < pathLength && dirname; dirname = paths[++i]) {
    currHandle = await currHandle.getDirectoryHandle(dirname, { create: autoCreate });
  }
  return currHandle;
}

export async function getDirectoryHandle(path: string, autoCreate = true) {
  checkOpfsUrl(path);
  const targetPath = path.replace('opfs://', '');
  return deepGetDirectoryHandle(targetPath.split('/'), autoCreate);
}

export async function getFileHandle(path: string, autoCreate = true) {
  checkOpfsUrl(path);
  const tempPath = path.split('/');
  const filePath = tempPath.pop()!;
  const dirPath = tempPath.join('/');
  const dirHandle = await getDirectoryHandle(dirPath, autoCreate);
  return dirHandle.getFileHandle(filePath, { create: autoCreate });
}

export async function getFileWritable(path: string, keepExistingData = false, autoCreate = true) {
  checkOpfsUrl(path);
  const fileHandle = await getFileHandle(path, autoCreate);
  return fileHandle.createWritable({ keepExistingData });
}

export async function getFileContent(path: string) {
  checkOpfsUrl(path);
  const fileHandle = await getFileHandle(path, false);
  return fileHandle.getFile();
}

export async function getFileContentOfString(path: string) {
  const file = await getFileContent(path);
  const reader = new FileReader();
  reader.readAsText(file);
  return new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
  });
}
