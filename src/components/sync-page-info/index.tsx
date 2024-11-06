import { useEffect, useMemo } from 'react';
import { useMatches } from 'react-router-dom';
import { PAGE_INFO_KEY } from '@/constant/session-key';
import { UIMatchWithHandle } from '@/types';
import { filterForJson } from '@/utils';
import { PageInfo } from '@/types/page-info';

export function SyncPageInfo() {
  const matches = useMatches() as UIMatchWithHandle<PageInfo>[];
  const handle = useMemo(() => matches.at(-1)?.handle, [matches]);

  useEffect(() => {
    sessionStorage.setItem(PAGE_INFO_KEY, JSON.stringify(filterForJson(handle)));
  }, [handle]);

  return null;
}

export function getPageInfo(): PageInfo {
  const pageInfo = sessionStorage.getItem(PAGE_INFO_KEY);
  if (!pageInfo) return {};
  return JSON.parse(pageInfo);
}
