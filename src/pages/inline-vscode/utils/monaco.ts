import { editor } from 'monaco-editor';
import { getContainerStore } from '../store/container';
import { getFileLanguage, resolvePath } from './file-system';

const modelCache = new Map<string, editor.ITextModel>();

export async function getModel(path: string) {
  if (modelCache.has(path)) return modelCache.get(path) as editor.ITextModel;
  const { container } = getContainerStore();
  if (!container) return null;
  const content = await container.fs.readFile(resolvePath(path), 'utf-8');
  const language = getFileLanguage(path);
  const model = editor.createModel(content, language);
  modelCache.set(path, model);
  return model;
}
