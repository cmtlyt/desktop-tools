import { FlexBox, FlexDirection, ShadowFlexBox } from '@/components/base';
import { DateView } from '@/components/date-view';
import { Link } from 'react-router-dom';

enum FlowStatus {
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

interface Flow {
  id: string;
  title: string;
  description?: string;
  status: FlowStatus;
  account: string;
  creator: string;
  createTime: string;
}

const flows: Flow[] = [
  {
    id: '1',
    title: '流水1',
    description: '流水1描述',
    status: FlowStatus.PAID,
    account: '流水1账号',
    creator: '流水1创建人',
    createTime: '2024/09/18',
  },
  {
    id: '2',
    title: '流水2',
    status: FlowStatus.INCOME,
    account: '流水2账号',
    creator: '流水2创建人',
    createTime: '2024/09/18',
  },
];

export function Component() {
  return (
    <FlexBox $direction={FlexDirection.column}>
      {flows.map((flow) => (
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
      ))}
    </FlexBox>
  );
}

export const handle = {
  title: '列表',
};
