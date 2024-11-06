import { produce } from 'immer';
import { getRandomString } from '@cmtlyt/base';
import { FLOWS_STORAGE_KEY } from '@/constant';
import { EditorFlow, Flow } from '@/types/flow';
import { GetStore } from '@/types/store';
import { createPersist } from '@/utils/create-persist';
import { createStoreHelper } from '@/utils/create-store-helper';

interface FlowsStore {
  flows: Flow[];
}

interface FlowsStoreActions {
  addFlow: (flow: EditorFlow) => void;
  deleteFlow: (id: string) => void;
  updateFlow: (id: string, flow: EditorFlow) => void;
}

type Store = FlowsStore & FlowsStoreActions;

const getActions: GetStore<Store, FlowsStoreActions> = (set) => {
  return {
    addFlow: (flow) => {
      set((state) =>
        produce(state, (draft) => {
          const saveFlowFlow: Flow = {
            ...flow,
            id: `local-${getRandomString(16)}`,
            creator: 'test',
            account: flow.amountDistributions[0].account,
            amount: String(flow.amountDistributions.reduce((acc, cur) => acc + +cur.amount, 0)),
            createTime: new Date().toLocaleString(),
            updateTime: new Date().toLocaleString(),
          };
          draft.flows.unshift(saveFlowFlow);
        }),
      );
    },
    updateFlow: (id, flow) => {
      set((state) =>
        produce(state, (draft) => {
          const index = draft.flows.findIndex((flow) => flow.id === id);
          if (index < 0) return;
          draft.flows.splice(index, 1, {
            ...draft.flows[index],
            ...flow,
            id: draft.flows[index].id,
            amount: String(flow.amountDistributions.reduce((acc, cur) => acc + +cur.amount, 0)),
            updateTime: new Date().toLocaleString(),
          });
        }),
      );
    },
    deleteFlow: (id) => {
      set((state) =>
        produce(state, (draft) => {
          draft.flows.splice(
            draft.flows.findIndex((flow) => flow.id === id),
            1,
          );
        }),
      );
    },
  };
};

export const useFlowsStore = createPersist<Store>(FLOWS_STORAGE_KEY, (set, get) => ({
  flows: [] as Flow[],
  ...getActions(set, get),
}));

const { useStoreSlice, getState } = createStoreHelper(useFlowsStore);

export { useStoreSlice as useFlowsStoreSlice, getState as getFlowsStore };
