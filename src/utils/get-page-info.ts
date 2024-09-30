import { PAGE_INFO_KEY } from '@/constant';

export function getPageInfo() {
  const pageInfo = sessionStorage.getItem(PAGE_INFO_KEY);
  if (!pageInfo) return {};
  return JSON.parse(pageInfo);
}
