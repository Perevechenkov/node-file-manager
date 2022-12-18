import readline from 'node:readline';
import {printGreeting, printFarewell} from './utils/getUsername.js';
import printCurrentPath from './utils/path.js';

printGreeting()
printCurrentPath();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.prompt();
rl.on('line', line => {
  rl.prompt();
  if (/^.exit/.test(line)) rl.close();
}).on('close', () =>
  printFarewell()
);
