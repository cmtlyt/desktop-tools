import { Subject } from 'rxjs';
import { logger } from '@/utils';
import { ActionSubject, createActionSubscribeHook } from '@/utils';

export enum ActionType {
  RECORD_END = 'RECORD_END',
}

type TSubject = ActionSubject<ActionType>;

const actionSubject = new Subject<TSubject>();

export function emitRecordingAction(action: TSubject) {
  actionSubject.next(action);
  logger.event('recording-action', action);
}

export const useSubscribeRecordingAction = createActionSubscribeHook(actionSubject);
