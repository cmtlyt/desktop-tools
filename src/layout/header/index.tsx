import { useMemo } from 'react';
import { useMatches, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoCaretBack } from 'react-icons/io5';
import { FlexAlign, ShadowFlexBox } from '@/components/base';
import { UIMatchWithHandle } from '@/types';

interface PageInfo {
  title: string;
  needBackIcon: boolean;
}

const HeaderContent = styled(ShadowFlexBox)`
  height: 5rem;
  padding: 0 2rem;
`;

const BackIcon = styled(IoCaretBack)`
  margin-right: 1rem;
  padding: 1rem;
  background: var(--color-gray-4);
  border-radius: 1.2rem;
`;

export function Header() {
  const navigate = useNavigate();
  const matches = useMatches() as UIMatchWithHandle<PageInfo>[];
  const lastMatch = useMemo(() => matches.at(-1), [matches]);

  const title = lastMatch?.handle?.title;
  const needBackIcon = lastMatch?.handle.needBackIcon;

  return (
    <header>
      <HeaderContent $alignItems={FlexAlign.center}>
        {needBackIcon && <BackIcon onClick={() => navigate(-1)} />}
        <span>{title}</span>
      </HeaderContent>
    </header>
  );
}
