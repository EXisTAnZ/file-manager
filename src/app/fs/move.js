import fs from 'fs';
import { resolve, parse } from 'path';

export default async function move(curDir, filePath, dirPath) {
  if (!filePath || !dirPath) {
    console.log('Invalid input. Try to use: mv path_to_file path_to_new_directory');
    return;
  }
  const fileName = parse(filePath).base;
  const oldPath = resolve(curDir, filePath);
  const newPath = resolve(curDir, dirPath, fileName);
  const copyPromise = new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(oldPath);
    const writeStream = fs.createWriteStream(newPath, { flags: 'wx' });

    readStream.pipe(writeStream);
    writeStream.on('close', () => {
      fs.promises.rm(oldPath)
      .then()
      .catch(_ => reject('Operation failed. Failed to delete'));
      resolve('File was moved');
    });

    readStream.on('error', (err) => {
      reject(`Operation failed. ${ err.code } `);
    });
    writeStream.on('error', (err) => {
      reject(`Operation failed. ${ err.code === 'EEXIST' ? 'File already exists' : '' } `);
    });
  });
  copyPromise
    .then(msg => console.log(msg))
    .catch(msg => console.log(msg));
}