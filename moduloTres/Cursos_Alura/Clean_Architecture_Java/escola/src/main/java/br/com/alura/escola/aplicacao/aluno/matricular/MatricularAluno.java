package br.com.alura.escola.aplicacao.aluno.matricular;

import br.com.alura.escola.dominio.aluno.Aluno;
import br.com.alura.escola.dominio.aluno.RepositorioDeAlunos;

public class MatricularAluno { // use case
  
  private final RepositorioDeAlunos repositorio;

  public MatricularAluno(RepositorioDeAlunos repositorio) {
    this.repositorio = repositorio;
  }

  // Command - Design Patterns
  public void executa(MatricularAlunoDto dados) {
    Aluno novo = dados.criarAluno();
    repositorio.matricular(novo);
  }
}
