import styled from 'styled-components';
import { BsTextIndentLeft } from 'react-icons/bs';
import { FlexAlign, ShadowFlexBox } from '@/components/base';
import { Crumbs } from './crumbs';
import { getLayoutStore, useLayoutStoreSlice } from '@/store';
import { logger } from '@/utils';

const FooterContent = styled(ShadowFlexBox)`
  position: relative;
  z-index: 2;
  padding: 1rem 2rem;
`;

const ExpandIcon = styled(BsTextIndentLeft)<{ $expandAside: boolean }>`
  font-size: 2rem;
  transition: transform 300ms;
  transform: ${({ $expandAside }) => ($expandAside ? 'rotate(180deg)' : 'rotate(0)')};
`;

export function Footer() {
  const { expandAside } = useLayoutStoreSlice('expandAside');
  const onExpand = () => {
    getLayoutStore().setExpandAside(!expandAside);
    logger.click('footer-expand-icon', { expandAside: !expandAside });
  };

  return (
    <footer>
      <FooterContent $gap="1" $alignItems={FlexAlign.CENTER}>
        <ExpandIcon onClick={onExpand} $expandAside={expandAside} />
        <Crumbs />
      </FooterContent>
    </footer>
  );
}
