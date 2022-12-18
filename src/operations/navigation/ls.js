import { resolve } from 'node:path';
import { readdir } from 'node:fs/promises';
import { throwOperationFailed } from '../../utils/errorThrower.js';

export default async () => {
  class File {
    constructor(name, type) {
      this.Name = name;
      this.Type = type;
    }
  }

  try {
    const currentDirectory = resolve(process.cwd());
    const files = await readdir(currentDirectory, { withFileTypes: true });
    const sortedFiles = files
      .sort(file => (file.isFile() ? 1 : -1))
      .map(file => new File(file.name, file.isFile() ? 'file' : 'directory'));
    console.log('\n');
    console.table(sortedFiles);
  } catch (error) {
    throwOperationFailed();
  }
};
