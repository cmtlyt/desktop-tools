import { RouteObject } from 'react-router-dom';
import { basename } from './constant';

const pages = import.meta.glob('../pages/**/index.tsx');

export function getRoutePath(path: string) {
  return `${basename}/${path}`.replace(/\/+/g, '/').replace(/\/+$/g, '');
}

export function generateRouteConfig(path: string, children?: RouteObject[], pageDir?: string): RouteObject {
  let _pageDir = (pageDir || path)
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')
    // 移除动态路由段
    .replace(/\/:\w+\??/, '');
  if (!_pageDir) _pageDir = 'index';
  return {
    path,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lazy: pages[`../pages/${_pageDir}/index.tsx`] as any,
    children,
  };
}
