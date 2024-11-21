import { useEffect, useMemo } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PageInfo } from '@/types/page-info';
import { RightArea } from './right-area';
import { RecordInfo } from '@/types/records';
import { useRecordStoreSlice } from '../store';
import { getRecordsStore, useRecordsStoreSlice } from '@/store';
import { useNavigate } from '@/hooks';
import { logger } from '@/utils';
import { Empty } from '@/components/empty';
import { Switch } from '@/components/switch';
import { PageListWrapper } from '@/components//base/list';
import { AppearBox } from '@/components/appear-box';
import { RecordItem } from './record-item';

function deleteNotepadHandler(id: RecordInfo['id']) {
  getRecordsStore().deleteRecord(id);
}

export function Component() {
  const loaderData = useLoaderData() as LoaderData;
  const { setRecord } = useRecordStoreSlice('setRecord');
  const { records: storeRecords } = useRecordsStoreSlice('records');
  const { records: loadRecords } = loaderData;

  const navigate = useNavigate();

  const records = useMemo(() => loadRecords || storeRecords, [storeRecords, loadRecords]);

  useEffect(() => {
    setRecord(void 0);
  }, [setRecord]);

  return (
    <AppearBox onFirstAppear={() => logger.appear('record-list')}>
      <PageListWrapper>
        <Switch when={records.length > 0} fullback={<Empty />}>
          {() =>
            records.map((recordItem) => (
              <RecordItem
                key={recordItem.id}
                recordInfo={recordItem}
                onClick={() => {
                  setRecord(recordItem);
                  logger.click('record-item-click', { id: recordItem.id });
                  navigate(`/recorder/playback/${recordItem.id}`);
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

export const handle: PageInfo = {
  title: '记录',
  rightArea: <RightArea />,
};

interface LoaderData {
  records?: RecordInfo[] | null;
}

export async function loader(): Promise<LoaderData> {
  window.logger.todo('请求接口加载笔记信息, 报错时使用本地存储中的笔记信息');

  return {
    records: null,
  };
}
