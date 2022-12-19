import { createReadStream, createWriteStream } from 'node:fs';
import path from 'path';
import { getNormalizedPath } from '../../utils/path.js';
import { access } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { throwOperationFailed } from '../../utils/errorThrower.js';

export default async (pathToFile, pathToNewDirectory) => {
  const targetFilePath = getNormalizedPath(pathToFile);
  const destinationPath = getNormalizedPath(pathToNewDirectory);
  const completeNewFilePath = path.join(
    destinationPath,
    path.basename(targetFilePath)
  );

  try {
    await access(targetFilePath);
    const rs = createReadStream(targetFilePath);
    const ws = createWriteStream(completeNewFilePath, { flags: 'wx' });
    await pipeline(rs, ws);
  } catch (err) {
    throwOperationFailed(err);
  }
};
