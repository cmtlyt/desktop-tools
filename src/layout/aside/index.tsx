import styled from 'styled-components';
import { FlexDirection, ShadowFlexBox } from '@/components/base';
import { AsideAppList } from './aside-app-list';
import { useRootFontSize } from '@/hooks';
import { useEffect, useRef, useState } from 'react';
import { useLayoutStoreSlice } from '@/store';

const AsideContent = styled(ShadowFlexBox)`
  height: 100%;
`;

interface AsideWrapperProps {
  $width: string;
  $expandAside: boolean;
}

const AsideWrapper = styled.aside<AsideWrapperProps>`
  position: relative;
  display: grid;
  grid-template-columns: ${({ $width, $expandAside }) => ($expandAside ? $width : '0')};
  transition: grid-template-columns 300ms;
  overflow: hidden;
`;

export function Aside() {
  const rootFontSize = useRootFontSize();
  const [width, setWidth] = useState('');
  const asideRef = useRef<HTMLDivElement>(null);
  const { expandAside } = useLayoutStoreSlice('expandAside');

  useEffect(() => {
    if (!asideRef.current) return;
    setWidth(`${asideRef.current.offsetWidth / rootFontSize}rem`);
  }, [rootFontSize]);

  return (
    <AsideWrapper ref={asideRef} $width={width} $expandAside={expandAside}>
      <AsideContent $direction={FlexDirection.column}>
        <AsideAppList />
      </AsideContent>
    </AsideWrapper>
  );
}
