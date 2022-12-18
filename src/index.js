import readlinePromises from 'node:readline/promises';

const args = Object.fromEntries(process.argv.map(arg => arg.split('=')));
const username = args['--username'];
console.log(`Welcome to the File Manager, ${username}!`);

const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', line => {
  if (/^.exit/.test(line)) rl.close();
  console.log(`recieved ${line}`);
}).on('close', () =>
  console.log(`Thank you for using File Manager, ${username}, goodbye!`)
);
