class App {
  constructor(args) {
    this.userName = this.parseUserName(args)
  }

  start() {
    console.log(`Welcome to the File Manager, ${this.userName}!`);
  }

  parseUserName(arr) {
    const userNameArg = arr.find(arg => arg.match(/^--username/));
    const userName = userNameArg && userNameArg.split('=')[1] || 'Onanymus';
    return userName;
  }
}

export default App;