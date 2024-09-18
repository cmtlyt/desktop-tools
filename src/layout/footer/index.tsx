import styled from 'styled-components';
import { ShadowFlexBox } from '@/components/base';
import { Crumbs } from './crumbs';

const FooterContent = styled(ShadowFlexBox)`
  padding: 1rem 2rem;
`;

export function Footer() {
  return (
    <footer>
      <FooterContent>
        <Crumbs />
      </FooterContent>
    </footer>
  );
}
