var input = require('fs').readFileSync('./moduloZero/1078-multiplicationTable/stdin', 'utf8');
var lines = input.split('\n');

const num = Number(lines);

for(let index = 1; index <= 10; index += 1) {
  console.log(`${index} X ${num} = ${index * num}`);
}
