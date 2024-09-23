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

export async function loader() {
  return {
    flows: [
      {
        id: '1',
        title:
          '流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1',
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
