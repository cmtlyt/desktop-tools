export interface Notepad {
  id: string;
  title: string;
  content: string;
  creator: string;
  createTime: number;
  updateTime: number;
}

export interface EditorNotepad {
  title: string;
  content: string;
}
