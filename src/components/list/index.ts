import styled from 'styled-components';
import { DateView } from '@/components/date-view';
import { FlexBox, ShadowFlexBox } from '../base';
import { ButtonList } from '../button-list';

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

export const PageListWrapper = styled(FlexBox)`
  padding: var(--page-padding);
  flex-direction: column;
`;

export const RightHandleButtonList = styled(ButtonList)`
  padding-left: 1rem;
`;
