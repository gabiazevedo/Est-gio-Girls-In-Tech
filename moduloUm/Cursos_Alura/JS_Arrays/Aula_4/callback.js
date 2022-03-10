const nomes = ['Ana', 'Ju', 'Leo', 'Paula'];

nomes.forEach(imprimeNomes);

function imprimeNomes(nome) {
  console.log(nome)
}

// Para o JavaScript, qualquer função que seja chamada como argumento de outra é considerada uma função callback, não apenas em caso de métodos.