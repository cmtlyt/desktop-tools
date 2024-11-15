export interface Notepad {
  id: string;
  title: string;
  url: string;
  content?: string;
  creator: string;
  createTime: number;
  updateTime: number;
}

export interface EditorNotepad {
  title: string;
  url: string;
  content?: string;
}
