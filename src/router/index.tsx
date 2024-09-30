import { RouterProvider } from 'react-router-dom';
import { routerConfig, routes } from './router-config';

export * from './constant';

export { routes };

export function RouterView() {
  return <RouterProvider router={routerConfig} />;
}
