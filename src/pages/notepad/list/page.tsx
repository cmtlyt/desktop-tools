import { useEffect, useMemo } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AppearBox } from '@/components/appear-box';
import { ButtonTheme } from '@/components/base';
import { logger } from '@/utils';
import { useNavigate } from '@/hooks';
import { useNotepadStoreSlice } from '../store';
import { getNotepadsStore, useNotepadsStoreSlice } from '@/store';
import { Notepad } from '@/types/notepad';
import { ButtonList } from '@/components/button-list';
import { Switch } from '@/components/switch';
import { Empty } from '@/components/empty';
import { NotepadItem } from './notepad-item';
import { PageInfo } from '@/types/page-info';
import { PageListWrapper } from '@/components//base/list';

function deleteNotepadHandler(id: Notepad['id']) {
  getNotepadsStore().deleteNotepad(id);
}

export function Component() {
  const loaderData = useLoaderData() as LoaderData;
  const { setNotepad } = useNotepadStoreSlice('setNotepad');
  const { notepads: storeNotepads } = useNotepadsStoreSlice('notepads');
  const { notepads: loadNotepads } = loaderData;

  const navigate = useNavigate();

  const notepads = useMemo(() => loadNotepads || storeNotepads, [storeNotepads, loadNotepads]);

  useEffect(() => {
    setNotepad(void 0);
  }, [setNotepad]);

  return (
    <AppearBox onFirstAppear={() => logger.appear('notepad-list')}>
      <PageListWrapper>
        <Switch when={notepads.length > 0} fullback={<Empty />}>
          {() =>
            notepads.map((notepad) => (
              <NotepadItem
                key={notepad.id}
                notepad={notepad}
                onClick={() => {
                  setNotepad(notepad);
                  logger.click('notepad-item-click', { id: notepad.id });
                  navigate(`/notepad/preview/${notepad.id}`);
                }}
                onDelete={deleteNotepadHandler}
              />
            ))
          }
        </Switch>
      </PageListWrapper>
    </AppearBox>
  );
}

function ListButtonArea() {
  return <ButtonList buttons={[{ text: '新建', to: '/notepad/editor', $presetTheme: ButtonTheme.PRIMARY }]} />;
}

export const handle: PageInfo = {
  title: '笔记列表',
  crumbLabel: '列表',
  rightArea: <ListButtonArea />,
};

interface LoaderData {
  notepads?: Notepad[] | null;
}

export async function loader(): Promise<LoaderData> {
  window.logger.todo('请求接口加载笔记信息, 报错时使用本地存储中的笔记信息');

  return {
    notepads: null,
  };
}
