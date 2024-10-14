import { MessageArgsProps } from 'antd';
import { create } from 'zustand';
import { useSelector } from '@/hooks/use-selector';
import { Many } from '@/types';

interface LayoutStore {
  messageInfo: MessageArgsProps | null;
}

interface LayoutStoreActions {
  showMessage: (messageInfo: MessageArgsProps) => void;
}

export const useLayoutStore = create<LayoutStore & LayoutStoreActions>((set) => ({
  messageInfo: null,

  showMessage: (messageInfo) => set({ messageInfo }),
}));

type StoreKeys = Many<keyof (LayoutStore & LayoutStoreActions)>;

export const useLayoutStoreSlice = (keys: StoreKeys) => {
  return useLayoutStore(useSelector(keys));
};
