import { Button, FlexBox } from '@/components/base';
import { Link, useLoaderData } from 'react-router-dom';
import { useDetailStore } from './store';
import { useEffect } from 'react';

interface LoaderData {
  id: string;
}

export function Component() {
  const data = useLoaderData() as LoaderData;
  const { setDetailId } = useDetailStore((state) => ({ setDetailId: state.setId }));

  useEffect(() => {
    setDetailId(data.id);
  }, [data.id, setDetailId]);

  return <div>flow detail id: {data.id}</div>;
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

  return (
    <FlexBox>
      <Link to={`/flow/editor/${id}`}>
        <Button>编辑</Button>
      </Link>
    </FlexBox>
  );
}

export const handle = {
  title: '流水详情',
  crumbLabel: '详情',
  needBackIcon: true,
  rightArea: <FlowDetailButtonArea />,
};
