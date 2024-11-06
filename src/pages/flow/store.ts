import { Flow } from '@/types/flow';
import { createStoreAndHelper } from '@/utils/create-store-helper';

interface FlowStoreState {
  currentFlow?: Flow;
}

interface FlowStoreHandlers {
  setFlow: (flow?: Flow) => void;
}

export const {
  useStore: useFlowStore,
  useStoreSlice: useFlowStoreSlice,
  getState: getFlowStore,
} = createStoreAndHelper<FlowStoreState & FlowStoreHandlers>((set) => ({
  currentFlow: void 0,

  setFlow: (flow) => set({ currentFlow: flow }),
}));
