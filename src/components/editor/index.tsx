import '@mdxeditor/editor/style.css';
import { forwardRef, memo } from 'react';
import { diffSourcePlugin, MDXEditorMethods, MDXEditorProps, toolbarPlugin } from '@mdxeditor/editor';
import { baseEditorPlugins } from './constant';
import { MDXEditroStyle, ToolbarContent } from './components';
import { translation } from './translation';
import { TExclude } from '@cmtlyt/base';

interface EditorProps extends TExclude<MDXEditorProps, 'markdown'> {
  content?: string;
  readOnly?: boolean;
}

export type EditorRef = MDXEditorMethods;

export const Editor = memo(
  forwardRef<MDXEditorMethods, EditorProps>(function Editor(props, ref) {
    const { content = '', readOnly = false, ...rest } = props;

    return (
      <MDXEditroStyle
        trim
        placeholder="请输入内容"
        {...rest}
        ref={ref}
        markdown={content}
        readOnly={readOnly}
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
