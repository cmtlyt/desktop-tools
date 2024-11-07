import { ButtonTheme } from '@/components/base';
import { ButtonList } from '@/components/button-list';
import { ActionType, emitEditorAction } from './subject';

export function RightArea() {
  return (
    <ButtonList
      buttons={[
        {
          text: '保存',
          $presetTheme: ButtonTheme.PRIMARY,
          onClick: () => emitEditorAction({ id: 'notepad-editor-save', type: ActionType.SAVE }),
        },
      ]}
    />
  );
}
