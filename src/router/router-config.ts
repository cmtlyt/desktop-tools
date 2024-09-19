import { createHashRouter } from 'react-router-dom';
import { generateRouteConfig } from './util';

export const routerConfig = createHashRouter([
  {
    path: '/',
    lazy: () => import('../layout'),
    children: [
      generateRouteConfig('/'),
      generateRouteConfig('/flow', [
        generateRouteConfig('', [], '/flow/list'),
        generateRouteConfig('/flow/detail/:id'),
        generateRouteConfig('/flow/editor/:id?'),
      ]),
    ],
  },
]);
