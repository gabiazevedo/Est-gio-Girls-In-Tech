console.log('Trabalhando com condicionais e estruturas de repetição');

const listaDeDestinos = new Array(
  'Salvador',
  'São Paulo',
  'Rio de Janeiro'
);

const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = 'Salvador';

console.log('\n Destinos Possíveis: ');
console.log(listaDeDestinos);

// expressões lógicas encadeadas

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < listaDeDestinos.length) {
  if (listaDeDestinos[contador] == destino) {
    console.log('Destino existe');
    destinoExiste = true;
    break;
  }
  contador += 1;
}

console.log(`Destino existe: ${destinoExiste}`);

if (podeComprar && destinoExiste) {
  console.log('Desejamos uma boa viagem');
} else {
  console.log('Desculpe, destino inexistente');
}

for (let cont = 0; cont < listaDeDestinos.length; cont += 1) {
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
}
