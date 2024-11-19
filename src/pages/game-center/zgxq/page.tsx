import { PageInfo } from '@/types/page-info';
import { FlexAlign, FlexBox, FlexDirection, FlexJustify } from '@/components/base';
import { BoardBg, BoardWrapper, RenderContent } from './components';
import { RightArea } from './right-area';
import { ActionType, useSubscribeZGXQAction } from './subject';
import { getLayoutStore } from '@/store';

export function Component() {
  useSubscribeZGXQAction((action) => {
    const { ext } = action;
    const winColor = ext?.winColor;
    if (!winColor) return;
    const { showMessage } = getLayoutStore();
    showMessage({ content: `${winColor === 'red' ? '红' : '黑'}方胜利`, type: 'success' });
  }, ActionType.GAME_OVER);

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
