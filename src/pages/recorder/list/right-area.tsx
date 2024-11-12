import { ButtonTheme } from '@/components/base';
import { ButtonList } from '@/components/button-list';

export function RightArea() {
  return (
    <ButtonList
      buttons={[
        {
          text: '录制',
          $presetTheme: ButtonTheme.PRIMARY,
          to: '/recorder/recording',
        },
      ]}
    />
  );
}
