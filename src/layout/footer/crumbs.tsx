import { useMemo } from 'react';
import { Link, useMatches } from 'react-router-dom';
import styled from 'styled-components';
import { FlexBox } from '@/components/base';
import { UIMatchWithHandle } from '@/types';

const GrayLink = styled(Link)`
  display: flex;
  color: var(--color-gray-5);
  transition: color 300ms;

  &:hover {
    color: var(--color-hover);
  }
`;

const ActiveCrumb = styled.span`
  display: flex;
  color: var(--color-active);
`;

const CrumbList = styled(FlexBox)`
  font-size: 1.4rem;
`;

interface PageCrumbInfo {
  title: string;
  crumbLabel: string | React.ReactNode;
}

export function Crumbs() {
  const matches = useMatches() as UIMatchWithHandle<PageCrumbInfo>[];

  const crumbs = useMemo(() => {
    return matches
      .map((match) => ({
        label: match.handle?.crumbLabel || match.handle?.title,
        path: match.pathname,
      }))
      .filter((crumb) => crumb.label);
  }, [matches]);

  return (
    <CrumbList>
      {crumbs.map((crumb, idx, arr) => {
        if (idx < arr.length - 1) {
          return (
            <GrayLink to={crumb.path} key={crumb.path}>
              /{crumb.label}
            </GrayLink>
          );
        }
        return <ActiveCrumb key={crumb.path}>/{crumb.label}</ActiveCrumb>;
      })}
    </CrumbList>
  );
}
