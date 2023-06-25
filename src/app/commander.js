import { changeDir } from "./fs/changeDir.js";

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
        console.log(`Need implement ${command} command!`);
        break;
      case 'cat':
        console.log(`Need implement ${command} command!`);
        break;
      case 'add':
        console.log(`Need implement ${command} command!`);
        break;
      case 'rn':
        console.log(`Need implement ${command} command!`);
        break;
      case 'cp':
        console.log(`Need implement ${command} command!`);
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
        console.log('Invalid input');
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