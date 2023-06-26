import fs from "fs/promises";
import { resolve } from "path";

export default async function remove(curDir, fileName) {
  if (!fileName) {
    console.log('Invalid input. Try to use: rm path_to_file');
    return;
  }
  const filePath = resolve(curDir, fileName);
  fs.rm(filePath)
    .then(_ => console.log('File was deleted'))
    .catch(error => console.log(`Operation failed. ${error.code}`));
};
