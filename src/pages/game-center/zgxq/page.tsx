import { PageInfo } from '@/types/page-info';
import { FlexAlign, FlexBox, FlexDirection, FlexJustify } from '@/components/base';
import { BoardBg, BoardWrapper, RenderContent } from './components';
import { RightArea } from './right-area';

export function Component() {
  return (
    <FlexBox
      $flex="1"
      $direction={FlexDirection.COLUMN}
      $alignItems={FlexAlign.CENTER}
      $justifyContent={FlexJustify.CENTER}
    >
      <BoardWrapper $direction={FlexDirection.COLUMN}>
        <BoardBg />
        <RenderContent />
      </BoardWrapper>
    </FlexBox>
  );
}

export const handle: PageInfo = {
  title: '中国象棋-单人推演模式',
  needBackIcon: true,
  rightArea: <RightArea />,
};
