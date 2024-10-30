import { memo } from 'react';
import styled from 'styled-components';
import { FlexBox } from '@/components/base';
import { SBWDIcon } from './icon';

export const Wrapper = styled(FlexBox)`
  padding: var(--page-padding);
`;

export const Table = styled(FlexBox)`
  width: 60vmin;
  height: 60vmin;
`;

interface CellProps {
  $speed: number;
  $rotate: number;
}

export const Cell = memo(styled(SBWDIcon)<CellProps>`
  width: 100%;
  height: 100%;
  transform: rotate(${({ $rotate }) => $rotate}deg);
  transition: transform ${({ $speed }) => $speed}ms;
`);

export const Text = styled.span`
  font-size: 3rem;
`;
