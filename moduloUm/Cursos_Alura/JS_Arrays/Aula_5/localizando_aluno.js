const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediasDosAlunos = [10, 7, 9, 6];

let listaDeNotasEAlunos = [alunos, mediasDosAlunos];

const exibeNomeNota = (nomeAluno) => {
  if (listaDeNotasEAlunos[0].includes(nomeAluno)) { // array.includes() retorna boolean
    let indice = listaDeNotasEAlunos[0].indexOf(nomeAluno) // array.indexOf() retorna um number (índice do elemento passado via parâmetro)
    return listaDeNotasEAlunos[0][indice] + ', sua media é ' +
    listaDeNotasEAlunos[1][indice];
  } else {
    return 'Aluno não está cadastrado';
  }
}

console.log(exibeNomeNota('Ana'));