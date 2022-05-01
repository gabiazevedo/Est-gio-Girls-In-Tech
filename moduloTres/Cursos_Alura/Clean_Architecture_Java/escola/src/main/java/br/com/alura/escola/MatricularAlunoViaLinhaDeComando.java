package br.com.alura.escola;


import br.com.alura.escola.aplicacao.aluno.matricular.MatricularAluno;
import br.com.alura.escola.aplicacao.aluno.matricular.MatricularAlunoDto;
import br.com.alura.escola.infra.aluno.RepositorioDeAlunosEmMemoria;

public class MatricularAlunoViaLinhaDeComando { // exemplo de código de uso das classes do domínio da aplicação
  
  public static void main(String[] args) {
    String nome = "Gabi Azevedo";
    String cpf = "123.456.789-00";
    String email = "gabiazevedo@gmail.com";

    MatricularAluno matricular = new MatricularAluno(new RepositorioDeAlunosEmMemoria());
    matricular.executa(new MatricularAlunoDto(nome, cpf, email));
  }
}
