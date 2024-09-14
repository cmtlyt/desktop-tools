import { AppList } from '@/components/app-list';
import { FlexDirection } from '@/components/base';

export function Aside() {
  return (
    <aside>
      <AppList
        needActiveStyle
        direction={FlexDirection.column}
        appListHander={(list) => [
          { name: '首页', path: '/', icon: 'icon-home' },
          ...list,
        ]}
      />
    </aside>
  );
}
