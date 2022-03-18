// Insertion Sort - Ordenação por inserção - O elemento é inserido na posição correta,
// à partir de comparação com o item à sua esquerda

/* Compara o elemento atual com o elemento à esquerda, se o atual for menor que o elemento à esquerda,
acontece a troca de elementos. */

const livros = require('../listaLivros');

function insertionSort(lista) {
  for (let atual = 1; atual < lista.length; atual += 1) {
    let analise = atual;
    while (lista[analise].preco < lista[analise - 1].preco) {
      let itemAnalise = lista[analise];
      let itemAnterior = lista[analise - 1];

      lista[analise] = itemAnterior;
      lista[analise - 1] = itemAnalise;

      analise--;
    }
  }  
  console.log(lista);
}

insertionSort(livros);