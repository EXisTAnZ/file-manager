import add from "./fs/add.js";
import changeDir from "./fs/changeDir.js";
import copy from "./fs/copy.js";
import list from "./fs/list.js";
import read from "./fs/read.js";
import rename from "./fs/rename.js";

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
        console.log(`Need implement ${command} command!`);
        break;
      case 'rm':
        console.log(`Need implement ${command} command!`);
        break;
      case 'os':
        console.log(`Need implement ${command} command!`);
        break;
      case 'hash':
        console.log(`Need implement ${command} command!`);
        break;
      case 'compress':
        console.log(`Need implement ${command} command!`);
         break;
      case 'decompress':
        console.log(`Need implement ${command} command!`);
        break;
      case '':
        break;
      default:
        console.log('Invalid input. Unknown Command!');
    }
    console.log(`You are currently in ${this.curDir}`);
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
