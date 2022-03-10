const cliente = {
  nome: 'Gabriela',
  idade: 33,
  cpf: '12476589320',
  email: 'gabiazevedoms@gmail.com',
  fones: ['987654123', '986754532'],
  dependentes: [
    {
      nome: 'Heitor',
      parentesco: 'Filho',
      dataNascimento: '11/09/2010'
    },
    {
      nome: 'Edna Azevedo',
      parentesco: 'Mãe',
      dataNascimento: '20/06/1964'
    }
  ],
  saldo: 100,
  depositar: function(valor) { // utilizamos funções para adicionar comportamentos aos objetos
    this.saldo += valor
  }
}

console.log(cliente.saldo);
cliente.depositar(30)
console.log(cliente.saldo);