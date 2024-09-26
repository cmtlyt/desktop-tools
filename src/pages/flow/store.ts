import { Flow } from '@/types/flow';
import { create } from 'zustand';

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
