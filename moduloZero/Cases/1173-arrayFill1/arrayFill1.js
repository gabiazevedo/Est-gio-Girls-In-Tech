var input = require('fs').readFileSync('./moduloZero/1173-arrayFill1/stdin', 'utf8');
var lines = input.split('\n').toString();

let n = lines;

for (let i = 0; i < 10; i += 1) {
  console.log(`N[${i}] = ${n}`);
  n = 2 * n;
}
