var input = require('fs').readFileSync('./moduloZero/1145-logicalSequence2/stdin', 'utf8');
var lines = input.split('\n').toString().split(' ');

let x = lines[0];
let y = lines[1];
let line = 0;

for (let i = 0; i < y; i += 1) {
  line += 1
  if (line == x) {
    line = 0;
    console.log(`${i + 1}\n`)
  } else {
    console.log(`${i + 1} `);
  }
}

// Resolução incompleta
