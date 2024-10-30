import { ButtonList } from '@/components/button-list';
import { History } from './history';
import { forceSaveStorage, setStorageItem } from '@/utils';
import { Drawer } from 'antd';
import { emitHistoryAction, HistoryActionType } from './subject';

export { HistoryItem, HistoryInfoWrapper } from './history';

interface HistoryDrawerProps {
  open: boolean;
  children: Parameters<typeof History>[0]['children'];
  storeKey: string;
  onClose?: () => void;
}

export function HistoryDrawer(props: HistoryDrawerProps) {
  const { open, storeKey, children, onClose } = props;

  return (
    <Drawer
      title="对局记录"
      onClose={onClose}
      open={open}
      width="40rem"
      styles={{ body: { padding: 'var(--page-padding)' } }}
      extra={
        <ButtonList
          buttons={[
            {
              text: '清空记录',
              async onClick() {
                await setStorageItem(storeKey, []);
                await forceSaveStorage();
                emitHistoryAction({ id: 'clear-history', type: HistoryActionType.RELOAD_HISTORY });
              },
            },
          ]}
        />
      }
    >
      <History storeKey={storeKey} children={children} />
    </Drawer>
  );
}
