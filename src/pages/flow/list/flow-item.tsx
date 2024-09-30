import { memo } from 'react';
import styled from 'styled-components';
import { ButtonTheme, FlexAlign, FlexBox, ShadowFlexBox, Tag, TagProps, TagTheme } from '@/components/base';
import { DateView } from '@/components/date-view';
import { Flow, FlowStatus } from '@/types/flow';
import { HoverExpandBox } from '@/components/hover-expand-box';
import { ButtonList } from '@/components/button-list';
import { Price } from '@/components/price';
import { useFlowStore } from '../store';

interface FlowItemProps {
  flow: Flow;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const FlowTag = styled(Tag)`
  margin-right: 1rem;
`;

const FlowStatusTag = memo(({ children }: { children: FlowStatus }) => {
  const { text, ...tagProps }: TagProps & { text: string } = {
    [FlowStatus.PAID]: { $presetTheme: TagTheme.SUCCESS, text: '已支付' },
    [FlowStatus.UNPAID]: { $presetTheme: TagTheme.PROCESSING, text: '待支付' },
    [FlowStatus.REFUNDED]: { $presetTheme: TagTheme.WARNING, text: '已退款' },
    [FlowStatus.CANCELED]: { $presetTheme: TagTheme.INFO, text: '已取消' },
    [FlowStatus.INCOME]: { $presetTheme: TagTheme.SUCCESS, text: '收入' },
  }[children];

  return <FlowTag {...tagProps}>{text}</FlowTag>;
});

const FlowDate = styled(DateView)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const FlowTitle = styled.span`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const FlowWrapper = styled(ShadowFlexBox)`
  padding: 0 2rem 0 1rem;
  margin-bottom: 1rem;
  height: 4.8rem;
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`;

interface HandleButtonsProps {
  flow: Flow;
}

const HandleButtonList = styled(ButtonList)`
  padding-left: 1rem;
`;

function HandleButtons(props: HandleButtonsProps) {
  const { flow } = props;
  const { id } = flow;
  const setFlow = useFlowStore((state) => state.setFlow);

  return (
    <HandleButtonList
      wrapperProps={{ $alignItems: FlexAlign.center }}
      buttons={[
        { text: '编辑', $presetTheme: ButtonTheme.PRIMARY, to: `/flow/editor/${id}`, onClick: () => setFlow(flow) },
        {
          text: '删除',
          $presetTheme: ButtonTheme.DANGER,
          onClick(e) {
            e.stopPropagation();
            window.logger.todo('delete id:', id);
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

export function FlowItem(props: FlowItemProps) {
  const { flow, onClick } = props;

  return (
    <FlowWrapper key={flow.id} onClick={onClick}>
      <HoverExpandBox rightArea={<HandleButtons flow={flow} />}>
        <FlexBox $flex="1" $alignItems={FlexAlign.center}>
          <FlowStatusTag>{flow.status}</FlowStatusTag>
          <FlowTag>{flow.account}</FlowTag>
          <FlowPrice value={flow.amount} $status={flow.status} showPrefix />
          <FlowTitle>{flow.title}</FlowTitle>
        </FlexBox>
        <FlowDate>{flow.createTime}</FlowDate>
      </HoverExpandBox>
    </FlowWrapper>
  );
}
