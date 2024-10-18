import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import zhCN from 'antd/locale/zh_CN';
import { RouterView } from './router';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

function App() {
  return (
    <ConfigProvider locale={zhCN} theme={{}}>
      <RouterView />
    </ConfigProvider>
  );
}

export default App;
