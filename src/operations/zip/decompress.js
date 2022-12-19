import { createReadStream, createWriteStream } from 'node:fs';
import path from 'node:path';
import { createBrotliDecompress } from 'node:zlib';
import { getNormalizedPath } from '../../utils/path.js';
import { access } from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { throwOperationFailed } from '../../utils/errorThrower.js';

export default async (pathToFile, pathToDestination) => {
  pathToFile = getNormalizedPath(pathToFile);
  pathToDestination = path.join(
    getNormalizedPath(pathToDestination),
    path.parse(pathToFile).name
  );

  try {
    await access(pathToFile);
    const rs = createReadStream(pathToFile);
    const ws = createWriteStream(pathToDestination, { flags: 'wx' });
    const brotliUnzip = createBrotliDecompress();
    await pipeline(rs, brotliUnzip, ws);
  } catch (err) {
    throwOperationFailed(err);
  }
};
