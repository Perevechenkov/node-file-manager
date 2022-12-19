import { appendFile } from 'node:fs/promises';
import { throwOperationFailed } from '../../utils/errorThrower.js';
import { getNormalizedPath } from '../../utils/path.js';

export default async newFileName => {
  const newFilePath = getNormalizedPath(newFileName);
  try {
    await appendFile(newFilePath, '');
  } catch (err) {
    throwOperationFailed(err);
  }
};
