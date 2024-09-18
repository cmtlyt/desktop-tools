import { useMemo } from 'react';
import { useMatches } from 'react-router-dom';
import styled from 'styled-components';
import { ShadowFlexBox } from '@/components/base';
import { UIMatchWithHandle } from '@/types';

interface PageInfo {
  title: string;
}

const HeaderContent = styled(ShadowFlexBox)`
  padding: 1rem 2rem;
`;

export function Header() {
  const matches = useMatches() as UIMatchWithHandle<PageInfo>[];

  const title = useMemo(() => {
    return matches.at(-1)?.handle?.title;
  }, [matches]);

  return (
    <header>
      <HeaderContent>
        <span>{title}</span>
      </HeaderContent>
    </header>
  );
}
