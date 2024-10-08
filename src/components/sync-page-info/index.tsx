import { useEffect, useMemo } from 'react';
import { useMatches } from 'react-router-dom';
import { PAGE_INFO_KEY } from '@/constant/session-key';
import { UIMatchWithHandle } from '@/types';
import { filterForJson } from '@/utils';

export function SyncPageInfo() {
  const matches = useMatches() as UIMatchWithHandle<unknown>[];
  const handle = useMemo(() => matches.at(-1)?.handle, [matches]);

  useEffect(() => {
    sessionStorage.setItem(PAGE_INFO_KEY, JSON.stringify(filterForJson(handle)));
  }, [handle]);

  return null;
}
