import fs from 'fs/promises';

export async function pathExist(path) {
  return fs.access(path).then(_ => true).catch(_ => false);
}
