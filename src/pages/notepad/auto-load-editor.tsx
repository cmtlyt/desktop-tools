import { forwardRef, memo, useEffect, useState } from 'react';
import { unGzip } from '@cmtlyt/string-zip';
import type { EditorRef } from '@/components/editor';
import { useNotepadStoreSlice } from './store';
import { LazyEditor } from '@/components/editor/lazy-editor';
import { getFileContentOfString } from '@/utils';

interface AutoLoadEditorProps {
  readOnly?: boolean;
}

export const AutoLoadEditor = memo(
  forwardRef<EditorRef, AutoLoadEditorProps>(function AutoLoadEditor({ readOnly }, ref) {
    const { currentNotepad } = useNotepadStoreSlice('currentNotepad');
    const [content, setContent] = useState('');

    useEffect(() => {
      if (!currentNotepad) return;
      (async () => {
        const { url, content } = currentNotepad;
        let fileContent: string = content || '';
        if (url) fileContent = await getFileContentOfString(url);
        unGzip(fileContent).then(setContent);
      })();
    }, [currentNotepad]);

    return <LazyEditor content={content} readOnly={readOnly} ref={ref} />;
  }),
);
