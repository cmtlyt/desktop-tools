import { PageInfo } from '@/types/page-info';
import { RightArea } from './right-area';
import { TitleArea } from './title-area';
import { ActionType, useSubscribeRecordingAction } from './subject';
import { getRecordsStore } from '@/store';
import { getRecordingInfoStore, useRecordingInfoStoreSlice } from './store';
import { getResultString } from './util';
import { useEffect, useRef } from 'react';

export function Component() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { stream } = useRecordingInfoStoreSlice('stream');

  useSubscribeRecordingAction(() => {
    const { addRecord } = getRecordsStore();
    const { name, clear } = getRecordingInfoStore();
    if (!name) return;
    getResultString().then((content) => {
      clear();
      addRecord({ name, content });
    });
  }, ActionType.RECORD_END);

  useEffect(() => {
    if (!videoRef.current) return;
    if (!stream) return;
    videoRef.current.srcObject = stream;
  }, [stream]);

  return <video ref={videoRef} muted autoPlay></video>;
}

export const handle: PageInfo = {
  title: '录制器',
  needBackIcon: true,
  rightArea: <RightArea />,
  titleArea: <TitleArea />,
};
