import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useEditorStore } from './store';
import { FlowForm, PageStatus } from '../flow-form';
import { ButtonList } from '@/components/button-list';
import { ButtonTheme, FlexBox } from '@/components/base';
import { useLayoutStore } from '@/store';
import { logger } from '@/utils';

interface LoaderData {
  id?: string;
}

export function Component() {
  const { id } = useLoaderData() as LoaderData;
  const { setEditorId } = useEditorStore((state) => ({ setEditorId: state.setId }));

  const pageStatus = id ? PageStatus.EDITOR : PageStatus.CREATE;

  useEffect(() => {
    setEditorId(id || '');
  }, [setEditorId, id]);

  return (
    <FlexBox>
      <FlowForm pageStatus={pageStatus} />
    </FlexBox>
  );
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
            logger.debug('save id:', id);
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

export async function loader({ params }: LoaderProps): Promise<LoaderData> {
  return {
    id: params.id,
  };
}
