import { forwardRef, memo, useEffect, useState, useTransition } from 'react';
import { unGzip } from '@cmtlyt/string-zip';
import type { EditorRef } from '@/components/editor';
import { useNotepadStoreSlice } from './store';
import { LazyEditor } from '@/components/editor/lazy-editor';

interface AutoLoadEditorProps {
  readOnly?: boolean;
}

export const AutoLoadEditor = memo(
  forwardRef<EditorRef, AutoLoadEditorProps>(function AutoLoadEditor({ readOnly }, ref) {
    const { currentNotepad } = useNotepadStoreSlice('currentNotepad');
    const [content, setContent] = useState('');
    const [isPadding, startTransition] = useTransition();

    useEffect(() => {
      if (!currentNotepad) return;
      startTransition(() => {
        unGzip(currentNotepad.content).then(setContent);
      });
    }, [currentNotepad]);

    return isPadding ? null : <LazyEditor content={content} readOnly={readOnly} ref={ref} />;
  }),
);
