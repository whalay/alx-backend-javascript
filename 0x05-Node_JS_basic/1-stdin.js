onst readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  process.stdout.write(`Your name is: ${name}\r`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
