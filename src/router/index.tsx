import { RouterProvider } from 'react-router-dom';
import { routerConfig } from './routerConfig';

export function RouterView() {
  return <RouterProvider router={routerConfig} />;
}
