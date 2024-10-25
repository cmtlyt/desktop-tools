import { Subject } from 'rxjs';
import { ActionSubject, createActionSubscribeHook } from '@/utils/create-action-subscribe-hook';
import { logger } from '@/utils';

export enum SBWDActionType {
  RELOAD_HISTORY = 'reload_history',
}

type SBWDSubject = ActionSubject<SBWDActionType>;

const actionSubject = new Subject<SBWDSubject>();

export function emitSBWDAction(action: SBWDSubject) {
  actionSubject.next(action);
  logger.event('sbwd-action', action);
}

export const useSubscribeSBWDAction = createActionSubscribeHook(actionSubject);
