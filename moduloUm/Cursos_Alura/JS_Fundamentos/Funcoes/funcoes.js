/*
Particularidades:

- Funções executam ações dentro do código;
- De acordo com o padrão SOLID de desenvolvimento, as funções devem seguir o S - 'Single Responsability Principle', ou seja,
  Princípio da Responsabilidade Única, isso significa que funções devem ter uma única responsabilidade.
*/ 

// 1 - Declara a função

function imprimeTexto(texto) {
  console.log(texto);
};

// 2 - executa a função (uma ou mais vezes)

imprimeTexto('oi');
imprimeTexto('Olá mundo!!!');

function soma() {
  return 2 + 2;
}

console.log(soma());