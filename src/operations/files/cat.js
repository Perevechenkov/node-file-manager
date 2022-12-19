import { createReadStream } from 'node:fs';
import { Writable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { getResolvedPath } from '../../utils/path.js';
import { throwOperationFailed } from '../../utils/errorThrower.js';

export default async inputPath => {
  const targetFilePath = getResolvedPath(inputPath);
  const rs = createReadStream(targetFilePath, { encoding: 'utf8' });
  const ws = new Writable({
    decodeStrings: false,
    write(chunk, _, cb) {
      console.log(chunk);
      cb();
    },
  });

  try {
    await pipeline(rs, ws);
  } catch (err) {
    throwOperationFailed(err);
  }
};
