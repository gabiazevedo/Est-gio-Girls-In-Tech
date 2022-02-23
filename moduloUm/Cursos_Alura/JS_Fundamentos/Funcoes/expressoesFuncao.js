function minhaFuncao(param) {
  // bloco de código a ser executado
}

// expressão de função

// diferença principal: HOISTING
// funções e variáveis (var) são 'listadas' no topo do arquivo.

console.log(greeting())
function greeting() {
  return 'olá';
}

const soma = function(num1, num2) {return num1, num2}
console.log(soma(2, 2));

