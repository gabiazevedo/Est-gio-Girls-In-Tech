// tipo de dado
// booleanos

/* Conversão implícita */

const numero = 123;
const numeroString = '123';
console.log(numero == numeroString);

/* Conversão explícita */

// Number() -> converte dados para o tipo número
// String() -> converte dados para o tipo string

console.log(numero + Number(numeroString));
