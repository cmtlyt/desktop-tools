import { Subject } from 'rxjs';
import { ActionSubject, createActionSubscribeHook } from '@/utils';
import { logger } from '@/utils';
import { Tile, ActionType } from './type';

export enum MJActionType {
  RESTART = 'restart',
  GAME_OVER = 'game_over',
  PLAYER_ACTION = 'player_action',
  SHOW_SETTINGS = 'show_settings',
}

interface ExtendProps {
  isWin: boolean;
  tile: Tile;
  actionType: ActionType;
  meldTiles: Tile[];
  playerIndex: number;
  disableAutoLogger: boolean;
}

type MJSubject = ActionSubject<MJActionType, ExtendProps>;

const actionSubject = new Subject<MJSubject>();

export function emitMJAction(action: MJSubject) {
  actionSubject.next(action);
  if (!action.ext?.disableAutoLogger) logger.event('mj-action', action);
}

export const useSubscribeMJAction = createActionSubscribeHook(actionSubject);
