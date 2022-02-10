var input = require('fs').readFileSync('./moduloZero/Cases/1074-evenOrOdd/stdin', 'utf8');
var lines = input.split('\n').map((n) => Number(n));
lines.shift();

for (let i = 0; i < lines.length; i += 1) {
  if (lines[i] % 2 !== 0 && lines[i] < 0) {
    console.log('ODD NEGATIVE');
  }
  if (lines[i] === 0) {
    console.log('NULL');
  }
  if (lines[i] % 2 !== 0 && lines[i] > 0) {
    console.log('ODD POSITIVE');
  }
  if (lines[i] % 2 === 0 && lines[i] < 0) {
    console.log('EVEN NEGATIVE');
  }
}
