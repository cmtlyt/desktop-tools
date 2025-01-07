import { ipcMain } from 'electron';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getCreateApiFunc<T extends Record<string, any>>(apis: T) {
  return (name: keyof T) => {
    const { [name]: func } = apis;
    ipcMain.handle(name as string, func);
  };
}

export async function initBridgeApi() {
  const apis = await import(`./_index.ts`);
  const createApi = getCreateApiFunc(apis);

  createApi('openBrowser');
}
