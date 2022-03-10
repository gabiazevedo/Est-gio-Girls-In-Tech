// função construtora

function Cliente(nome, cpf, email, saldo) {
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  this.depositar = function(valor) {
    this.saldo += valor
  }
}

const gabi = new Cliente('Gabriela', '123456789', 'gabi@gmail.com', 100);

console.log(gabi);
