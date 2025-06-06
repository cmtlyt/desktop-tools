import { useCallback, useRef, useState } from 'react';
import { PageInfo } from '@/types/page-info';
import { RightHandleButtonList } from '@/components/base/list';
import { getLayoutStore } from '@/store';
import { logger } from '@/utils';
import { FormDrawer, PageContainer, PreviewItemInfo, PreviewList } from './component';
import { getDYYLStore } from './store';
import { useBoundingClientRect, useDownload } from './hooks';

export function Component() {
  const [previewList, setPreviewList] = useState<PreviewItemInfo[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const [, applyDomSize] = useBoundingClientRect(ref.current);

  const updatePreviewList = useCallback((patch: (perv: PreviewItemInfo[]) => PreviewItemInfo[]) => {
    return setPreviewList((prev) => {
      const list = patch(prev);
      logger.event('dyylpt.updatePreviewList', { oldLength: prev.length, newLength: list.length });
      return list;
    });
  }, []);

  return (
    <PageContainer>
      {/* 预览列表 */}
      <PreviewList id="preview-area" ref={ref} list={previewList} />
      {/* 配置面板 */}
      <FormDrawer list={previewList} applyDomSize={applyDomSize} onChange={updatePreviewList} />
    </PageContainer>
  );
}

function RightArea() {
  const download = useDownload();

  return (
    <RightHandleButtonList
      buttons={[
        { text: '配置', onClick: () => getDYYLStore().setShowForm(true) },
        {
          text: '保存',
          onClick: () => {
            download(document.getElementById('preview-area')).then(() => {
              getLayoutStore().showMessage({ type: 'success', content: '保存成功' });
            });
          },
        },
      ]}
    />
  );
}

export const handle: PageInfo = {
  title: '电影语录拼图',
  needBackIcon: true,
  rightArea: <RightArea />,
};
