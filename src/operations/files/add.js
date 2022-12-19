import { appendFile } from 'node:fs/promises';
import { throwOperationFailed } from '../../utils/errorThrower.js';
import { getResolvedPath } from '../../utils/path.js';

export default async newFileName => {
  const newFilePath = getResolvedPath(newFileName);
  try {
    await appendFile(newFilePath, '');
  } catch (err) {
    throwOperationFailed(err);
  }
};
