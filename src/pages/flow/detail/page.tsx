import { useLoaderData } from 'react-router-dom';
import { useDetailStore } from './store';
import { useEffect } from 'react';
import { ButtonList } from '@/components/button-list';
import { FlowForm, PageStatus } from '../flow-form';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';

interface LoaderData {
  id: string;
}

export function Component() {
  const { id } = useLoaderData() as LoaderData;
  const { setDetailId } = useDetailStore((state) => ({ setDetailId: state.setId }));

  useEffect(() => {
    setDetailId(id);
  }, [id, setDetailId]);

  return (
    <AppearBox onFirstAppear={() => logger.appear('flow-detail', { id })}>
      <FlowForm pageStatus={PageStatus.VIEW} />
    </AppearBox>
  );
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
