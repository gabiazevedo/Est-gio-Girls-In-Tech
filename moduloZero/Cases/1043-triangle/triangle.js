var input = require('fs').readFileSync('./moduloZero/Cases/1043-triangle/stdin', 'utf8');
var lines = input.split('\n').toString().split(' ');

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);

if ((a + b > c) && (a + c > b) && (c + b > a)) {
  console.log(`Perímetro = ${(a + b + c).toFixed(1)}`);
} else {
  console.log(`Área = ${(((a + b) * c) / 2).toFixed(1)}`)
}