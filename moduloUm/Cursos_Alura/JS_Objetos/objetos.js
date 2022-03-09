const cliente = {
  nome: 'Gabriela',
  idade: 33,
  cpf: '12476589320',
  email: 'gabiazevedoms@gmail.com'
}

// objetos são formados por pares de informação - { chave: valor }

// Acessando informações de dentro de um objeto
console.log(`Meu nome é ${cliente.nome} e eu tenho ${cliente.idade} anos.`);
console.log(cliente.cpf.substring(0, 3))
/* substring() aceita dois parâmetros, o primeiro é o número do índice que queremos iniciar
o corte da string e o segundo é o final do pedaço que queremos pegar */