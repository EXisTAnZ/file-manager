import fs from 'fs/promises';

export default async function list(curDir) {

const listArr = [];
fs.readdir(curDir, { withFileTypes: true })
  .then(files => { 
    files.forEach(file => listArr.push({ name: file.name, type: file.isFile()?'file':'directory'}));
    listArr.sort((a,b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name));
    console.table(listArr);
  })
  .catch(err => { console.log('Operation failed', err.code); });
}
