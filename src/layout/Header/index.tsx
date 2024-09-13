import { UIMatchWithHandle } from '@/types';
import { useMemo } from 'react';
import { useMatches } from 'react-router-dom';

interface PageInfo {
  title: string;
}

export function Header() {
  const matches = useMatches() as UIMatchWithHandle<PageInfo>[];

  const title = useMemo(() => {
    return matches.at(-1)?.handle?.title;
  }, [matches]);

  return <header>{title}</header>;
}
