import { Subject } from 'rxjs';
import { ActionSubject, createActionSubscribeHook } from '@/utils/create-action-subscribe-hook';
import { logger } from '@/utils';

export enum SLActionType {
  GAME_OVER = 'game_over',
  RESTART = 'restart',
}

interface ExtendProps {
  isWin: boolean;
}

type SLSubject = ActionSubject<SLActionType, ExtendProps>;

const actionSubject = new Subject<SLSubject>();

export function emitSLAction(action: SLSubject) {
  actionSubject.next(action);
  logger.event('sl-action', action);
}

export const useSubscribeSLAction = createActionSubscribeHook(actionSubject);
