var input = require('fs').readFileSync('./moduloZero/Cases/1142-pum/stdin', 'utf8');
var lines = input.split('\n').toString();

for (let i = 1; i <= lines; i += 1) {
  console.log(`${i * 4 - 3} ${i * 4 - 2} ${i * 4 - 1} PUM`);
}
