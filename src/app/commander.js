import compress from "./arch/compress.js";
import decompress from "./arch/decompress.js";
import hash from "./hash/hash.js";
import osInfo from "./os/os.js";
import filesModule from "./fs/file.module.js";

class Commander {
  
  constructor(curDir) {
    this.curDir = curDir;
  }

  async exec(input) {
    const { command, args } = this.parseInput(input);
    
    switch (command) {
      case 'up':
        this.curDir = await filesModule.changeDir(this.curDir, '../');
        break;
      case 'cd':
        this.curDir = await filesModule.changeDir(this.curDir, args[0]);
        break;
      case 'ls':
        await filesModule.list(this.curDir);
        break;
      case 'cat':
        await filesModule.read(this.curDir, args[0]);
        break;
      case 'add':
        await filesModule.add(this.curDir, args[0]);
        break;
      case 'rn':
        await filesModule.rename(this.curDir, args[0], args[1]);
        break;
      case 'cp':
        await filesModule.copy(this.curDir, args[0], args[1]);
        break;
      case 'mv':
        await filesModule.move(this.curDir, args[0], args[1]);
        break;
      case 'rm':
        await filesModule.remove(this.curDir, args[0]);
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
    }, 300);

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
