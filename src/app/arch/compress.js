import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';
import { createBrotliCompress } from 'zlib';

export default async function compress(curDir, filePath, destPath) {
  if (!filePath || !destPath) {
    console.log('Invalid input. Try to use: compress path_to_file path_to_destination');
    return;
  }
  const sorce = resolve(curDir, filePath);
  if(!await pathExist(sorce)) {
    console.log('Operation failed. Cant reach source file.');
    return;
  }
  const destination = resolve(curDir, destPath);

  const compressPromise = new Promise((resolve, reject) => {
    const readStream = createReadStream(sorce);
    const outStream = createWriteStream(destination, { flags: 'wx' });

    const brotli = createBrotliCompress();

    readStream.pipe(brotli).pipe(outStream);

    brotli.on('error', () => {
      reject("Operation failed. Unable to compress");
    })

    outStream.on('close', () => {
      resolve('File was compressed');
    })
    readStream.on('error', (err) => {
      reject('Operation failed. Cant reach source file.');
    })
    outStream.on('error', (err) => {
      reject(`Operation failed. ${err.code === 'EEXIST' ? 'File already exists' : ''} `);
    })
  })
  compressPromise
    .then(msg => console.log(msg))
    .catch(msg => console.log(msg));
}