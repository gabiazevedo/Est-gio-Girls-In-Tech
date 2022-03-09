const clientes = [
  {
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
  },
  {
    nome: 'Andre',
    cpf: '123456789',
    email: 'andre@gmail.com',
    fones: ['432567987', '123456789'],
    dependentes: [
      {
        nome: 'Sara',
        parentesco: 'filha',
        dataNascimento: '20/03/2011'
      },
      {
        nome: 'Samia',
        parentesco: 'filha',
        dataNascimento: '04/01/2014'
      }
    ]
  }
]

const spread = (obj) => {
  for (let info in obj) {
    console.log(...obj[info].dependentes);
  }
}

spread(clientes);

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];
// console.log(listaDependentes);

// JSON.parse() => converte JSON para objeto JS
// JSON.stringfy() => converte objeto JS para JSON

/* O processo de converter estruturas de dados em sequências de bytes ou caracteres. como no caso do JSON,
é chamado de serialização (ou marshaling em algumas linguagens como Go). */