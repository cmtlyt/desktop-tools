import { produce } from 'immer';
import { getRandomString } from '@cmtlyt/base';
import { FLOWS_STORAGE_KEY } from '@/constant';
import { EditorFlow, Flow } from '@/types/flow';
import { GetStore } from '@/types/store';
import { createPersist, createStoreHelper } from '@/utils';

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
          const saveFlow: Flow = {
            ...flow,
            id: `local-${getRandomString(16)}`,
            creator: 'test',
            account: flow.amountDistributions[0].account,
            amount: String(flow.amountDistributions.reduce((acc, cur) => acc + +cur.amount, 0)),
            createTime: Date.now(),
            updateTime: Date.now(),
          };
          draft.flows.unshift(saveFlow);
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
            updateTime: Date.now(),
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

export const useFlowsStore = createPersist<Store>(FLOWS_STORAGE_KEY, (set, get, store) => ({
  flows: [] as Flow[],
  ...getActions(set, get, store),
}));

export const { useStoreSlice: useFlowsStoreSlice, getStore: getFlowsStore } = createStoreHelper(useFlowsStore);
