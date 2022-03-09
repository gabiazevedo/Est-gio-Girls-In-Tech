const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago"
  },
  status: "desaparecido"
 }

 delete objPersonagem.aliado;
 delete objPersonagem.status;

// o valor de retorno do operador delete é booleano (true or false)
// o operador delete NÃO remove propriedades herdadas de outro objeto, se tentarmos fazer, aí sim o operador delete retornará false.

 console.log(objPersonagem);