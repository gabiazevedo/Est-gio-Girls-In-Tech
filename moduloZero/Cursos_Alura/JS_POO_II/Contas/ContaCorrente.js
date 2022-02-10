// #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;
  constructor(cliente, agencia) {
      super(0, cliente, agencia);
      ContaCorrente.numeroDeContas += 1;
  }

  // sobreescrevendo o comportamento do método sacar da classe Conta (classe mãe)
  sacar(valor) {
    let taxa = 1.1;
    return this._sacar(valor, taxa);
  }
}