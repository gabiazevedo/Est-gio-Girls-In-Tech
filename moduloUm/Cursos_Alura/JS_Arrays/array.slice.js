const nomes = [
  'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme',
  'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela',
  'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
]

const sala1 = nomes.slice(0, nomes.length / 2);

// param 1 - Índice onde quero inicar o corte
// param 2 - Índice onde quero terminar de cortar

const sala2 = nomes.slice(nomes.length / 2); // não é necessário segundo parâmetro, a função já entende que fará o corte até o final do array.

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);
