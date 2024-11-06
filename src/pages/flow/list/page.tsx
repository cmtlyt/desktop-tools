import { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useLoaderData } from 'react-router-dom';
import { FlowItem } from './flow-item';
import { useFlowStoreSlice } from '../store';
import { ButtonTheme, FlexBox, FlexDirection } from '@/components/base';
import { Flow } from '@/types/flow';
import { ButtonList } from '@/components/button-list';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';
import { getFlowsStore, useFlowsStoreSlice } from '@/store';
import { useNavigate } from '@/hooks/use-navigate';
import { Switch } from '@/components/switch';
import { Empty } from '@/components/empty';

const FlowList = styled(FlexBox)`
  padding: var(--page-padding);
`;

function deleteFlowHandler(id: Flow['id']) {
  const { deleteFlow } = getFlowsStore();
  deleteFlow(id);
}

export function Component() {
  const loaderData = useLoaderData() as LoaderData;
  const { setFlow } = useFlowStoreSlice('setFlow');
  const { flows: storeFlows } = useFlowsStoreSlice('flows');
  const { flows: loadFlows } = loaderData;

  const navigate = useNavigate();

  const flows = useMemo(() => loadFlows || storeFlows, [storeFlows, loadFlows]);

  useEffect(() => {
    setFlow(void 0);
  }, [setFlow]);

  return (
    <AppearBox onFirstAppear={() => logger.appear('flow-list')}>
      <FlowList $direction={FlexDirection.COLUMN}>
        <Switch if={flows.length > 0} fullback={<Empty />}>
          {() =>
            flows.map((flow) => (
              <FlowItem
                key={flow.id}
                flow={flow}
                onDelete={deleteFlowHandler}
                onClick={() => {
                  setFlow(flow);
                  logger.click('flow-item-click', { id: flow.id });
                  navigate(`/flow/detail/${flow.id}`);
                }}
              />
            ))
          }
        </Switch>
      </FlowList>
    </AppearBox>
  );
}

interface LoaderData {
  flows?: Flow[] | null;
}

export async function loader(): Promise<LoaderData> {
  window.logger.todo('请求接口加载流水信息, 报错时使用本地存储中的流水信息');

  return {
    flows: null,
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
