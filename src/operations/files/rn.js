import { rename } from 'node:fs/promises';
import path from 'path';
import { getNormalizedPath } from '../../utils/path.js';
import { throwOperationFailed } from '../../utils/errorThrower.js';

export default async (pathToFile, newFileName) => {
  const targetFilePath = getNormalizedPath(pathToFile);
  const newFilePath = path.join(path.dirname(targetFilePath), newFileName);
  try {
    await rename(targetFilePath, newFilePath);
  } catch (err) {
    throwOperationFailed(err);
  }
};
