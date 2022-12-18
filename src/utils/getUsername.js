const args = Object.fromEntries(process.argv.map(arg => arg.split('=')));
const username = args['--username'];

export const printGreeting = () => {
  console.log(`Welcome to the File Manager, ${username}!`);
};

export const printFarewell = () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
};
