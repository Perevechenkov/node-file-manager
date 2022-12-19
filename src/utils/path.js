import path from 'path';

export default () => console.log(`You are currently in ${process.cwd()}`);

export const getNormalizedPath = receivedPath => {
  const normalizedPath = path.normalize(receivedPath);
  if (path.isAbsolute(normalizedPath)) return normalizedPath;
  return path.join(process.cwd(), receivedPath);
};
