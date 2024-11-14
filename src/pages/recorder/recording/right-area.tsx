import styled from 'styled-components';
import { ButtonList } from '@/components/button-list';
import { startRecord, stopRecord } from './util';
import { useRecordingInfoStoreSlice } from './store';
import { ButtonTheme } from '@/components/base';

const TipText = styled.span``;

export function RightArea() {
  const { name, recorder } = useRecordingInfoStoreSlice(['name', 'recorder']);
  if (!name) return <TipText>请先输入视频名称</TipText>;

  return (
    <ButtonList
      buttons={[
        {
          text: '停止录制',
          $presetTheme: ButtonTheme.DANGER,
          hidden: !recorder,
          onClick: () => stopRecord(),
        },
        {
          text: '保存录制',
          $presetTheme: ButtonTheme.PRIMARY,
          hidden: !!recorder,
          onClick: () => startRecord(),
        },
      ]}
    />
  );
}
