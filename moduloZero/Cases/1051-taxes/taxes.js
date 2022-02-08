var input = require('fs').readFileSync('./moduloZero/1051-taxes/stdin', 'utf8');
var lines = Number(input.split('\n'));

if (lines >= 0.00 && lines <= 2000.00) {
  console.log('Isento');
} else if (lines >= 2000.01 && lines <= 3000.00) {
  console.log(`R$ ${((lines - 2000.00) * 0.08).toFixed(2)}`);
} else if (lines >= 3000.01 && lines <= 4500.00) {
  console.log(`R$ ${(((lines - 3000.00) * 0.18) + ((1000.00 * 0.08))).toFixed(2)}`);
} else {
  console.log(`R$ ${(((lines - 4500.00) * 0.28) + (1500.00 * 0.18) + (1000.00 * 0.08)).toFixed(2)}`);
}