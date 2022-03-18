// Selection Sort - Troca de lugares - Ordenação por seleção

const menorValor = require('./menorValor');
const livros = require('./listaLivros');

// ordenação de seleção - objetivo é encontrar o menor valor e trocar com o elemento sobsequente.

for (let atual = 0; atual < livros.length - 1; atual += 1) {
  let menor = menorValor(livros, atual); // guarda um inteiro com o índice do elemento de menor valor no array passado por parâmetro.

  let livroAtual = livros[atual]; //guardamos o elemento do array na posição atual
  let livroMenorPreco = livros[menor];//guardamos o elemento do array que possui o menor valor

  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;
}

// usando o forEach

livros.forEach((_, indice) => {
  let menor = menorValor(livros, indice);

  let livroAtual = livros[indice]; //guardamos o elemento do array na posição atual
  let livroMenorPreco = livros[menor];//guardamos o elemento do array que possui o menor valor

  livros[indice] = livroMenorPreco;
  livros[menor] = livroAtual;

});

console.log(livros);