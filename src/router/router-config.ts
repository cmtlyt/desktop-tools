import { RouteObject, createHashRouter } from 'react-router-dom';
import { generateRouteConfig } from './util';

export const routes: RouteObject[] = [
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
      generateRouteConfig('/log-history'),
      generateRouteConfig('/game-center', [
        generateRouteConfig('', [], '/game-center/list'),
        generateRouteConfig('/game-center/sbwd'),
        generateRouteConfig('/game-center/elsfk'),
        generateRouteConfig('/game-center/sl'),
      ]),
      generateRouteConfig('/notepad', [
        generateRouteConfig('', [], '/notepad/list'),
        generateRouteConfig('/notepad/editor/:id?'),
        generateRouteConfig('/notepad/preview/:id'),
        generateRouteConfig('/notepad/preview/source/:source', [], '/notepad/preview'),
      ]),
    ],
  },
];

export const routerConfig = createHashRouter(routes, { basename: '' });
