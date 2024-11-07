import '@mdxeditor/editor/style.css';
import { forwardRef, memo } from 'react';
import { diffSourcePlugin, MDXEditorMethods, toolbarPlugin } from '@mdxeditor/editor';
import { baseEditorPlugins } from './constant';
import { MDXEditroStyle, ToolbarContent } from './components';
import { translation } from './translation';

interface EditorProps {
  content?: string;
  readOnly?: boolean;
}

export type EditorRef = MDXEditorMethods;

export const Editor = memo(
  forwardRef<MDXEditorMethods, EditorProps>(function Editor(props, ref) {
    const { content = '', readOnly = false } = props;

    return (
      <MDXEditroStyle
        trim
        ref={ref}
        markdown={content}
        readOnly={readOnly}
        placeholder="请输入内容"
        translation={translation}
        plugins={[
          ...baseEditorPlugins,
          diffSourcePlugin({ diffMarkdown: content, viewMode: 'rich-text' }),
          toolbarPlugin({ toolbarContents: readOnly ? () => null : ToolbarContent }),
        ]}
      />
    );
  }),
);
