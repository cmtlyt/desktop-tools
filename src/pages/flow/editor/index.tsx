import { Button, FlexBox } from '@/components/base';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useEditorStore } from './store';
import { useEffect } from 'react';

interface LoaderData {
  id: string;
}

export function Component() {
  const data = useLoaderData() as LoaderData;
  const { setEditorId } = useEditorStore((state) => ({ setEditorId: state.setId }));

  useEffect(() => {
    setEditorId(data.id);
  }, [setEditorId, data.id]);

  return <div>editor {data.id}</div>;
}

function FlowEditorButtonArea() {
  const { id } = useEditorStore((state) => ({ id: state.id }));
  const navigate = useNavigate();

  return (
    <FlexBox>
      <Button onClick={() => navigate(-1)}>取消</Button>
      <Button onClick={() => console.debug('save id:', id)}>保存</Button>
    </FlexBox>
  );
}

export const handle = {
  title: '编辑',
  needBackIcon: true,
  rightArea: <FlowEditorButtonArea />,
};

interface LoaderProps {
  params: {
    id?: string;
  };
}

export async function loader({ params }: LoaderProps) {
  return {
    id: params.id,
  };
}
