import { useLoaderData } from 'react-router-dom';
import { PageInfo } from '@/types/page-info';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';
import { AutoLoadEditor } from '../auto-load-editor';
import { getNotepadStore } from '../store';
import { unGzip } from '@cmtlyt/string-zip';
import { RightArea } from './right-area';
import { TitleArea } from '../editor/title-area';

export function Component() {
  const loaderData = useLoaderData() as LoaderData;

  return (
    <AppearBox
      onFirstAppear={() => logger.appear('notepad-preview', { id: loaderData.id, isShare: loaderData.isShare })}
    >
      <AutoLoadEditor readOnly />
    </AppearBox>
  );
}

export const handle: PageInfo = {
  title: '预览笔记',
  crumbLabel: '预览',
  needBackIcon: true,
  rightArea: <RightArea />,
  titleArea: <TitleArea readOnly />,
};

interface LoaderParams {
  params: {
    id?: string;
    source?: string;
  };
}

export interface LoaderData {
  id?: string;
  isShare?: boolean;
}

export async function loader({ params }: LoaderParams): Promise<LoaderData> {
  const { source } = params;

  if (source) {
    unGzip(source).then((notepad) => {
      getNotepadStore().setNotepad(JSON.parse(notepad));
    });
  }

  return {
    id: params.id,
    isShare: !!source,
  };
}
