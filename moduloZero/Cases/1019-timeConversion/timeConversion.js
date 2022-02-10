var input = require('fs').readFileSync('./moduloZero/Cases/1019-timeConversion/stdin', 'utf8');
var lines = input.split('\n').toString();

console.log(new Date(Number(lines) * 1000).toISOString().substring(11, 19));

// O código funciona de acordo com a proposta do exercício na plataforma do beecrowd,
// porém, quando executado lá, dá Runtime Error
