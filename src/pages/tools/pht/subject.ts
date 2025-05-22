import { Subject } from 'rxjs';
import { ActionSubject, createActionSubscribeHook } from '@/utils';
import { logger } from '@/utils';

export enum ActionType {
  PREVIEW_IMAGE = 'preview_image',
}

type Subject_ = ActionSubject<ActionType>;

const actionSubject = new Subject<Subject_>();

export function emitPHTAction(action: Subject_) {
  actionSubject.next(action);
  if (!action.ext?.disableAutoLogger) logger.event('pht-action', action);
}

export const useSubscribePHTAction = createActionSubscribeHook(actionSubject);
