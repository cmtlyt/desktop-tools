import { useMemo } from 'react';
import { Link, UIMatch, useMatches } from 'react-router-dom';
import styled from 'styled-components';
import { FlexBox } from '@/components/base';

const GrayLink = styled(Link)`
  display: flex;
  color: var(--color-gray);
  transition: color 300ms;

  &:hover {
    color: var(--color-primary);
  }
`;

const ActiveCrumb = styled.span`
  display: flex;
  color: var(--color-primary);
`;

const CrumbList = styled(FlexBox)`
  font-size: 1.4rem;
`;

export function Crumbs() {
  const matches = useMatches() as UIMatch<
    unknown,
    { title: string; crumbLabel: string | React.ReactNode }
  >[];

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
