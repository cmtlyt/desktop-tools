import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { generateRouteConfig } from './util';
import { BASENAME } from './constant';

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
    ],
  },
];

export const routerConfig = createBrowserRouter(routes, { basename: BASENAME });
