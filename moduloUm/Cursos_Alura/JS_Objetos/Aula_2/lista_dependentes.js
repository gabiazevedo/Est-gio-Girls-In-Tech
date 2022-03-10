const cliente = {
  nome: 'Gabriela',
  idade: 33,
  cpf: '12476589320',
  email: 'gabiazevedoms@gmail.com',
  fones: ['987654123', '986754532'],
  dependentes: [{
    nome: 'Heitor',
    parentesco: 'Filho',
    dataNascimento: '11/09/2010'
  }]
}

cliente.dependentes.push({
  nome: 'Edna Azevedo',
  parentesco: 'Mãe',
  dataNascimento: '20/06/1964'
})

const parenteMaisNovo = cliente.dependentes
  .filter(dependente => dependente.dataNascimento === '11/09/2010');

console.log(parenteMaisNovo[0].nome);