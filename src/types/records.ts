export interface RecordInfo {
  id: string;
  name: string;
  url?: string;
  content?: string;
  creator: string;
  createTime: number;
  updateTime: number;
}

export interface EditorRecordInfo {
  name: string;
  url?: string;
  content?: string;
}
