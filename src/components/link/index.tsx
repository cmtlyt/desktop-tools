import { getLayoutStore } from '@/store';
import { LinkProps, Link as RouteLink } from 'react-router-dom';

export function Link(props: LinkProps) {
  const { onClick, ...rest } = props;
  return (
    <RouteLink
      {...rest}
      onClick={(e) => {
        getLayoutStore().setLoading(true);
        onClick?.(e);
      }}
    />
  );
}
