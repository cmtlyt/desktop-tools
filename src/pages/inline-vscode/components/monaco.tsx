import * as monaco from 'monaco-editor';
import { Editor, loader, type Monaco } from '@monaco-editor/react';
import { getWorkspaceStore, useWorkspaceStoreSlice } from '../store/workspace';
import { forwardRef, memo, useEffect, useImperativeHandle, useRef } from 'react';
import { getModel } from '../utils/monaco';
import { updateFileContent } from '../utils/file-system';

loader.config({ monaco });

interface EditorRef {
  editor: monaco.editor.IStandaloneCodeEditor;
  monaco: Monaco;
}

const EditorComp = memo(
  forwardRef((_, ref) => {
    const editorRef = useRef({} as EditorRef);

    useImperativeHandle(ref, () => ({
      get editor() {
        return editorRef.current.editor;
      },
      get monaco() {
        return editorRef.current.monaco;
      },
    }));

    const onKeyDown = (e: monaco.IKeyboardEvent) => {
      if (e.code === 'KeyS' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        const { currentFilePath } = getWorkspaceStore();
        if (!currentFilePath) return;
        const { editor } = editorRef.current;
        const value = editor.getValue();
        updateFileContent(currentFilePath, value);
      }
    };

    const onMount = (editor: monaco.editor.IStandaloneCodeEditor, monaco: Monaco) => {
      editorRef.current = { editor, monaco };
      editor.onKeyDown(onKeyDown);
    };

    return <Editor onMount={onMount} />;
  }),
);

export function Monaco() {
  const { currentFilePath } = useWorkspaceStoreSlice('currentFilePath');
  const editorRef = useRef({} as EditorRef);

  useEffect(() => {
    console.debug(currentFilePath);
    if (!currentFilePath) return;
    (async () => {
      const model = await getModel(currentFilePath);
      editorRef.current.editor.setModel(model);
    })();
  }, [currentFilePath]);

  return <EditorComp ref={editorRef} />;
}
