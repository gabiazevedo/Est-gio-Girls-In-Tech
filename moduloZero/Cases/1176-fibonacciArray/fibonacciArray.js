var input = require('fs').readFileSync('./moduloZero/Cases/1176-fibonacciArray/stdin', 'utf8');
var lines = input.split('\n');
lines.shift();

let fibo = [];
  fibo[0] = 0;
  fibo[1] = 1;

for (let i = 2; i <= 60; i += 1) {
  fibo[i] = fibo[i - 2] + fibo[i - 1];
}

const N = lines;

for (let i = 0; i < N.length; i += 1) {
  console.log(`Fib(${N[i]}) = ${fibo[N[i]]}`)
}

