import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ChangeCodeMirrorLanguage,
  ConditionalContents,
  CreateLink,
  DiffSourceToggleWrapper,
  InsertAdmonition,
  InsertCodeBlock,
  InsertFrontmatter,
  InsertImage,
  InsertSandpack,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  MDXEditor,
  Separator,
  ShowSandpackInfo,
  StrikeThroughSupSubToggles,
  UndoRedo,
} from '@mdxeditor/editor';
import styled from 'styled-components';

export const MDXEditroStyle = styled(MDXEditor)`
  --spacing-0_5: 0.125em;
  --spacing-1: 0.25em;
  --spacing-1_5: 0.375em;
  --spacing-2: 0.5em;
  --spacing-2_5: 0.625em;
  --spacing-3: 0.75em;
  --spacing-3_5: 0.875em;
  --spacing-4: 1em;
  --spacing-5: 1.25em;
  --spacing-6: 1.5em;
  --spacing-7: 1.75em;
  --spacing-8: 2em;
  --spacing-9: 2.25em;
  --spacing-10: 2.5em;
  --spacing-11: 2.75em;
  --spacing-12: 3em;
  --spacing-14: 3.5em;
  --spacing-16: 4em;
  --spacing-20: 5em;
  --spacing-24: 6em;
  --spacing-28: 7em;
  --spacing-32: 8em;
  --spacing-36: 9em;
  --spacing-40: 10em;
  --spacing-44: 11em;
  --spacing-48: 12em;
  --spacing-52: 13em;
  --spacing-56: 14em;
  --spacing-60: 15em;
  --spacing-64: 16em;
  --spacing-72: 18em;
  --spacing-80: 20em;
  --spacing-96: 24em;
  --text-base: 1em;
  --text-sm: 0.875em;
  --text-xs: 0.75em;
  --text-xxs: 0.6em;
  --sp-zIndices-top: 2;

  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 1.8rem;
  overflow-x: hidden;

  .mdxeditor-diff-source-wrapper {
    flex: 1;
  }

  .mdxeditor-toolbar {
    box-sizing: border-box;
    height: 5rem;

    &:empty {
      display: none;
    }

    &::-webkit-scrollbar {
      height: 0;
    }
  }

  .mdxeditor-rich-text-editor {
    height: 100%;

    & > div,
    & > div > div {
      height: 100%;
    }
  }

  h1 {
    font-size: 1.75em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
  }

  p,
  ul,
  ol {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }
`;

export function Toolbar() {
  return (
    <>
      <UndoRedo />
      <Separator />
      <BoldItalicUnderlineToggles />
      <Separator />
      <StrikeThroughSupSubToggles />
      <Separator />
      <BlockTypeSelect />
      <Separator />
      <ListsToggle />
      <Separator />
      <InsertCodeBlock />
      <InsertSandpack />
      <Separator />
      <InsertTable />
      <InsertThematicBreak />
      <Separator />
      <InsertAdmonition />
      <Separator />
      <CreateLink />
      <InsertImage />
      <Separator />
      <InsertFrontmatter />
    </>
  );
}

export function ToolbarContent() {
  return (
    <DiffSourceToggleWrapper>
      <ConditionalContents
        options={[
          {
            when: (editor) => editor?.editorType === 'codeblock',
            contents: () => <ChangeCodeMirrorLanguage />,
          },
          {
            when: (editor) => editor?.editorType === 'sandpack',
            contents: () => <ShowSandpackInfo />,
          },
          { fallback: Toolbar },
        ]}
      />
    </DiffSourceToggleWrapper>
  );
}
