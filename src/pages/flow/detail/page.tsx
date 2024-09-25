import { useLoaderData } from 'react-router-dom';
import { useDetailStore } from './store';
import { useEffect } from 'react';
import { ButtonList } from '@/components/button-list';
import { FlowForm, PageStatus } from '../flow-form';
import { Flow, FlowStatus } from '@/types/flow';

interface LoaderData {
  id: string;
  flow: Flow;
}

export function Component() {
  const { id, flow } = useLoaderData() as LoaderData;
  const { setDetailId } = useDetailStore((state) => ({ setDetailId: state.setId }));

  useEffect(() => {
    setDetailId(id);
  }, [id, setDetailId]);

  return <FlowForm flow={flow} pageStatus={PageStatus.VIEW} />;
}

interface LoaderParams {
  params: Params;
}

interface Params {
  id: string;
}

export async function loader({ params }: LoaderParams): Promise<LoaderData> {
  return {
    id: params.id,
    flow: {
      id: params.id,
      title:
        '流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1流水1',
      status: FlowStatus.PAID,
      account: '流水1账号',
      amount: (Math.random() * 10).toFixed(2),
      creator: '流水1创建人',
      createTime: '2024/09/18',
      updateTime: '2024/09/18',
    },
  };
}

function FlowDetailButtonArea() {
  const { id } = useDetailStore((state) => ({ id: state.id }));

  return <ButtonList buttons={[{ text: '编辑', to: `/flow/editor/${id}` }]} />;
}

export const handle = {
  title: '流水详情',
  crumbLabel: '详情',
  needBackIcon: true,
  rightArea: <FlowDetailButtonArea />,
};
