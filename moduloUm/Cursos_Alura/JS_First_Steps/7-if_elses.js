console.log('Trabalhando com condicionais e expressões lógicas');

const listaDeDestinos = new Array(
  'Salvador',
  'São Paulo',
  'Rio de Janeiro'
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log('Destinos Possíveis: ');

// estruturas condicionais encadeadas

if (idadeComprador >= 18) {
  console.log('Comprador maior de idade.');
  listaDeDestinos.splice(1, 1);  // renovendo item do array de acordo com a posição
} else if (estaAcompanhada) { // a pessoa é menor de idade
  console.log('Comprador maior de idade.');
  listaDeDestinos.splice(1, 1); 
} else {
  console.log('Comprador menor de idade, não posso vender.');
}

// expressões lógicas encadeadas

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log('Comprador maior de idade.');
  listaDeDestinos.splice(1, 1);
} else {
  console.log('Comprador menor de idade, não posso vender.');
}

console.log('Embarque: \n\n');
if (idadeComprador >= 18 && temPassagemComprada) {
  console.log('Desejamos uma boa viagem!!!');
} else {
  console.log('Infelizmente você não pode embarcar');
}

console.log(listaDeDestinos);

// Retornos booleanos de acordo com a variável e a funcionalidade dos operadores de comparação

console.log(idadeComprador > 18); // return false
console.log(idadeComprador < 18); // return true
console.log(idadeComprador <= 18); // return true
console.log(idadeComprador >= 18); // return false
console.log(idadeComprador == 18); // return false
