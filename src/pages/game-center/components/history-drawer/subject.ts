import { Subject } from 'rxjs';
import { ActionSubject, createActionSubscribeHook } from '@/utils/create-action-subscribe-hook';
import { logger } from '@/utils';

export enum HistoryActionType {
  RELOAD_HISTORY = 'reload_history',
}

type HistorySubject = ActionSubject<HistoryActionType>;

const actionSubject = new Subject<HistorySubject>();

export function emitHistoryAction(action: HistorySubject) {
  actionSubject.next(action);
  logger.event('Game-action', action);
}

export const useSubscribeHistoryAction = createActionSubscribeHook(actionSubject);
