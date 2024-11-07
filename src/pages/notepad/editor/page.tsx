import { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { gzip } from '@cmtlyt/string-zip';
import { PageInfo } from '@/types/page-info';
import { EditorRef } from '@/components/editor';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';
import { RightArea } from './right-area';
import { ActionType, useSubscribeEditorAction } from './subject';
import { getLayoutStore, getNotepadsStore } from '@/store';
import { useNavigate } from '@/hooks';
import { AutoLoadEditor } from '../auto-load-editor';
import { TitleArea } from './title-area';
import { getNotepadEditorStore } from './store';

export function Component() {
  const { id } = useLoaderData() as LoaderData;
  const editorRef = useRef<EditorRef>(null);
  const navigate = useNavigate();

  useSubscribeEditorAction(async () => {
    const content = editorRef.current?.getMarkdown();
    if (!content) return;
    logger.event('notepad-editor-save', { id });
    const zipContent = await gzip(content);
    const { title } = getNotepadEditorStore();
    const notepadInfo = { id, title, content: zipContent };
    if (id) getNotepadsStore().updateNotepad(id, notepadInfo);
    else getNotepadsStore().addNotepad(notepadInfo);
    getLayoutStore().showMessage({ content: '保存成功', type: 'success', onClose: () => navigate(-1) });
  }, ActionType.SAVE);

  return (
    <AppearBox onFirstAppear={() => logger.appear('notepad-editor')}>
      <AutoLoadEditor ref={editorRef} />
    </AppearBox>
  );
}

export const handle: PageInfo = {
  title: '编辑笔记',
  crumbLabel: '编辑',
  needBackIcon: true,
  rightArea: <RightArea />,
  titleArea: <TitleArea />,
};

interface LoaderParams {
  params: {
    id?: string;
  };
}

export interface LoaderData {
  id?: string;
}

export async function loader({ params }: LoaderParams): Promise<LoaderData> {
  return {
    id: params.id,
  };
}
