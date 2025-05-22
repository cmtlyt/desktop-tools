import { RouteObject, createHashRouter } from 'react-router-dom';
import { generateRouteConfig } from './util';
import { BASENAME } from './constant';
import { IS_DESKTOP_APP } from '@/constant';

export const routes: RouteObject[] = [
  generateRouteConfig('/guide'),
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
        generateRouteConfig('/game-center/zgxq'),
      ]),
      generateRouteConfig('/tools', [generateRouteConfig('', [], '/tools/list'), generateRouteConfig('/tools/pht')]),
      generateRouteConfig('/notepad', [
        generateRouteConfig('', [], '/notepad/list'),
        generateRouteConfig('/notepad/editor/:id?'),
        generateRouteConfig('/notepad/preview/:id'),
        generateRouteConfig('/notepad/preview/source/:source', [], '/notepad/preview'),
      ]),
      generateRouteConfig('/inline-vscode', [
        generateRouteConfig('', [], '/inline-vscode/project-list'),
        generateRouteConfig('/inline-vscode/workspace/:id'),
      ]),
      generateRouteConfig(
        '/recorder',
        [
          generateRouteConfig('', [], '/recorder/list'),
          generateRouteConfig('/recorder/recording'),
          generateRouteConfig('/recorder/playback/:id'),
        ],
        void 0,
        { guide: { enable: IS_DESKTOP_APP, toOrigin: `https://cmtlyt.github.io${BASENAME}` } },
      ),
    ],
  },
];

export const routerConfig = createHashRouter(routes, { basename: '' });
