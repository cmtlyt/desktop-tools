import { ButtonList } from '@/components/button-list';
import { useNotepadStoreSlice } from '../store';
import { shareNotepad } from '../util';

export function RightArea() {
  const { currentNotepad: notepad } = useNotepadStoreSlice('currentNotepad');

  if (!notepad) return null;

  return <ButtonList buttons={[{ text: '分享', logInfo: { id: notepad.id }, onClick: () => shareNotepad(notepad) }]} />;
}
