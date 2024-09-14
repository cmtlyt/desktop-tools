import { createHashRouter } from 'react-router-dom';
import { generateRouteConfig } from './utils';

export const routerConfig = createHashRouter([
  {
    path: '/',
    lazy: () => import('../layout'),
    children: [generateRouteConfig('/'), generateRouteConfig('/flow-list')],
  },
]);
