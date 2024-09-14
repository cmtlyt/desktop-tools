import { memo } from 'react';
import { AppList } from '@/components/app-list';

export const IndexAppList = memo(() => {
  return (
    <AppList
      appListHander={(list) =>
        list.map((item) => ({
          ...item,
          contentStyle: { width: '10rem', height: '10rem' },
          iconStyle: { fontSize: '8rem' },
          labelStyle: { fontSize: '1.8rem' },
        }))
      }
    />
  );
});
