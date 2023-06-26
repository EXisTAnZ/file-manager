import fs from 'fs/promises';
import { resolve } from 'path';

export default async function add(curDir, filename) {
  if (!filename) {
    console.log('Invalid input. Filename not specified!')
    return;
  }

  const filePath = resolve(curDir, filename);

  fs.writeFile(filePath, '', { flag: 'wx' })
    .then(_ => console.log('File was created'))
    .catch(err => {
      (err.code === 'EEXIST')
        ? console.log('FS operation failed. File already exists')
        : console.log('FS operation failed');
    });
}