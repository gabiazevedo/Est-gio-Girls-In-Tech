/*
Ser autenticável significa ter o método autenticar

Duck Typing - pensamento usado em linguagens fracamente tipadas - não me importa quem é o meu objeto
o importante é se o objeto em questão tem os métodos ou propriedades que eu quero utilizar.
*/

export class SistemaAutenticacao {
  // Polimorfismo: tratar objetos diferentes de maneiras similares
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.eAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  /*
  verifica se existe dentro do meu objeto Cliente a chave 'autenticar'
  uma vez que existe uma chave autenticar no meu objeto eu faço uma segunda verificação
  se o meu autenticavel.autenticar é uma função
  */

  static eAutenticavel(autenticavel) {
    return 'autenticar' in autenticavel &&
    autenticavel.autenticar instanceof Function
  }
}