import { Link } from 'react-router-dom';
import { FlexBox, FlexDirection, ShadowFlexBox } from '@/components/base';
import { DateView } from '@/components/date-view';

export enum FlowStatus {
  // 已支付
  PAID = 'PAID',
  // 待支付
  UNPAID = 'UNPAID',
  // 已退款
  REFUNDED = 'REFUNDED',
  // 已取消
  CANCELED = 'CANCELED',
  // 收入
  INCOME = 'INCOME',
}

export interface Flow {
  id: string;
  title: string;
  description?: string;
  status: FlowStatus;
  account: string;
  creator: string;
  createTime: string;
}

interface FlowItemProps {
  flow: Flow;
}

export function FlowItem(props: FlowItemProps) {
  const { flow } = props;

  return (
    <Link key={flow.id} to={`/flow/detail/${flow.id}`}>
      <ShadowFlexBox $direction={FlexDirection.column}>
        <FlexBox>
          <FlexBox $flex="1">
            <span>{flow.title}</span>
            <span>{flow.status}</span>
            <span>{flow.account}</span>
          </FlexBox>
          <DateView>{flow.createTime}</DateView>
        </FlexBox>
        {flow.description && (
          <FlexBox>
            <span>{flow.description}</span>
          </FlexBox>
        )}
      </ShadowFlexBox>
    </Link>
  );
}
