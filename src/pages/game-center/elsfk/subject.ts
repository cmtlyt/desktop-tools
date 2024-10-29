import { Subject } from 'rxjs';
import { ActionSubject, createActionSubscribeHook } from '@/utils/create-action-subscribe-hook';
import { logger } from '@/utils';

export enum ELSFKActionType {
  RELOAD_HISTORY = 'reload_history',
  START = 'start',
  PAUSE = 'pause',
  RELOAD = 'reload',
}

type ELSFKSubject = ActionSubject<ELSFKActionType>;

const actionSubject = new Subject<ELSFKSubject>();

export function emitELSFKAction(action: ELSFKSubject) {
  actionSubject.next(action);
  logger.event('ELSFK-action', action);
}

export const useSubscribeELSFKAction = createActionSubscribeHook(actionSubject);
