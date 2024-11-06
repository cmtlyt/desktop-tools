import styled from 'styled-components';
import { DateView } from '@/components/date-view';
import { ShadowFlexBox } from '../base';

export const ItemTitle = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ItemDate = styled(DateView)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const ItemWrapper = styled(ShadowFlexBox)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`;
