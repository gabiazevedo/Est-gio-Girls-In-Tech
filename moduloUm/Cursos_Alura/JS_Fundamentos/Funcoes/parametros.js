// parâmetros de função

function soma(numero1, numero2) {
  return numero1 + numero2;
}

console.log(soma(34, 69));

// ordem dos parâmetros

function nomeIdade(nome, idade) {
  return `Meu nome é: ${nome} e tenho ${idade} anos.`;
}

console.log(nomeIdade('Gabi', 33));

function multiplica(num1, num2) {
  return num1 * num2;
}

console.log(multiplica(soma(3, 9), soma(45, 31)));