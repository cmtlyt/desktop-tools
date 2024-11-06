import { Subject } from 'rxjs';
import { logger } from '@/utils';
import { ActionSubject, createActionSubscribeHook } from '@/utils';

export enum ActionType {
  SAVE = 'save',
  SAVE_SUCCESS = 'save_success',
}

type EditorSubject = ActionSubject<ActionType>;

const actionSubject = new Subject<EditorSubject>();

export function emitEditorAction(action: EditorSubject) {
  actionSubject.next(action);
  logger.event('editor-action', action);
}

export const useSubscribeEditorAction = createActionSubscribeHook(actionSubject);
