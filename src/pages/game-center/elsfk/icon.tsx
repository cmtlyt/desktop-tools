import { FlexBox, FlexDirection } from '@/components/base';
import styled from 'styled-components';

const Block = styled(FlexBox)`
  flex: 1;

  &::before,
  &::after {
    content: '';
    flex: 1;
    box-shadow:
      inset 0 0 0 0.4rem currentColor,
      inset 0 0 0 0.8rem #fff,
      inset 0 0 0 10rem currentColor;
  }
`;

const IconWrapper = styled(FlexBox)`
  height: 80%;
  aspect-ratio: 1/1;
`;

export function ELSFKIcon() {
  return (
    <IconWrapper $gap="0.5">
      <Block $gap="0.5" $direction={FlexDirection.column} />
      <Block $gap="0.5" $direction={FlexDirection.column} />
    </IconWrapper>
  );
}
