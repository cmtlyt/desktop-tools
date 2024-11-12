import { memo } from 'react';
import styled from 'styled-components';
import { useFlowStoreSlice } from '../store';
import { ButtonTheme, FlexAlign, FlexBox, Tag, TagProps, TagTheme } from '@/components/base';
import { AccountType, Flow, FlowCategory, FlowStatus } from '@/types/flow';
import { HoverExpandBox } from '@/components/hover-expand-box';
import { ButtonList } from '@/components/button-list';
import { Price } from '@/components/price';
import { ACCOUNT_TYPE_LABEL_MAP, FLOW_CATEGORY_LABEL_MAP, FLOW_STATUS_LABEL_MAP } from '@/constant/flow';
import { ItemDate, ItemTitle, ItemWrapper } from '@/components/list';

interface FlowItemProps {
  flow: Flow;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onDelete?: (id: Flow['id']) => void;
}

const FlowTag = styled(Tag)`
  margin-right: 1rem;
`;

const FlowStatusTag = memo(({ children }: { children: FlowStatus }) => {
  const tagProps: TagProps = {
    [FlowStatus.PAID]: { $presetTheme: TagTheme.SUCCESS },
    [FlowStatus.UNPAID]: { $presetTheme: TagTheme.PROCESSING },
    [FlowStatus.REFUNDED]: { $presetTheme: TagTheme.WARNING },
    [FlowStatus.CANCELED]: { $presetTheme: TagTheme.INFO },
    [FlowStatus.INCOME]: { $presetTheme: TagTheme.SUCCESS },
  }[children];

  const text = FLOW_STATUS_LABEL_MAP[children];

  return <FlowTag {...tagProps}>{text}</FlowTag>;
});

const FlowAccount = memo(({ children }: { children: AccountType }) => {
  const name = ACCOUNT_TYPE_LABEL_MAP[children];
  return <FlowTag>{name}</FlowTag>;
});

const FlowCategoryTag = memo(({ children }: { children: FlowCategory }) => {
  const name = FLOW_CATEGORY_LABEL_MAP[children];
  return <FlowTag>{name}</FlowTag>;
});

interface HandleButtonsProps {
  flow: Flow;
  onDelete?: (id: Flow['id']) => void;
}

const HandleButtonList = styled(ButtonList)`
  padding-left: 1rem;
`;

function HandleButtons(props: HandleButtonsProps) {
  const { flow, onDelete } = props;
  const { id } = flow;
  const { setFlow } = useFlowStoreSlice('setFlow');

  return (
    <HandleButtonList
      wrapperProps={{ $alignItems: FlexAlign.CENTER }}
      buttons={[
        { text: '编辑', $presetTheme: ButtonTheme.PRIMARY, to: `/flow/editor/${id}`, onClick: () => setFlow(flow) },
        {
          text: '删除',
          $presetTheme: ButtonTheme.DANGER,
          logInfo: { id },
          onClick(e) {
            e.stopPropagation();
            onDelete?.(id);
          },
        },
      ]}
    />
  );
}

interface FlowPriceProps {
  $status: FlowStatus;
}

function getStatusColor(status: FlowStatus) {
  switch (status) {
    case FlowStatus.PAID:
      return 'var(--color-theme-7)';
    case FlowStatus.UNPAID:
      return 'var(--color-gray-6)';
    case FlowStatus.REFUNDED:
    case FlowStatus.INCOME:
      return '#52c41a';
    case FlowStatus.CANCELED:
      return 'var(--color-gray-5)';
    default:
      status satisfies never;
  }
}

const FlowPrice = styled(Price)<FlowPriceProps>`
  margin-right: 1rem;
  ${(props) => {
    const { $status } = props;
    return {
      color: getStatusColor($status),
      textDecoration: $status === FlowStatus.CANCELED ? 'line-through' : 'none',
    };
  }}
`;

export const FlowItem = memo((props: FlowItemProps) => {
  const { flow, onClick, onDelete } = props;

  return (
    <ItemWrapper onClick={onClick}>
      <HoverExpandBox rightArea={<HandleButtons flow={flow} onDelete={onDelete} />}>
        <FlexBox $flex="1" $alignItems={FlexAlign.CENTER}>
          <FlowStatusTag>{flow.status}</FlowStatusTag>
          <FlowAccount>{flow.account}</FlowAccount>
          <FlowCategoryTag>{flow.category}</FlowCategoryTag>
          <FlowPrice value={flow.amount} $status={flow.status} showPrefix />
          <ItemTitle>{flow.title}</ItemTitle>
        </FlexBox>
        <ItemDate>{flow.createTime}</ItemDate>
      </HoverExpandBox>
    </ItemWrapper>
  );
});
