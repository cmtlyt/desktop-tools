import styled from 'styled-components';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ButtonTheme, FlexBox, FlexDirection } from '@/components/base';
import { Flow, FlowStatus } from '@/types/flow';
import { ButtonList } from '@/components/button-list';
import { FlowItem } from './flow-item';

const FlowList = styled(FlexBox)`
  padding: 1.8rem;
`;

export function Component() {
  const loaderData = useLoaderData() as LoaderData;
  const { flows } = loaderData;

  const navigate = useNavigate();

  return (
    <FlowList $direction={FlexDirection.column}>
      {flows.map((flow) => (
        <FlowItem key={flow.id} flow={flow} onClick={() => navigate(`/flow/detail/${flow.id}`)} />
      ))}
    </FlowList>
  );
}

interface LoaderData {
  flows: Flow[];
}

export async function loader(): Promise<LoaderData> {
  return {
    flows: [
      {
        id: '1',
        title:
          '流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1',
        status: FlowStatus.PAID,
        account: '流水1账号',
        amount: (Math.random() * 10).toFixed(2),
        creator: '流水1创建人',
        createTime: '2024/09/18',
        updateTime: '2024/09/18',
      },
      {
        id: '2',
        title: '流水2',
        status: FlowStatus.INCOME,
        account: '流水2账号',
        amount: (Math.random() * 10).toFixed(2),
        creator: '流水2创建人',
        createTime: '2024/09/18',
        updateTime: '2024/09/18',
      },
      {
        id: '3',
        title: '流水3',
        status: FlowStatus.CANCELED,
        account: '流水3账号',
        amount: (Math.random() * 10).toFixed(2),
        creator: '流水3创建人',
        createTime: '2024/09/18',
        updateTime: '2024/09/18',
      },
      {
        id: '4',
        title: '流水4',
        status: FlowStatus.REFUNDED,
        account: '流水4账号',
        amount: (Math.random() * 10).toFixed(2),
        creator: '流水4创建人',
        createTime: '2024/09/18',
        updateTime: '2024/09/18',
      },
      {
        id: '5',
        title: '流水5',
        status: FlowStatus.UNPAID,
        account: '流水5账号',
        amount: (Math.random() * 10).toFixed(2),
        creator: '流水5创建人',
        createTime: '2024/09/18',
        updateTime: '2024/09/18',
      },
    ],
  };
}

function ListButtonArea() {
  return <ButtonList buttons={[{ text: '新建', to: '/flow/editor', $presetTheme: ButtonTheme.PRIMARY }]} />;
}

export const handle = {
  title: '流水列表',
  crumbLabel: '列表',
  rightArea: <ListButtonArea />,
};
