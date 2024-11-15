import { clipboard } from '@cmtlyt/base';
import { gzip } from '@cmtlyt/string-zip';
import { BASENAME } from '@/router';
import { getLayoutStore } from '@/store';
import { Notepad } from '@/types/notepad';
import { getFileContentOfString, getFileWritable, logger } from '@/utils';
import { NOTEPAD_OPFS_PATH } from '@/constant/opfs-key';

async function decodeNotepad(notepad: Notepad): Promise<Notepad> {
  const { url } = notepad;
  if (!url) return notepad;
  const content = await getFileContentOfString(url);
  return { ...notepad, content, url: '' };
}

export async function shareNotepad(notepad: Notepad) {
  try {
    const notepadInfo = await decodeNotepad(notepad);
    const source = await gzip(JSON.stringify(notepadInfo));
    const url = new URL(
      `./#/notepad/preview/source/${encodeURIComponent(source)}`,
      `${location.protocol}//${location.host}${BASENAME}`,
    );
    const { showMessage } = getLayoutStore();
    if (!clipboard.isCopyable) {
      logger.error('copy-not-support', 'shareNotepad', { id: notepad.id });
      return showMessage({ content: '您的浏览器不支持复制', type: 'warning' });
    }
    logger.event('share-notepad', { id: notepad.id });
    clipboard.copy(url.href);
    showMessage({ content: '复制成功', type: 'success' });
  } catch (e) {
    logger.error('share-notepad-error', 'shareNotepad', (e as Error).stack || (e as Error).message, { id: notepad.id });
  }
}

export function getOpfsFilePath(name: string) {
  if (!name) return '';
  return `${NOTEPAD_OPFS_PATH}${name}`;
}

export async function saveMarkdown(title: string, content: string) {
  const zipContent = await gzip(content);
  const filePath = getOpfsFilePath(`${title}.mdx`);
  const writableHandle = await getFileWritable(filePath);
  await writableHandle.write(zipContent);
  await writableHandle.close();
  return filePath;
}
