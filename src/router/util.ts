import { RouteObject, redirect } from 'react-router-dom';
import { BASENAME } from './constant';
import { IS_DESKTOP_APP } from '@/constant';
import { PageInfo } from '@/types/page-info';

const pages = import.meta.glob<RouteObject>('../pages/**/page.tsx');

export function getRoutePath(path: string) {
  return `${IS_DESKTOP_APP ? '' : BASENAME}/${path}`.replace(/\/+/g, '/').replace(/\/+$/g, '');
}

interface GenerateRouteConfigOptions {
  guide?: {
    enable?: boolean;
    toOrigin?: string;
  };
}

function redirectToGuidePage(
  path: string,
  guideInfo?: GenerateRouteConfigOptions['guide'],
  loadPageInfo?: () => Promise<RouteObject>,
): RouteObject {
  return {
    path: `${path}/*`,
    loader: async ({ request }) => {
      const urlInfo = URL.parse(request.url);
      const currentPath = location.hash.replace(/^#/, '');
      if (!urlInfo) return redirect('/guide');
      const pathname = urlInfo.pathname;
      const searchParams = new URLSearchParams();
      searchParams.set('referer', currentPath);
      searchParams.set('target', pathname);
      Object.entries(guideInfo || {}).forEach(([key, value]) => searchParams.set(key, String(value)));
      if (loadPageInfo) {
        const { handle } = await loadPageInfo();
        const { rightArea: _, titleArea: __, ...pageInfo } = (handle || {}) as PageInfo;
        searchParams.set('pageInfo', JSON.stringify(pageInfo));
      }
      return redirect(`/guide?${searchParams.toString()}`);
    },
  };
}

export function generateRouteConfig(
  path: string,
  children?: RouteObject[],
  pageDir?: string,
  options?: GenerateRouteConfigOptions,
): RouteObject {
  const { guide } = options || {};
  let _pageDir = (pageDir || path)
    .replace(/^\/+/, '')
    .replace(/\/+$/, '')
    // 移除动态路由段
    .replace(/\/:\w+\??/, '');
  if (!_pageDir) _pageDir = 'index';
  const lazy = pages[`../pages/${_pageDir}/page.tsx`];
  if (guide && guide.enable && IS_DESKTOP_APP) {
    return redirectToGuidePage(path, guide, lazy);
  }
  return {
    path,
    // @ts-expect-error 路由懒加载
    lazy,
    children,
  };
}
