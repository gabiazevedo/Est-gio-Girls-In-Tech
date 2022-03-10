class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  exibirSaldo() {
    console.log(this.saldo);
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoup) {
    super(nome, email, cpf, saldo)
    this.saldoPoup = saldoPoup;
  }

  depositarPoup(valor) {
    this.saldoPoup += valor;
  }
}

const gabi = new ClientePoupanca('Gabriela', 'gabi@gmail.com', '1234567890', 100, 200);

console.log(gabi);

gabi.depositar(50);
gabi.depositarPoup(50);

console.log(gabi);
