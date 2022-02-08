var input = require('fs').readFileSync('./moduloZero/1012-area/stdin', 'utf8');

const [ A, B, C ] = input.split(' ').map(side => Number(side));
const PI = 3.14159;

const triangle = (A * C) / 2;
  console.log(`TRIANGULO: ${triangle.toFixed(3)}`);
const circle = PI * Math.pow(C, 2);
  console.log(`CIRCULO: ${circle.toFixed(3)}`);
const trapezium = ((A + B) * C) / 2;
  console.log(`TRAPEZIO: ${trapezium.toFixed(3)}`);
const square = Math.pow(B, 2);
  console.log(`QUADRADO: ${square.toFixed(3)}`);
const rectangle = A * B;
  console.log(`RETANGULO: ${rectangle.toFixed(3)}`);
