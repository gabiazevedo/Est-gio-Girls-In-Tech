var input = require('fs').readFileSync('./moduloZero/1014-consumption/stdin', 'utf8');
var lines = input.split('\n');

const [distance, fuel] = lines;

const consumption = distance / fuel;

console.log(`${consumption.toFixed(3)}km/l`);
