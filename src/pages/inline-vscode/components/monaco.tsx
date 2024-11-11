import { forwardRef, lazy, memo, useEffect, useImperativeHandle, useRef } from 'react';
import * as monaco from 'monaco-editor';
import { createHighlighter } from 'shiki';
import { shikiToMonaco } from '@shikijs/monaco';
import { loader, type Monaco as TMonaco } from '@monaco-editor/react';
import { getWorkspaceStore, useWorkspaceStoreSlice } from '../store/workspace';
import { getModel } from '../utils/monaco';
import { updateFileContent } from '../utils/file-system';

loader.config({ monaco });

const Editor = lazy(() => import('@monaco-editor/react'));

interface EditorRef {
  editor: monaco.editor.IStandaloneCodeEditor;
  monaco: TMonaco;
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

    const onMount = (editor: monaco.editor.IStandaloneCodeEditor, monaco: TMonaco) => {
      editorRef.current = { editor, monaco };

      (async () => {
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
          module: monaco.languages.typescript.ModuleKind.ESNext,
          moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
          isolatedModules: true,
          allowJs: true,
          strict: true,
          skipLibCheck: true,
          jsx: monaco.languages.typescript.JsxEmit.Preserve,
          target: monaco.languages.typescript.ScriptTarget.ES2020,
          esModuleInterop: true,
        });

        const highlighter = await createHighlighter({
          themes: [
            'slack-dark',
            'solarized-dark',
            'vitesse-dark',
            'rose-pine-moon',
            'one-dark-pro',
            'night-owl',
            'material-theme-darker',
            'ayu-dark',
            'dark-plus',
          ],
          langs: ['javascript', 'typescript', 'vue', 'jsx', 'tsx', 'md', 'json'],
        });

        monaco.languages.register({ id: 'vue' });
        monaco.languages.register({ id: 'typescript' });
        monaco.languages.register({ id: 'javascript' });
        monaco.languages.register({ id: 'jsx' });
        monaco.languages.register({ id: 'tsx' });

        shikiToMonaco(highlighter, monaco);

        editor.onKeyDown(onKeyDown);
      })();
    };

    return <Editor onMount={onMount} />;
  }),
);

export const Monaco = memo(function Monaco() {
  const { currentFilePath } = useWorkspaceStoreSlice('currentFilePath');
  const editorRef = useRef({} as EditorRef);

  useEffect(() => {
    if (!currentFilePath) return;
    (async () => {
      const model = await getModel(currentFilePath);
      if (!model) return;
      editorRef.current.editor.setModel(model);
    })();
  }, [currentFilePath]);

  return <EditorComp ref={editorRef} />;
});

export default Monaco;
