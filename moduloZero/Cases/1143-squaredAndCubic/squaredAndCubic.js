var input = require('fs').readFileSync('./moduloZero/Cases/1143-squaredAndCubic/stdin', 'utf8');
var lines = input.split('\n').toString();

for (let i = 1; i <= lines; i += 1) {
  console.log(`${i} ${i * i} ${i * i * i}`)
}
