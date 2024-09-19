import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexAlign, FlexBox, ShadowFlexBox, Tag, TagProps, TagTheme } from '@/components/base';
import { DateView } from '@/components/date-view';
import { Flow, FlowStatus } from '@/types/flow';

interface FlowItemProps {
  flow: Flow;
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

const FlowInfo = styled(FlexBox)`
  padding: 1rem 0;
`;

const FlowDate = styled(DateView)`
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
  line-height: 1;
  background: #fff;
  border-radius: 0.8rem;
`;

export function FlowItem(props: FlowItemProps) {
  const { flow } = props;

  return (
    <Link key={flow.id} to={`/flow/detail/${flow.id}`}>
      <FlowWrapper $alignItems={FlexAlign.center}>
        <FlowInfo $flex="1" $alignItems={FlexAlign.center}>
          <FlowStatusTag>{flow.status}</FlowStatusTag>
          <FlowTag>{flow.account}</FlowTag>
          <FlowTitle>{flow.title}</FlowTitle>
        </FlowInfo>
        <FlowDate>{flow.createTime}</FlowDate>
      </FlowWrapper>
    </Link>
  );
}
