import fs from 'fs/promises'
import { parse, resolve } from 'path';
import { pathExist } from './pathExist.js'; 

export default async function rename(curDir, filePath, newFileName) {
  if (!filePath || !newFileName) {
    console.log('Invalid input. Try to use: rn path_to_file new_filename');
    return;
  }
  const oldPath = resolve(curDir, filePath);
  const oldDir = parse(oldPath).dir;
  const newPath = resolve(oldDir, newFileName);
  if (await pathExist(newPath)) {
    console.log('Operation failed. File is already exist');
    return;
  }
  fs.rename(oldPath, newPath)
    .then(_ => console.log('File was renamed'))
    .catch(_ => console.log('Operation failed'));
}