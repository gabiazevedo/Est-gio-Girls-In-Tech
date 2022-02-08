var input = require('fs').readFileSync('./moduloZero/1015-distanceBetweenTwoPoints/stdin', 'utf8');
var lines = input.split('\n');

let [x1, y1] = lines.shift().split(' ').map(n => Number(n));
let [x2, y2] = lines.shift().split(' ').map(n => Number(n));

const distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)).toFixed(4);

console.log(distance);

// Links que guiaram o desenvolvimento

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow