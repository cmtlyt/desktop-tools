import { DateView } from '@/components/date-view';

interface Flow {
  id: string;
  title: string;
  description: string;
  status: string;
  account: string;
  creator: string;
  createTime: string;
  updateTime: string;
}

const flows: Flow[] = [
  {
    id: '1',
    title: '流水1',
    description: '流水1描述',
    status: '流水1状态',
    account: '流水1账号',
    creator: '流水1创建人',
    createTime: '2024/09/18',
    updateTime: '2024/09/18',
  },
];

export function Component() {
  return (
    <section>
      {flows.map((flow) => (
        <div key={flow.id}>
          <h1>{flow.title}</h1>
          <p>{flow.description}</p>
          <p>{flow.status}</p>
          <p>{flow.account}</p>
          <p>{flow.creator}</p>
          <DateView>{flow.createTime}</DateView>
          <DateView>{flow.updateTime}</DateView>
        </div>
      ))}
    </section>
  );
}

export const handle = {
  title: '流水列表',
};
