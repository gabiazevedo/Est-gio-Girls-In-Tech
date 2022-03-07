const listaDeChamada = [
  'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'
]

listaDeChamada.splice(1, 2, 'Rodrigo');

// param 1 - Índice onde queremos iniciar o corte de substituição de elemento na lista
// param 2 - Quantos índices eu quero remover
// param 3 - Elemento que eu quero que seja colocado no lugar do que foi retirado
// array.splice pode ser usado sem o último parâmetro
// array.splice altera o array original

console.log(`Lista de chamada: ${listaDeChamada}`);