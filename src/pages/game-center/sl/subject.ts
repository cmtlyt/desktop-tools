import { Subject } from 'rxjs';
import { ActionSubject, createActionSubscribeHook } from '@/utils';
import { logger } from '@/utils';
import { FinishedBlock, GameInfo } from './type';

export enum SLActionType {
  GAME_OVER = 'game_over',
  RESTART = 'restart',
  PHONE_HANDLER = 'phone_handler',
  CHANGE_CONFIG = 'change_config',
}

interface ExtendProps {
  isWin: boolean;
  block: FinishedBlock;
  gameInfo: GameInfo;
  disableAutoLogger: boolean;
  eventCallback: (type?: string) => void;
}

type SLSubject = ActionSubject<SLActionType, ExtendProps>;

const actionSubject = new Subject<SLSubject>();

export function emitSLAction(action: SLSubject) {
  actionSubject.next(action);
  if (!action.ext?.disableAutoLogger) logger.event('sl-action', action);
}

export const useSubscribeSLAction = createActionSubscribeHook(actionSubject);
