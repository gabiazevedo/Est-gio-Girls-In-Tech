const cliente = {
  nome: 'Gabriela',
  idade: 33,
  cpf: '12476589320',
  email: 'gabiazevedoms@gmail.com'
}

const keys = Object.keys(cliente);

keys.forEach(values => console.log(cliente[values]))
