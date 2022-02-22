const nome = 'Gabi';
const idade = 2022 - 1988;
const cidadeNatal = 'Rio de Janeiro';

// concatenação básica

const greeting = 'Meu nome é: ' + nome + ', eu tenho ' + idade + ' anos, e nasci no ' + cidadeNatal + '.';
console.log(greeting);

// interpolação de variáveis usando template string

const templateLiteral = `Meu nome é: ${nome}, eu tenho ${idade} anos, e nasci no ${cidadeNatal}.`
console.log(templateLiteral);