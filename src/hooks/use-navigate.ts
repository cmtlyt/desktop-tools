import { useNavigate as useRouterNavigate, To, NavigateOptions, NavigateFunction } from 'react-router-dom';
import { getLayoutStore } from '@/store';
import { useCallback } from 'react';

export function useNavigate() {
  const routerNavigate = useRouterNavigate();

  const navigate: NavigateFunction = useCallback(
    (to: To | number, options?: NavigateOptions) => {
      getLayoutStore().setLoading(true);
      if (typeof to === 'number') return routerNavigate(to);
      return routerNavigate(to, options);
    },
    [routerNavigate],
  );

  return navigate;
}
