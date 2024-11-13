import { PageInfo } from '@/types/page-info';
import { RightArea } from './right-area';
import { TitleArea } from './title-area';
import { ActionType, useSubscribeRecordingAction } from './subject';
import { getRecordsStore } from '@/store';
import { getRecordingInfoStore } from './store';
import { getResultString } from './util';

export function Component() {
  useSubscribeRecordingAction(() => {
    const { addRecord } = getRecordsStore();
    const { name, clear } = getRecordingInfoStore();
    if (!name) return;
    getResultString().then((content) => {
      clear();
      addRecord({ name, content });
    });
  }, ActionType.RECORD_END);

  return <div>录制中</div>;
}

export const handle: PageInfo = {
  title: '录制器',
  needBackIcon: true,
  rightArea: <RightArea />,
  titleArea: <TitleArea />,
};
