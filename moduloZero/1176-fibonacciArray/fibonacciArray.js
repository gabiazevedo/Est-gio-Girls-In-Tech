var input = require('fs').readFileSync('./moduloZero/1176-fibonacciArray/stdin', 'utf8');
var lines = input.split('\n');

let testes = Number(lines[0]);

let fibo = [];
  fibo[0] = 0;
  fibo[1] = 1;

for (let i = 2; i <= 60; i += 1) {
  fibo[i] = fibo[i - 2] + fibo[i - 1];
}
console.log(fibo)

