import { useCallback, useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { getEditorStore, useEditorStoreSlice } from './store';
import { FlowForm, FlowFormRef, PageStatus } from '../flow-form';
import { ButtonList } from '@/components/button-list';
import { ButtonTheme, FlexBox } from '@/components/base';
import { getFlowsStore, getLayoutStore } from '@/store';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';
import { EditorFlow } from '@/types/flow';
import { ActionType, emitEditorAction, useSubscribeEditorAction } from './subject';
import { useNavigate } from '@/hooks';

interface LoaderData {
  id: string;
}

const EditorWrapper = styled(FlexBox)`
  padding: var(--page-padding);
`;

export function Component() {
  const { id } = useLoaderData() as LoaderData;
  const { setId: setEditorId } = useEditorStoreSlice('setId');
  const formRef = useRef({} as FlowFormRef);
  const [disabled, setDisabled] = useState(false);

  const pageStatus = id ? PageStatus.EDITOR : PageStatus.CREATE;

  useEffect(() => {
    setEditorId(id || '');
  }, [setEditorId, id]);

  useSubscribeEditorAction((action) => {
    if (action.id !== id) return logger.error('action.id !== id', action);
    formRef.current.form.validateFields().then(() => {
      formRef.current.form.submit();
      setDisabled(true);
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
      <EditorWrapper>
        <FlowForm ref={formRef} disabled={disabled} pageStatus={pageStatus} onFinish={onFinish} />
      </EditorWrapper>
    </AppearBox>
  );
}

function FlowEditorButtonArea() {
  const { id } = useEditorStoreSlice('id');
  const navigate = useNavigate();

  useSubscribeEditorAction((action) => {
    if (action.id !== id) return logger.error('action.id !== id', action);
    getLayoutStore().showMessage({
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
