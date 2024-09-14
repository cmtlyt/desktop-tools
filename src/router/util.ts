import { RouteObject } from 'react-router-dom';

export function generateRouteConfig(path: string, children?: RouteObject[]): RouteObject {
  let pageDir = path.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!pageDir) pageDir = 'index';
  return {
    path,
    lazy: () => import(`../pages/${pageDir}/index.tsx`),
    children,
  };
}
