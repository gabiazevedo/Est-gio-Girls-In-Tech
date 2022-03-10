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
  depositar: function(valor) {
    this.saldo += valor
  }
}

let relatorio = '';

for (let info in cliente) {
  if (typeof cliente[info] === 'object' || typeof cliente[info] === 'function') {
    continue
  } else {
    relatorio += `\n${info} -> ${cliente[info]}`;
  }
}

console.log(relatorio);