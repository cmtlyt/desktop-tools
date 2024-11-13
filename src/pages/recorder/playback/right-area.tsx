import { ButtonList } from '@/components/button-list';
import { download } from './util';

export function RightArea() {
  return (
    <ButtonList
      buttons={[
        {
          text: '下载',
          onClick: download,
        },
      ]}
    />
  );
}
