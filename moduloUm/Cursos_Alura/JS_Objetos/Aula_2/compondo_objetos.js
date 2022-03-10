const cliente = {
  nome: 'Gabriela',
  idade: 33,
  cpf: '12476589320',
  email: 'gabiazevedoms@gmail.com',
  fones: ['987654123', '986754532']
}

cliente.dependentes = {
  nome: 'Heitor',
  parentesco: 'Filho',
  dataNascimento: '11/09/2010'
}

console.log(cliente);

cliente.dependentes.nome = 'Heitor Azevedo';

console.log(cliente);