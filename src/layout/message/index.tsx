import { useLayoutStore } from '@/store';
import { message } from 'antd';
import { useEffect } from 'react';

export function Message() {
  const [messageApi, contextHolder] = message.useMessage();
  const { messageInfo } = useLayoutStore((state) => ({ messageInfo: state.messageInfo }));

  useEffect(() => {
    if (!messageInfo) return;
    messageApi.open(messageInfo);
  }, [messageInfo, messageApi]);

  return contextHolder;
}
