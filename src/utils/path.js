import path from 'path';

export default () => {
  console.log(`You are currently in \x1b[33m${process.cwd()} \x1b[0m`);
  console.log('\x1b[32mPrint some command and see what happens\x1b[0m');
};

export const getNormalizedPath = receivedPath => {
  const normalizedPath = path.normalize(receivedPath);
  if (path.isAbsolute(normalizedPath)) return normalizedPath;
  return path.join(process.cwd(), receivedPath);
};
