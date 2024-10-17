import { create } from 'zustand';
import { useSelector } from '@/hooks';
import { Many } from '@/types';
import { Flow } from '@/types/flow';

interface FlowStoreState {
  currentFlow?: Flow;
}

interface FlowStoreHandlers {
  setFlow: (flow?: Flow) => void;
}

export const useFlowStore = create<FlowStoreState & FlowStoreHandlers>((set) => ({
  currentFlow: void 0,

  setFlow: (flow) => set({ currentFlow: flow }),
}));

type StoreKeys = Many<keyof (FlowStoreState & FlowStoreHandlers)>;

export const useFlowStoreSlice = (keys: StoreKeys) => {
  return useFlowStore(useSelector(keys));
};
