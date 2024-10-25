import { MessageArgsProps } from 'antd';
import { create } from 'zustand';
import { useSelector } from '@/hooks';
import { Many } from '@/types';

interface LayoutStore {
  messageInfo: MessageArgsProps | null;
  expandAside: boolean;
}

interface LayoutStoreActions {
  showMessage: (messageInfo: MessageArgsProps) => void;
  setExpandAside: (expandAside: boolean) => void;
}

export const useLayoutStore = create<LayoutStore & LayoutStoreActions>((set) => ({
  messageInfo: null,
  expandAside: true,

  showMessage: (messageInfo) => set({ messageInfo }),
  setExpandAside: (expandAside) => set({ expandAside }),
}));

type StoreKeys = Many<keyof (LayoutStore & LayoutStoreActions)>;

export const useLayoutStoreSlice = (keys: StoreKeys) => {
  return useLayoutStore(useSelector(keys));
};

export function getLayoutStore() {
  return useLayoutStore.getState();
}
