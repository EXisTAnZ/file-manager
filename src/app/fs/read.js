import fs from "fs";
import { resolve } from "path";

export default async function read(curDir, filename) {
  if (!filename) {
    console.log('Invalid input. Filename not specified!')
    return;
  }
  const filePath = resolve(curDir, filename)
  const stream = new fs.ReadStream(filePath);
  stream.on('error', () => console.log('Operation failed'));
  stream.pipe(process.stdout);
};
