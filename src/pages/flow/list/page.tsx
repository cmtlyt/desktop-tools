import { useEffect } from 'react';
import styled from 'styled-components';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FlowItem } from './flow-item';
import { useFlowStoreSlice } from '../store';
import { ButtonTheme, FlexBox, FlexDirection } from '@/components/base';
import { AccountType, Flow, FlowCategory, FlowStatus } from '@/types/flow';
import { ButtonList } from '@/components/button-list';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';

const FlowList = styled(FlexBox)`
  padding: 1.8rem;
`;

export function Component() {
  const loaderData = useLoaderData() as LoaderData;
  const { setFlow } = useFlowStoreSlice('setFlow');
  const { flows } = loaderData;

  const navigate = useNavigate();

  useEffect(() => {
    setFlow(void 0);
  }, [setFlow]);

  return (
    <AppearBox onFirstAppear={() => logger.appear('flow-list')}>
      <FlowList $direction={FlexDirection.column}>
        {flows.map((flow) => (
          <FlowItem
            key={flow.id}
            flow={flow}
            onClick={() => {
              setFlow(flow);
              navigate(`/flow/detail/${flow.id}`);
            }}
          />
        ))}
      </FlowList>
    </AppearBox>
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
        account: AccountType.ALIPAY,
        category: FlowCategory.CATERING,
        amount: (Math.random() * 10).toFixed(2),
        creator: '流水1创建人',
        createTime: '2024/09/18',
        updateTime: '2024/09/18',
        amountDistributions: [{ account: AccountType.ALIPAY, amount: (Math.random() * 10).toFixed(2) }],
      },
      {
        id: '2',
        title: '流水2',
        status: FlowStatus.INCOME,
        account: AccountType.ALIPAY,
        category: FlowCategory.CATERING,
        amount: (Math.random() * 10).toFixed(2),
        creator: '流水2创建人',
        createTime: '2024/09/18',
        updateTime: '2024/09/18',
        amountDistributions: [],
      },
      {
        id: '3',
        title: '流水3',
        status: FlowStatus.CANCELED,
        account: AccountType.ALIPAY,
        category: FlowCategory.CATERING,
        amount: (Math.random() * 10).toFixed(2),
        creator: '流水3创建人',
        createTime: '2024/09/18',
        updateTime: '2024/09/18',
        amountDistributions: [],
      },
      {
        id: '4',
        title: '流水4',
        status: FlowStatus.REFUNDED,
        account: AccountType.ALIPAY,
        category: FlowCategory.CATERING,
        amount: (Math.random() * 10).toFixed(2),
        creator: '流水4创建人',
        createTime: '2024/09/18',
        updateTime: '2024/09/18',
        amountDistributions: [],
      },
      {
        id: '5',
        title: '流水5',
        status: FlowStatus.UNPAID,
        account: AccountType.ALIPAY,
        category: FlowCategory.CATERING,
        amount: (Math.random() * 10).toFixed(2),
        creator: '流水5创建人',
        createTime: '2024/09/18',
        updateTime: '2024/09/18',
        amountDistributions: [],
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
