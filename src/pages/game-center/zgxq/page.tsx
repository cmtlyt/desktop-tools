import { PageInfo } from '@/types/page-info';
import { FlexAlign, FlexBox, FlexDirection, FlexJustify } from '@/components/base';
import { BoardBg, BoardContainer, BoardWrapper, RenderContent } from './components';
import { RightArea } from './right-area';
import { ActionType, useSubscribeZGXQAction } from './subject';
import { getLayoutStore } from '@/store';
import { useZGXQStoreSlice } from './state';

export function Component() {
  const { currentUser } = useZGXQStoreSlice('currentUser');

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
      <BoardContainer
        style={{
          transform: `rotate(${currentUser === 'red' ? 0 : 180}deg)`,
        }}
        $flex="1"
        $alignItems={FlexAlign.CENTER}
        $justifyContent={FlexJustify.CENTER}
      >
        <BoardWrapper $direction={FlexDirection.COLUMN}>
          <BoardBg />
          <RenderContent />
        </BoardWrapper>
      </BoardContainer>
    </FlexBox>
  );
}

export const handle: PageInfo = {
  title: '中国象棋-单人推演模式',
  needBackIcon: true,
  rightArea: <RightArea />,
};
