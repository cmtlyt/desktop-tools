import { forwardRef, memo, useEffect, useState, useTransition } from 'react';
import { unGzip } from '@cmtlyt/string-zip';
import { Editor, EditorRef } from '@/components/editor';
import { useNotepadStoreSlice } from './store';

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

    return isPadding ? null : <Editor content={content} readOnly={readOnly} ref={ref} />;
  }),
);
