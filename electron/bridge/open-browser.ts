import { IpcMainInvokeEvent, shell } from 'electron';

export function openBrowser(_event: IpcMainInvokeEvent, url: string) {
  shell.openExternal(url);
}
