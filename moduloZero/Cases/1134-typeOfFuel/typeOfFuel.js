var input = require('fs').readFileSync('./moduloZero/Cases/1134-typeOfFuel/stdin', 'utf8');
var lines = input.split('\n');
console.log(lines)

let alcool = 0;
let gas = 0;
let diesel = 0;

for (let i = 0; i < lines.length; i += 1) {
  if (lines[i] == 1) {
    alcool += 1;
  }
  if (lines[i] == 2) {
    gas += 1;
  }
  if (lines[i] == 3) {
    diesel += 1;
  }
  if (lines[i] == 4) {
    break;
  }
}
console.log(`MUITO OBRIGADO`);
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gas}`);
console.log(`Diesel: ${diesel}`);
