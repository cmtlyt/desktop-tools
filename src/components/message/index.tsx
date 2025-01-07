import { message } from 'antd';
import { useEffect } from 'react';
import { useLayoutStoreSlice } from '@/store';

export function Message() {
  const [messageApi, contextHolder] = message.useMessage();
  const { messageInfo, showMessage } = useLayoutStoreSlice(['messageInfo', 'showMessage']);

  useEffect(() => {
    if (!messageInfo) return;
    messageApi.open({
      ...messageInfo,
      onClose() {
        if (messageInfo.onClose) {
          messageInfo.onClose();
        }
        showMessage(null);
      },
    });
  }, [messageInfo, messageApi, showMessage]);

  return contextHolder;
}
