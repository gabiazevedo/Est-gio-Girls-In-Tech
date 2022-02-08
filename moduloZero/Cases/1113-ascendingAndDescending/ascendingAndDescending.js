var input = require('fs').readFileSync('./moduloZero/1113-ascendingAndDescending/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i += 1) {
  if (lines[i].charAt() > lines[i].charAt(2)) {
    console.log('Decrescente');
  } else if (lines[i].charAt() < lines[i].charAt(2)) {
    console.log('Crescente');
  } else {
    return '';
  }
}
