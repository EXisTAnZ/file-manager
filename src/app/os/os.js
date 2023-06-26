import os from 'os';

export default function osInfo(param){
  if (!param) {
    console.log('Invalid input. Specify argument');
    return;
  }

  switch (param) {
    case '--EOL':
      console.log(JSON.stringify(os.EOL));
      break;
    case '--cpus':
      console.log(os.cpus());
      break;
    case '--homedir':
      console.log(os.homedir());
      break;
    case '--username':
      console.log(os.userInfo().username);
      break;
    case '--architecture':
      console.log(os.arch());
      break;
    default:
      console.log('Invalid input. Unknown parameter.');
      break;
  }
}