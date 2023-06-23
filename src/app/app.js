import { homedir } from 'os';
import { createInterface } from 'readline/promises';

class App {
  constructor(args) {
    this.cwd = homedir();
    this.userName = this.parseUserName(args);
  }

  start() {
    console.log(`Welcome to the File Manager, ${this.userName}!`);
    console.log(`You are currently in ${this.cwd}`);
    const readLine = createInterface({
      input: process.stdin,
      output: process.stdout
    });

    readLine.on('line', (input) => {
      if (input.startsWith('.exit ') || input ==='.exit') this.stop();
      console.log(`Command: ${input}`);
      console.log(`You are currently in ${this.cwd}`);
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