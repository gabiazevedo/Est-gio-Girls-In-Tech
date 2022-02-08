// https://dev.to/seanwelshbrown/implementing-a-selection-sort-algorithm-in-javascript-9of

// consultei o artigo acima para compreensão e implementação do método
const carros = [
  { nomeCarro: 'Lamborghini',
    preco: 1000000
  },
  { nomeCarro: 'Jipe',
    preco: 46000,
  },
  { nomeCarro: 'Brasília',
    preco: 16000,
  },
  { nomeCarro: 'Smart',
    preco: 46000,
  },
  { nomeCarro: 'Fusca',
    preco: 17000,
  },
]

const selectionSort = (arrayCar) => {
  for (let i = 0; i < arrayCar.length - 1; i += 1) {
    // loop inicial, que inicia no index 0 e vai até o tamanho do array - 1, porque no próximo loop, começaremos comparando o i com seu vizinho i + 1. 
    // precisaremos parar noss loop inicial um índice antes do comprimento total do array.
    let minIndex = i;
    // variável que conterá o índice do menor elemento atual.
      for (let j = i + 1; j < arrayCar.length; j += 1) {
        // loop de comparação 
        if (arrayCar[j].preco < arrayCar[minIndex].preco) {
          // lógica de comparação para avaliar se o próximo elemento é menor que o minIndex(atual)
          minIndex = j;
          // se for menor minIndex recebe esse valor, na reatribuição acima
        }
      }
      [arrayCar[i].preco, arrayCar[minIndex].preco] = [arrayCar[minIndex].preco, arrayCar[i].preco]
      // lógica de troca de valores e posições dentro do array

  }
  return arrayCar // retorna o array ordenado do menor pro maior
}
console.log(selectionSort(carros))