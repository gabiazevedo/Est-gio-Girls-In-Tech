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


const oferecerSeguro = (obj) => {
  const propsClientes = Object.keys(obj);
  if (propsClientes.includes('dependentes')) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`);
  } 
}

console.log(Object.keys(cliente)); // método que retorna array com todas as chaves de um objeto
console.log(Object.values(cliente)); // método que retorna array com todos os valores das chaves de um objeto
console.log(Object.entries(cliente)); // método que retorna array com arrays divididos com pares de chave / valor

oferecerSeguro(cliente);
