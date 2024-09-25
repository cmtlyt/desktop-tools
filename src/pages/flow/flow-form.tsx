import { Flow } from '@/types/flow';

export enum PageStatus {
  CREATE = 'create',
  EDITOR = 'editor',
  VIEW = 'view',
}

interface FlowFormProps {
  flow?: Flow;
  pageStatus?: PageStatus;
}

export function FlowForm(props: FlowFormProps) {
  const { flow, pageStatus } = props;
  console.log(flow, pageStatus);

  return <div>flowForm</div>;
}
