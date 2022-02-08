var input = require('fs').readFileSync('./moduloZero/1151-easyFibonacci/stdin', 'utf8');
var lines = input.split('\n');

let fibo = [];
  fibo[0] = 0;
  fibo[1] = 1;

for (let i = 2; i < lines; i += 1) {
  fibo[i] = fibo[i - 2] + fibo[i - 1];
}

console.log(fibo.toString().replace(/[, ]+/g, " ").trim());
