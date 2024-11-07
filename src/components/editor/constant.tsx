import {
  AdmonitionDirectiveDescriptor,
  codeBlockPlugin,
  codeMirrorPlugin,
  directivesPlugin,
  frontmatterPlugin,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  SandpackConfig,
  sandpackPlugin,
  tablePlugin,
  thematicBreakPlugin,
} from '@mdxeditor/editor';

const reactSnippetContent = `export default function App() {\n  return <div>Hello world!</div>;\n}`.trim();

const vueSnippetContent = `<template>\n  <div>Hello world!</div>\n</template>`.trim();

const simpleSandpackConfig: SandpackConfig = {
  defaultPreset: 'react',
  presets: [
    {
      label: 'React',
      name: 'react',
      meta: 'live react',
      sandpackTemplate: 'react',
      sandpackTheme: 'auto',
      snippetFileName: '/App.js',
      snippetLanguage: 'jsx',
      initialSnippetContent: reactSnippetContent,
      dependencies: {},
    },
    {
      label: 'React + TS',
      name: 'react-ts',
      meta: 'live react-ts',
      sandpackTemplate: 'react-ts',
      sandpackTheme: 'auto',
      snippetFileName: '/App.tsx',
      snippetLanguage: 'tsx',
      initialSnippetContent: reactSnippetContent,
      dependencies: {},
    },
    {
      label: 'Vue',
      name: 'vue',
      meta: 'live vue',
      sandpackTemplate: 'vue',
      sandpackTheme: 'auto',
      snippetFileName: '/src/App.vue',
      snippetLanguage: 'vue',
      initialSnippetContent: vueSnippetContent,
      dependencies: {},
    },
    {
      label: 'Vue + TS',
      name: 'vue-ts',
      meta: 'live vue-ts',
      sandpackTemplate: 'vue-ts',
      sandpackTheme: 'auto',
      snippetFileName: '/src/App.vue',
      snippetLanguage: 'vue',
      initialSnippetContent: vueSnippetContent,
      dependencies: {},
    },
  ],
};

const codeMirrorConfig = {
  codeBlockLanguages: {
    js: 'JavaScript',
    css: 'CSS',
    ts: 'TypeScript',
    html: 'HTML',
    json: 'JSON',
    md: 'Markdown',
  },
};

export const baseEditorPlugins = [
  headingsPlugin(),
  quotePlugin(),
  listsPlugin(),
  thematicBreakPlugin(),
  linkPlugin(),
  linkDialogPlugin(),
  tablePlugin(),
  markdownShortcutPlugin(),
  frontmatterPlugin(),
  imagePlugin(),
  codeBlockPlugin({ defaultCodeBlockLanguage: 'ts' }),
  sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
  codeMirrorPlugin(codeMirrorConfig),
  directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }),
];
