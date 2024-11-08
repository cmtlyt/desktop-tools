import type { DirectoryNode, FileNode, FileSystemTree, SymlinkNode, WebContainer } from '@webcontainer/api';
import { DEFAULT_DIRECTORY } from '../constant';
import { getContainerStore } from '../store/container';

export async function createFileNode(container: WebContainer, path: string, name: string): Promise<FileNode> {
  const contents = await container.fs.readFile(`${path}/${name}`, 'utf-8');
  return { file: { contents } };
}

export function createDirectoryNode(): DirectoryNode {
  return { directory: {} };
}

const excludeFiles = ['node_modules', '.git'];

export function excludeFile(name: string): boolean {
  return excludeFiles.includes(name);
}

export async function getContainerFileSystem() {
  const { container } = getContainerStore();
  const fileSystem = { [DEFAULT_DIRECTORY]: createDirectoryNode() };
  if (!container) return fileSystem[DEFAULT_DIRECTORY];
  const readFiles = async (dirPath = DEFAULT_DIRECTORY, dir: FileSystemTree) => {
    const files = await container.fs.readdir(dirPath, { withFileTypes: true });
    for (const file of files) {
      if (excludeFile(file.name)) continue;
      const node = await (file.isFile() ? createFileNode(container, dirPath, file.name) : createDirectoryNode());
      dir[file.name] = node;
      if (file.isDirectory()) await readFiles(`${dirPath}/${file.name}`, (node as DirectoryNode).directory);
    }
  };
  await readFiles(DEFAULT_DIRECTORY, fileSystem[DEFAULT_DIRECTORY].directory);
  return fileSystem[DEFAULT_DIRECTORY];
}

export function isDirectoryNode(node: FileNode | DirectoryNode | SymlinkNode): node is DirectoryNode {
  return 'directory' in node;
}

export function isFileNode(node: FileNode | DirectoryNode | SymlinkNode): node is FileNode {
  return 'file' in node;
}

export function resolvePath(path: string) {
  return `${DEFAULT_DIRECTORY}/${path}`.replace(/^\/+/, '/');
}

export function getFileLanguage(path: string) {
  const ext = path.split('.').pop() || '';
  switch (ext) {
    case 'js':
    case 'jsx':
      return 'text/javascript';
    case 'ts':
    case 'tsx':
      return 'text/typescript';
    case 'css':
      return 'text/css';
    case 'html':
      return 'text/html';
    case 'json':
      return 'text/json';
    case 'md':
      return 'text/markdown';
    case 'yml':
    case 'yaml':
      return 'text/yaml';
    default:
      return 'text/plain';
  }
}
