const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20"
}

/* Estamos usando no exemplo acima a escrita de objeto literal */

/* Objetos literais funcionam bem quando queremos um objeto ÚNICO,
com seus próprios dados. Isso porque o objeto literal aponta para um mesmo
local na memória, mesmo se criarmos cópias dele. */
 
 const objPersonagem2 = objPersonagem

 objPersonagem2.nome = "Gandalf, o Cinzento"

 console.log(objPersonagem.nome) //Gandalf, o Cinzento
 console.log(objPersonagem2.nome) //Gandalf, o Cinzento

/* A variável objPersonagem2 não fez uma cópia do objeto original,
apenas serviu de referência para o objeto objPersonagem. Assim. qualquer alteração
em qualquer um dos objetos altera ambos. Isso porque o JS, quando trabalha com objetos,
acessa os valores deles fazendo referência ao original. */

/* Para contornar esse comportamento ao criar objetos podemos usar o método Object.create().*/

const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

/* O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado
via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem
e pode ser trabalhada de forma independente.*/