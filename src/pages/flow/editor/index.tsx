import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useEditorStore } from './store';
import { ButtonList } from '@/components/button-list';
import { ButtonTheme } from '@/components/base';
import { useLayoutStore } from '@/store';

interface LoaderData {
  id: string;
}

export function Component() {
  const data = useLoaderData() as LoaderData;
  const { setEditorId } = useEditorStore((state) => ({ setEditorId: state.setId }));

  useEffect(() => {
    setEditorId(data.id);
  }, [setEditorId, data.id]);

  return <div>editor {data.id || '新建'}</div>;
}

function FlowEditorButtonArea() {
  const { id } = useEditorStore((state) => ({ id: state.id }));
  const { showMessage } = useLayoutStore((state) => ({ showMessage: state.showMessage }));
  const navigate = useNavigate();

  return (
    <ButtonList
      buttons={[
        {
          text: '取消',
          onClick() {
            navigate(-1);
          },
        },
        {
          text: '保存',
          $presetTheme: ButtonTheme.PRIMARY,
          onClick() {
            console.debug('save id:', id);
            showMessage({
              type: 'success',
              content: '保存成功',
              onClose() {
                navigate('/flow');
              },
            });
          },
        },
      ]}
    />
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
