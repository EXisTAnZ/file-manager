import { createReadStream, createWriteStream } from 'fs';
import { resolve } from 'path';
import { createBrotliDecompress } from 'zlib';
import { pathExist } from '../fs/pathExist.js';

export default async function decompress(curDir, filePath, destPath) {
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

    const brotli = createBrotliDecompress();

    readStream.pipe(brotli).pipe(outStream);

    brotli.on('error', () => {
      reject("Operation failed. Unable to decompress");
    })

    outStream.on('close', () => {
      resolve('File was decompressed');
    })
    readStream.on('error', (err) => {
      reject('Operation failed. Cant reach source file.');
    });
    outStream.on('error', (err) => {
      reject(`Operation failed. ${err.code === 'EEXIST' ? 'File already exists.' : ''} `);
    })
  })
  compressPromise
    .then(msg => console.log(msg))
    .catch(msg => console.log(msg));
}