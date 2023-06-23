class Commander {
  
  constructor(curDir) {
    this.curDir = curDir;
  }

  exec(input) {
    const { command, args } = this.parseInput(input);
    console.log(command, args);
    
    switch (command) {
      case 'up':
        console.log(`Need implement ${command} command!`);
        break;
      case 'cd':
        console.log(`Need implement ${command} command!`);
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