import { useMemo } from 'react';
import { useMatches } from 'react-router-dom';
import styled from 'styled-components';
import { IoCaretBack } from 'react-icons/io5';
import { FlexAlign, FlexBox, FlexJustify, ShadowFlexBox } from '@/components/base';
import { UIMatchWithHandle } from '@/types';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';
import { Show } from '@/components/show';
import { useNavigate } from '@/hooks/use-navigate';

interface PageInfo {
  title?: string;
  needBackIcon?: boolean;
  rightArea?: React.ReactNode;
}

const HeaderContent = styled(ShadowFlexBox)`
  height: 5rem;
  padding: 0 2rem;
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
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.04rem;
`;

const TitleWrapper = styled(FlexBox)`
  flex-shrink: 0;
`;

export function Header() {
  const navigate = useNavigate();
  const matches = useMatches() as UIMatchWithHandle<PageInfo>[];
  const lastMatch = useMemo(() => matches.at(-1), [matches]);

  const title = lastMatch?.handle?.title;
  const needBackIcon = lastMatch?.handle?.needBackIcon;
  const rightArea = lastMatch?.handle?.rightArea;

  return (
    <HeaderContent $gap="1" $justifyContent={FlexJustify.BETWEEN}>
      <TitleWrapper $alignItems={FlexAlign.CENTER}>
        <Show if={needBackIcon}>
          <AppearBox onFirstAppear={() => logger.appear('header-back-icon')}>
            <BackIcon
              onClick={() => {
                logger.click('header-back-icon');
                navigate(-1);
              }}
            />
          </AppearBox>
        </Show>
        <TitleText>{title}</TitleText>
      </TitleWrapper>
      <FlexBox $alignItems={FlexAlign.CENTER}>{rightArea}</FlexBox>
    </HeaderContent>
  );
}
