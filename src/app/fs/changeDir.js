import { resolve } from 'path';
import { pathExist } from './pathExist.js';

export default async function changeDir(curDir, destDir) {
  if (!destDir) {
    return curDir;
  }

  const newDir = resolve(curDir, destDir);

  if (await pathExist(newDir)) return newDir;
  console.log('Invalid input. Check destnation path');
  return curDir;
}
