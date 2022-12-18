const args = Object.fromEntries(process.argv.map(arg => arg.split('=')));

console.log(`Welcome to the File Manager, ${args['--username']}!`);
