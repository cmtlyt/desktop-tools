import { Subject } from 'rxjs';
import { ActionSubject, createActionSubscribeHook } from '@/utils';
import { logger } from '@/utils';

export enum ZGXQActionType {
  GAME_OVER = 'game_over',
}

interface ExtendProps {
  user: 'red' | 'black';
}

type Subject_ = ActionSubject<ZGXQActionType, ExtendProps>;

const actionSubject = new Subject<Subject_>();

export function emitZGXQAction(action: Subject_) {
  actionSubject.next(action);
  if (!action.ext?.disableAutoLogger) logger.event('zgxq-action', action);
}

export const useSubscribeZGXQAction = createActionSubscribeHook(actionSubject);
