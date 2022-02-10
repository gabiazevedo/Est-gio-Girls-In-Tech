var input = require('fs').readFileSync('./moduloZero/Cases/1038-snack/stdin', 'utf8');
var lines = input.split('\n');

const [productCode, productQuantity] = lines.toString().replace(' ', '').split('').map(item => Number(item));;

switch (productCode) {
  case 1:
    console.log(`Total: R$ ${(4.00 * productQuantity).toFixed(2)}`);
    break;
  case 2:
    console.log(`Total: R$ ${(4.50 * productQuantity).toFixed(2)}`);
    break;
  case 3:
    console.log(`Total: R$ ${(5.00 * productQuantity).toFixed(2)}`);
    break;
  case 4:
    console.log(`Total: R$ ${(2.00 * productQuantity).toFixed(2)}`);
    break;
  case 5:
    console.log(`Total: R$ ${(1.50 * productQuantity).toFixed(2)}`);
    break;
  default:
    console.log(`Invalid product! Please, type a valid product code.`)
    break;
}
