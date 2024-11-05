import { Drawer as AntDrawer, DrawerProps } from 'antd';

export function Drawer(props: DrawerProps) {
  const { ...rest } = props;

  return <AntDrawer width="40rem" styles={{ body: { padding: 'var(--page-padding)' } }} {...rest} />;
}
