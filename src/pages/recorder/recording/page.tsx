import { useEffect, useRef } from 'react';
import { PageInfo } from '@/types/page-info';
import { RightArea } from './right-area';
import { TitleArea } from './title-area';
import { ActionType, useSubscribeRecordingAction } from './subject';
import { getRecordsStore } from '@/store';
import { getRecordingInfoStore, useRecordingInfoStoreSlice } from './store';
import { getResultString } from './util';
import { AppearBox } from '@/components/appear-box';
import { logger } from '@/utils';

export function Component() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { stream } = useRecordingInfoStoreSlice('stream');

  useSubscribeRecordingAction(() => {
    const { addRecord } = getRecordsStore();
    const { name, url, clear } = getRecordingInfoStore();
    if (!name) return;
    clear();
    setTimeout(() => {
      console.debug(getRecordingInfoStore());
    }, 1000);
    if (url) return addRecord({ name, url });
    getResultString().then((content) => addRecord({ name, content }));
  }, ActionType.RECORD_END);

  useEffect(() => {
    if (!videoRef.current) return;
    if (!stream) return;
    videoRef.current.srcObject = stream;
  }, [stream]);

  return (
    <AppearBox onFirstAppear={() => logger.appear('recording')}>
      <video ref={videoRef} muted autoPlay></video>
    </AppearBox>
  );
}

export const handle: PageInfo = {
  title: '录制器',
  needBackIcon: true,
  rightArea: <RightArea />,
  titleArea: <TitleArea />,
};
