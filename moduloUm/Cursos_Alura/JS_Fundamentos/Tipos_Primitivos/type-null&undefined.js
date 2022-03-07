/*O null é um tipo especial, pois pode ser traduzido como “ausência de valor”
e pode ser atribuído como valor de uma variável: */

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input = null;
let input2;

console.log(input); // null
console.log(input2); // undefined

/*Undefined: representa ausência de valor. A variável da linha 13 foi declarada,
porém, não foi inicializada, por isso, seu valor de retorno será undefined,
até que algum valor seja atribuído a ela. Também pode ser o valor retornado por uma função que
não possui cláusula return.
*/

/* Null: representa ausência de valor de uma variável inicializada com a palavra reservada desse tipo 'null'.
*/


