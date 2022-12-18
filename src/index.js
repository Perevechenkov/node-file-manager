import readline from 'node:readline';
import { printGreeting, printFarewell } from './utils/getUsername.js';
import printCurrentPath from './utils/path.js';
import emit from './utils/commandEmitter.js';
import { chdir } from 'node:process';
import { homedir } from 'node:os';

printGreeting();
chdir(homedir());
printCurrentPath();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', async command => {
  if (/^.exit/.test(command)) return rl.close();
  try {
    await emit(command);
    printCurrentPath();
  } catch (err) {
    console.log(err.message);
  }
}).on('close', printFarewell);
