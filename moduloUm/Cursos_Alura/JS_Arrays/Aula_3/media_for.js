const notas = [10, 6.5, 8, 7.5];

let media = 0;

for (let i = 0; i < notas.length; i += 1) {
  media += notas[i];
}

console.log(media / notas.length)
