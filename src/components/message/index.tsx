import { message } from 'antd';
import { useEffect } from 'react';
import { useLayoutStoreSlice } from '@/store';

export function Message() {
  const [messageApi, contextHolder] = message.useMessage();
  const { messageInfo } = useLayoutStoreSlice('messageInfo');

  useEffect(() => {
    if (!messageInfo) return;
    messageApi.open(messageInfo);
  }, [messageInfo, messageApi]);

  return contextHolder;
}
