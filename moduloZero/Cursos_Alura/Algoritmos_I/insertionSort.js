// https://dev.to/seanwelshbrown/implementing-an-insertion-sort-algorithm-in-javascript-19de

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

const insertionSort = (arrayCar) => {
  for (let i = 1; i < arrayCar.length; i += 1) {
    // loop for principal, inicando em 1, porque no início de cada iteração precisamos comparar o elemento atual com o anterior,
    // para indentificarmos se existe necessidade de troca de posição, se iniciarmos o loop em 0 não teremos antecessor para comparar.
    let j = i; // declaração de um segundo ponteiro que será utilizado dentro o  loop while para comparação com o i do primeiro loop.
    while (j > 0 && arrayCar[j].preco < arrayCar[j - 1].preco) {
      // loop while será acionado enquanto j for maior que 0 e que array[j] for menor que array[j - 1], essas duas condições 
      // permitirão que loop percorra todo o array, trocando os valores até que o elemento atual seja inserido em seu lugar
      [arrayCar[j - 1].preco, arrayCar[j].preco] = [arrayCar[j].preco, arrayCar[j - 1].preco]
      // troca de cada elemento pelo elemento que vem antes dele, movendo o elemento inical para baixo, um passo de cada vez
      j--;
      // o valor de j será decrementado de modo que em nosso próximo loop ainda estejamos trocando o mesmo elemento
      // com o qual começamos mais abaixo. 
    }
  }
  return arrayCar;
}

console.log(insertionSort(carros))