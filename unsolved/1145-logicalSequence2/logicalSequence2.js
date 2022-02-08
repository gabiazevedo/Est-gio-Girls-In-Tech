var input = require('fs').readFileSync('./unsolved/1145-logicalSequence2/stdin', 'utf8');
var lines = input.split('\n').toString().split(' ');
console.log(lines)
let x = lines[0];
let y = lines[1];
let count = 1;

for (let i = 1; i <= y; i += 1) {
  if (count == x) {
    console.log(i + '\n');
    count = 1;
  } else {
    console.log(i + '');
    count++;
  }
}

// Resolução incompleta
