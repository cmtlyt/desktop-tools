import { useEffect } from 'react';
import { useMatches } from 'react-router-dom';
import { Spin } from 'antd';
import { getLayoutStore, useLayoutStoreSlice } from '@/store';

const minShowTime = 200;

export function LayoutLoading() {
  const { loading } = useLayoutStoreSlice('loading');
  const matches = useMatches();

  useEffect(() => {
    getLayoutStore().setLoading(false);
  }, [matches]);

  return <Spin spinning={loading} delay={minShowTime} size="large" fullscreen />;
}
