import { Many } from '@/types';
import { TObject } from '@cmtlyt/base';
import { useEffect, useMemo } from 'react';
import { Subject } from 'rxjs';

export interface ActionSubject<T, E = unknown> {
  id: string;
  type: T;
  ext?: E & TObject<unknown>;
}

type ActionType<S> = S extends ActionSubject<infer T> ? T : unknown;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createActionSubscribeHook<S extends ActionSubject<any>>(subject: Subject<S>) {
  return function useSubscribeEditorAction(callback: (action: S) => void, actionType?: Many<ActionType<S>>) {
    const _actionType = useMemo(() => {
      return actionType && ((Array.isArray(actionType) ? actionType : [actionType]) as ActionType<S>[] | undefined);
    }, [actionType]);

    useEffect(() => {
      const subscribe = subject.subscribe((action) => {
        if (_actionType && !_actionType.includes(action.type)) return;
        callback(action);
      });
      return () => {
        subscribe.unsubscribe();
      };
    }, [callback, _actionType]);
  };
}
