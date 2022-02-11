var input = require('fs').readFileSync('./moduloZero/Cases/1080-highestAndPosition/stdin', 'utf8');
var lines = input.split('\n').map(num => Number(num));

let biggerNum = lines.reduce((a, b) =>{
  return Math.max(a, b);
})

let position = lines.indexOf(biggerNum) + 1;

console.log(biggerNum);
console.log(position);