import { ButtonList } from '@/components/button-list';
import { redo, resetSituation, saveSituation, undo } from './history';
import { getZGXQStore, useZGXQStoreSlice } from './state';

export function RightArea() {
  const { lockRotate } = useZGXQStoreSlice('lockRotate');
  return (
    <ButtonList
      buttons={[
        {
          text: '锁定旋转',
          checkBtn: {
            value: lockRotate,
            onChange: (e) => {
              console.debug(e);
              getZGXQStore().setLockRotate(e);
            },
          },
        },
        { text: '后退', noLog: true, onClick: undo },
        { text: '前进', noLog: true, onClick: redo },
        { text: '保存局势', noLog: true, onClick: saveSituation },
        { text: '恢复局势', noLog: true, onClick: resetSituation },
        { text: '重开', noLog: true, onClick: getZGXQStore().restart },
      ]}
    />
  );
}
