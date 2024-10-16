import { useEffect, useMemo } from 'react';
import { Subject } from 'rxjs';
import { TObject } from '@cmtlyt/base';
import { Many } from '@/types';

export enum ActionType {
  SAVE = 'save',
  SAVE_SUCCESS = 'save_success',
}

interface ActionSubject {
  id: string;
  type: ActionType;
  ext?: TObject<unknown>;
}

const actionSubject = new Subject<ActionSubject>();

export function emitEditorAction(action: ActionSubject) {
  actionSubject.next(action);
}

export function useSubscribeEditorAction(callback: (action: ActionSubject) => void, actionType?: Many<ActionType>) {
  const _actionType = useMemo(() => {
    return actionType && (Array.isArray(actionType) ? actionType : [actionType]);
  }, [actionType]);

  useEffect(() => {
    const subscribe = actionSubject.subscribe((action) => {
      if (_actionType && !_actionType.includes(action.type)) return;
      callback(action);
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, [callback, _actionType]);
}
