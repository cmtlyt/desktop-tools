import { useCallback, useEffect, useRef } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getEditorStore, useEditorStoreSlice } from './store';
import { FlowForm, FlowFormRef, PageStatus } from '../flow-form';
import { ButtonList } from '@/components/button-list';
import { ButtonTheme, FlexBox } from '@/components/base';
import { getFlowsStore, useLayoutStoreSlice } from '@/store';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';
import { EditorFlow } from '@/types/flow';
import { ActionType, emitEditorAction, useSubscribeEditorAction } from './subject';

interface LoaderData {
  id: string;
}

export function Component() {
  const { id } = useLoaderData() as LoaderData;
  const { setId: setEditorId } = useEditorStoreSlice('setId');
  const formRef = useRef({} as FlowFormRef);

  const pageStatus = id ? PageStatus.EDITOR : PageStatus.CREATE;

  useEffect(() => {
    setEditorId(id || '');
  }, [setEditorId, id]);

  useSubscribeEditorAction((action) => {
    if (action.id !== id) return logger.error('action.id !== id', action);
    formRef.current.form.validateFields().then(() => {
      formRef.current.form.submit();
    });
  }, ActionType.SAVE);

  const onFinish = useCallback((flowInfo: EditorFlow) => {
    const { id } = getEditorStore();
    const { addFlow, updateFlow } = getFlowsStore();
    if (id.length) {
      updateFlow(id, flowInfo);
    } else {
      addFlow(flowInfo);
    }
    emitEditorAction({ id, type: ActionType.SAVE_SUCCESS });
  }, []);

  return (
    <AppearBox onFirstAppear={() => logger.appear('flow-editor', { id, pageStatus })}>
      <FlexBox>
        <FlowForm ref={formRef} pageStatus={pageStatus} onFinish={onFinish} />
      </FlexBox>
    </AppearBox>
  );
}

function FlowEditorButtonArea() {
  const { id } = useEditorStoreSlice('id');
  const { showMessage } = useLayoutStoreSlice('showMessage');
  const navigate = useNavigate();

  useSubscribeEditorAction((action) => {
    if (action.id !== id) return logger.error('action.id !== id', action);
    showMessage({
      type: 'success',
      content: '保存成功',
      onClose() {
        navigate('/flow');
      },
    });
  }, ActionType.SAVE_SUCCESS);

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
            emitEditorAction({ id, type: ActionType.SAVE });
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
    id: params.id || '',
  };
}
