import { chdir } from 'node:process';
import { access } from 'node:fs/promises';
import { throwOperationFailed } from '../../utils/errorThrower.js';
import { getResolvedPath } from '../../utils/path.js';

export default async inputPath => {
  try {
    const newPath = getResolvedPath(inputPath);
    await access(newPath);
    chdir(newPath);
  } catch (err) {
    throwOperationFailed(err);
  }
};
