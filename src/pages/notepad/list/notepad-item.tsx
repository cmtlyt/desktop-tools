import { memo } from 'react';
import styled from 'styled-components';
import { ItemDate, ItemTitle, ItemWrapper } from '@/components/list-item';
import { HoverExpandBox } from '@/components/hover-expand-box';
import { Notepad } from '@/types/notepad';
import { ButtonList } from '@/components/button-list';
import { useNotepadStoreSlice } from '../store';
import { ButtonTheme, FlexAlign } from '@/components/base';

interface NotepadItemProps {
  notepad: Notepad;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onDelete?: (id: Notepad['id']) => void;
}

interface HandleButtonsProps {
  notepad: Notepad;
  onDelete?: (id: Notepad['id']) => void;
}

const HandleButtonList = styled(ButtonList)`
  padding-left: 1rem;
`;

function HandleButtons(props: HandleButtonsProps) {
  const { notepad, onDelete } = props;
  const { id } = notepad;
  const { setNotepad } = useNotepadStoreSlice('setNotepad');

  return (
    <HandleButtonList
      wrapperProps={{ $alignItems: FlexAlign.CENTER }}
      buttons={[
        {
          text: '编辑',
          $presetTheme: ButtonTheme.PRIMARY,
          to: `/notepad/editor/${id}`,
          onClick: () => setNotepad(notepad),
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
        <ItemTitle>{notepad.title}</ItemTitle>
        <ItemDate>{notepad.createTime}</ItemDate>
      </HoverExpandBox>
    </ItemWrapper>
  );
});
