import { useMemo } from 'react';
import { UIMatch, useMatches } from 'react-router-dom';

export function Header() {
  const matches = useMatches() as UIMatch<unknown, { title: string }>[];

  const title = useMemo(() => {
    return matches.at(-1)?.handle?.title;
  }, [matches]);

  return <header>{title}</header>;
}
