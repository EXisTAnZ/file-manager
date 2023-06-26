import fs from 'fs/promises';
import { resolve } from 'path';
import { createHash } from 'crypto';

export default async function hash(curDir, fileName) {
  if (!fileName) {
    console.log('Invalid input. Try to use: hash path_to_file');
    return;
  }
    const filePath = resolve(curDir, fileName);
    try {
      const fileBuffer = await fs.readFile(filePath, { flag: "r" });
      const hash = createHash("sha256").update(fileBuffer);
      console.log(hash.digest('hex'));
  } catch(err) {
    console.log('Operation failed', err);
  }
}