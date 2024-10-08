import { useEffect } from 'react';
import { isUndef } from '@cmtlyt/base';
import { useFlowStore } from './store';
import { useLayoutStore } from '@/store';
import { logger } from '@/utils';

export enum PageStatus {
  CREATE = 'create',
  EDITOR = 'editor',
  VIEW = 'view',
}

interface FlowFormProps {
  pageStatus?: PageStatus;
}

export function FlowForm(props: FlowFormProps) {
  const { pageStatus } = props;
  const { flow } = useFlowStore((state) => ({ flow: state.currentFlow }));
  const { showMessage } = useLayoutStore((store) => ({ showMessage: store.showMessage }));

  useEffect(() => {
    if (isUndef(flow) && pageStatus !== PageStatus.CREATE) {
      logger.error('非法访问');
      showMessage({ type: 'error', content: '非法访问, 系统将会记录本次访问' });
    }
  }, [flow, showMessage, pageStatus]);

  console.log(flow, pageStatus);

  return <div>flowForm</div>;
}
