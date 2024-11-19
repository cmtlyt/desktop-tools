import { ButtonList } from '@/components/button-list';
import { redo, undo } from './history';
import { getZGXQStore } from './state';

export function RightArea() {
  return (
    <ButtonList
      buttons={[
        { text: '后退', noLog: true, onClick: undo },
        { text: '前进', noLog: true, onClick: redo },
        { text: '重开', noLog: true, onClick: getZGXQStore().restart },
      ]}
    />
  );
}
