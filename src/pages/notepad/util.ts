import { clipboard } from '@cmtlyt/base';
import { gzip } from '@cmtlyt/string-zip';
import { BASENAME } from '@/router';
import { getLayoutStore } from '@/store';
import { Notepad } from '@/types/notepad';
import { logger } from '@/utils';

export function shareNotepad(notepad: Notepad) {
  gzip(JSON.stringify(notepad)).then((source) => {
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
  });
}
