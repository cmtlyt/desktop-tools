import { useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useEditorStoreSlice } from './store';
import { FlowForm, PageStatus } from '../flow-form';
import { ButtonList } from '@/components/button-list';
import { ButtonTheme, FlexBox } from '@/components/base';
import { useLayoutStoreSlice } from '@/store';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';

interface LoaderData {
  id?: string;
}

export function Component() {
  const { id } = useLoaderData() as LoaderData;
  const { setId: setEditorId } = useEditorStoreSlice('setId');

  const pageStatus = id ? PageStatus.EDITOR : PageStatus.CREATE;

  window.logger.todo('test');

  useEffect(() => {
    setEditorId(id || '');
  }, [setEditorId, id]);

  return (
    <AppearBox onFirstAppear={() => logger.appear('flow-editor', { id, pageStatus })}>
      <FlexBox>
        <FlowForm pageStatus={pageStatus} />
      </FlexBox>
    </AppearBox>
  );
}

function FlowEditorButtonArea() {
  const { id } = useEditorStoreSlice('id');
  const { showMessage } = useLayoutStoreSlice('showMessage');
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
            window.logger.todo('save id:', id);
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
