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

const gabi = new Cliente('Gabriela', 'gabi@gmail.com', '123456789', 100);

gabi.exibirSaldo()
console.log(gabi);
