import { useMemo } from 'react';
import { useMatches } from 'react-router-dom';
import styled from 'styled-components';
import { IoCaretBack } from 'react-icons/io5';
import { FlexAlign, FlexBox, FlexJustify, ShadowFlexBox } from '@/components/base';
import { UIMatchWithHandle } from '@/types';
import { isPhone, logger } from '@/utils';
import { Show } from '@/components/show';
import { useNavigate } from '@/hooks';
import { PageInfo } from '@/types/page-info';

const HeaderContent = styled(ShadowFlexBox)`
  position: relative;
  z-index: 2;
  height: 5rem;
  padding: 0 ${isPhone() ? '1rem' : '2rem'};
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 0;
  }
`;

const BackIcon = styled(IoCaretBack)`
  margin-right: 1rem;
  padding: 1rem;
  background: var(--color-gray-3);
  border-radius: var(--radius-button);
`;

const TitleText = styled.span`
  flex: 1;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.04rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TitleWrapper = styled(FlexBox)`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
`;

export function Header() {
  const navigate = useNavigate();
  const matches = useMatches() as UIMatchWithHandle<PageInfo>[];
  const lastMatch = useMemo(() => matches.at(-1), [matches]);

  const title = lastMatch?.handle?.title;
  const needBackIcon = lastMatch?.handle?.needBackIcon;
  const rightArea = lastMatch?.handle?.rightArea;
  const titleArea = lastMatch?.handle?.titleArea;

  return (
    <HeaderContent $gap="1" $justifyContent={FlexJustify.BETWEEN}>
      <TitleWrapper $alignItems={FlexAlign.CENTER}>
        <Show when={needBackIcon}>
          {() => (
            <BackIcon
              onClick={() => {
                logger.click('header-back-icon');
                navigate(-1);
              }}
            />
          )}
        </Show>
        <TitleText>{titleArea || title}</TitleText>
      </TitleWrapper>
      <FlexBox $alignItems={FlexAlign.CENTER}>{rightArea}</FlexBox>
    </HeaderContent>
  );
}
