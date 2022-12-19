import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { Writable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { getNormalizedPath } from '../../utils/path.js';
import { throwOperationFailed } from '../../utils/errorThrower.js';

export default async pathToFile => {
  pathToFile = getNormalizedPath(pathToFile);
  const hash = createHash('sha256');
  const rs = createReadStream(pathToFile);
  const ws = new Writable({
    decodeStrings: false,
    write(chunk, _, cb) {
      console.log(chunk);
      cb();
    },
  });

  try {
    await pipeline(rs, hash.setEncoding('hex'), ws);
  } catch (err) {
    throwOperationFailed(err);
  }
};
