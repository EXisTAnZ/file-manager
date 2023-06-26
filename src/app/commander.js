import compress from "./arch/compress.js";
import decompress from "./arch/decompress.js";
import add from "./fs/add.js";
import changeDir from "./fs/changeDir.js";
import copy from "./fs/copy.js";
import remove from "./fs/delete.js";
import list from "./fs/list.js";
import move from "./fs/move.js";
import read from "./fs/read.js";
import rename from "./fs/rename.js";
import hash from "./hash/hash.js";
import osInfo from "./os/os.js";

class Commander {
  
  constructor(curDir) {
    this.curDir = curDir;
  }

  async exec(input) {
    const { command, args } = this.parseInput(input);
    console.log(command, args);
    
    switch (command) {
      case 'up':
        this.curDir = await changeDir(this.curDir, '../');
        break;
      case 'cd':
        this.curDir = await changeDir(this.curDir, args[0]);
        break;
      case 'ls':
        await list(this.curDir);
        break;
      case 'cat':
        await read(this.curDir, args[0]);
        break;
      case 'add':
        await add(this.curDir, args[0]);
        break;
      case 'rn':
        await rename(this.curDir, args[0], args[1]);
        break;
      case 'cp':
        await copy(this.curDir, args[0], args[1]);
        break;
      case 'mv':
        await move(this.curDir, args[0], args[1]);
        break;
      case 'rm':
        await remove(this.curDir, args[0]);
        break;
      case 'os':
        osInfo(args[0]);
        break;
      case 'hash':
        await hash(this.curDir, args[0]);
        break;
      case 'compress':
        await compress(this.curDir, args[0], args[1]);
        break;
      case 'decompress':
        await decompress(this.curDir, args[0], args[1]);
        break;
      case '':
        break;
      default:
        console.log('Invalid input. Unknown Command!');
    }
    setTimeout(() => {
      console.log(`You are currently in ${this.curDir}`);
    }, 200);
    
  }

  parseInput(input) {
    const reg = new RegExp(/\s+(?=(?:"[^"]*"|[^"])*$)/); //spaces except spaces between "
    const arrInput = input.trim().split(reg);
    const command = arrInput.shift();
    const args = arrInput.map(arg => arg.replace(/(^")|("$)/g, ''));
  
    return { command, args };
  }
    
  }

  export default Commander;
