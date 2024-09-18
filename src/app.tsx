import { ConfigProvider } from 'antd';
import { RouterView } from './router';

function App() {
  return (
    <ConfigProvider theme={{}}>
      <RouterView />
    </ConfigProvider>
  );
}

export default App;
