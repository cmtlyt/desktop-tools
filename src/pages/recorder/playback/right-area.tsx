import { ButtonList } from '@/components/button-list';

export function RightArea() {
  return (
    <ButtonList
      buttons={[
        {
          text: '下载',
          onClick() {
            window.logger.todo('下载视频');
          },
        },
      ]}
    />
  );
}
