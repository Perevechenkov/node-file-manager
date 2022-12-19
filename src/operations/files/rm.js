import { rm } from 'node:fs/promises';
import { throwOperationFailed } from '../../utils/errorThrower.js';
import { getNormalizedPath } from '../../utils/path.js';

export default async pathTofile => {
  pathTofile = getNormalizedPath(pathTofile);
  try {
    await rm(pathTofile);
  } catch (err) {
    throwOperationFailed(err);
  }
};
