import { memo } from 'react';
import { ItemDate, ItemTitle, ItemWrapper, RightHandleButtonList } from '@/components/list';
import { HoverExpandBox } from '@/components/hover-expand-box';
import { Notepad } from '@/types/notepad';
import { useNotepadStoreSlice } from '../store';
import { ButtonTheme, FlexAlign, FlexBox } from '@/components/base';
import { shareNotepad } from '../util';

interface NotepadItemProps {
  notepad: Notepad;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onDelete?: (id: Notepad['id']) => void;
}

interface HandleButtonsProps {
  notepad: Notepad;
  onDelete?: (id: Notepad['id']) => void;
}

function HandleButtons(props: HandleButtonsProps) {
  const { notepad, onDelete } = props;
  const { id } = notepad;
  const { setNotepad } = useNotepadStoreSlice('setNotepad');

  return (
    <RightHandleButtonList
      wrapperProps={{ $alignItems: FlexAlign.CENTER }}
      buttons={[
        {
          text: '编辑',
          $presetTheme: ButtonTheme.PRIMARY,
          to: `/notepad/editor/${id}`,
          onClick: () => setNotepad(notepad),
        },
        {
          text: '分享',
          async onClick(e) {
            e.stopPropagation();
            shareNotepad(notepad);
          },
        },
        {
          text: '删除',
          $presetTheme: ButtonTheme.DANGER,
          logInfo: { id },
          onClick(e) {
            e.stopPropagation();
            onDelete?.(id);
          },
        },
      ]}
    />
  );
}

export const NotepadItem = memo((props: NotepadItemProps) => {
  const { notepad, onDelete, onClick } = props;

  return (
    <ItemWrapper onClick={onClick}>
      <HoverExpandBox rightArea={<HandleButtons notepad={notepad} onDelete={onDelete} />}>
        <FlexBox $flex="1" $alignItems={FlexAlign.CENTER}>
          <ItemTitle>{notepad.title}</ItemTitle>
        </FlexBox>
        <ItemDate>{notepad.createTime}</ItemDate>
      </HoverExpandBox>
    </ItemWrapper>
  );
});
