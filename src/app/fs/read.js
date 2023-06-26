import fs from "fs";
import os from "os";
import { resolve } from "path";

export default async function read(curDir, filename) {
  if (!filename) {
    console.log('Invalid input. Filename not specified!');
    return;
  }
  const filePath = resolve(curDir, filename);
  const stream = new fs.ReadStream(filePath);
  stream.on('error', () => console.log('Invalid input. Check file path.'));
  stream.on('end', () => process.stdout.write(os.EOL));
  stream.pipe(process.stdout);
};
