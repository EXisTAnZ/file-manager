import { resolve } from 'path';

export async function changeDir(curDir, destDir) {
  if (!destDir) {
    return curDir;
  }

const newPath = resolve(curDir, destDir);

  // TODO: need implement path check;

  return newPath;
}