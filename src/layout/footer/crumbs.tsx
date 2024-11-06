import { useMemo } from 'react';
import { useMatches } from 'react-router-dom';
import styled from 'styled-components';
import { FlexBox } from '@/components/base';
import { UIMatchWithHandle } from '@/types';
import { logger } from '@/utils';
import { Link } from '@/components/link';
import { PageInfo } from '@/types/page-info';

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

export function Crumbs() {
  const matches = useMatches() as UIMatchWithHandle<PageInfo>[];

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
            <GrayLink to={crumb.path} key={crumb.path} onClick={() => logger.click('crumb-link-click')}>
              /{crumb.label}
            </GrayLink>
          );
        }
        return (
          <ActiveCrumb key={crumb.path} onClick={() => logger.click('crumb-acitve-text-click')}>
            /{crumb.label}
          </ActiveCrumb>
        );
      })}
    </CrumbList>
  );
}
