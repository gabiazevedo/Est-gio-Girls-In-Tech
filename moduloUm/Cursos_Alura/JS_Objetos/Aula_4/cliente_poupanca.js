function Cliente(nome, cpf, email, saldo) {
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  this.depositar = function(valor) {
    this.saldo += valor
  }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  Cliente.call(this, nome, cpf, email, saldo)
  this.saldoPoup = saldoPoup;
}

const gabi = new ClientePoupanca('Gabriela', '123456789', 'gabi@gmail.com', 100, 200);

ClientePoupanca.prototype.depositarPoup = function(valor) {
  this.saldoPoup += valor;
}

gabi.depositarPoup(30);

//console.log(gabi.saldoPoup);

//console.log(gabi);

const catalogo = {
  "editora": "Casa do Código",
  "catalogo": [
  {
    "id": 50,
    "titulo": "Primeiros Passos com NodeJS",
    "autor": "João Rubens",
    "categoria": "programação",
    "versoes": ["ebook", "impresso"]
  }
 ]}

 console.log(Object.getOwnPropertyDescriptor(catalogo, 'editora'));