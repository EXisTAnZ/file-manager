import { homedir } from 'os';
import { createInterface } from 'readline/promises';
import Commander from './commander.js';

class App {
  constructor(args) {
    this.curDir = homedir();
    this.userName = this.parseUserName(args);
    this.commander = new Commander(this.curDir);
  }

  start() {
    console.log(`Welcome to the File Manager, ${this.userName}!`);
    console.log(`You are currently in ${this.curDir}`);
    const readLine = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readLine.on('line', (input) => {
      if (input.startsWith('.exit ') || input ==='.exit') this.stop();
      console.log(`You are currently in ${this.curDir}`);
      this.commander.exec(input);
    });
    readLine.on('close', () => {
      this.stop();
    });
  }

  stop() {
    console.log(`Thank you for using File Manager, ${this.userName}, goodbye!`);
    process.exit();
  }
  parseUserName(arr) {
    const userNameArg = arr.find(arg => arg.match(/^--username/));
    const userName = userNameArg && userNameArg.split('=')[1] || 'Onanymus';
    return userName;
  }
}

export default App;