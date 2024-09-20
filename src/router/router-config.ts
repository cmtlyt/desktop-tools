import { createBrowserRouter } from 'react-router-dom';
import { generateRouteConfig } from './util';
import { basename } from './constant';

const routes = [
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

export const routerConfig = createBrowserRouter(routes, { basename });
