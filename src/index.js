import readline from 'node:readline';

console.log(`You are currently in ${process.cwd()}`);

const args = Object.fromEntries(process.argv.map(arg => arg.split('=')));
const username = args['--username'];
console.log(`Welcome to the File Manager, ${username}!`);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  rl.prompt();
  console.log(`recieved ${line}`);
  if (/^.exit/.test(line)) rl.close();
}).on('close', () =>
  console.log(`Thank you for using File Manager, ${username}, goodbye!`)
);
