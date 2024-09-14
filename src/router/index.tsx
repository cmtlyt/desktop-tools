import { RouterProvider } from 'react-router-dom';
import { routerConfig } from './router-config';

export function RouterView() {
  return <RouterProvider router={routerConfig} />;
}
