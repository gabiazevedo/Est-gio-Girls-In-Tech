package br.com.alura.escola;


import br.com.alura.escola.aplicacao.aluno.matricular.MatricularAluno;
import br.com.alura.escola.aplicacao.aluno.matricular.MatricularAlunoDto;
import br.com.alura.escola.dominio.PublicadorDeEventos;
import br.com.alura.escola.dominio.aluno.LogDeAlunoMatriculado;
import br.com.alura.escola.infra.aluno.RepositorioDeAlunosEmMemoria;

public class MatricularAlunoViaLinhaDeComando { // exemplo de código de uso das classes do domínio da aplicação
  
  public static void main(String[] args) {
    String nome = "Gabi Azevedo";
    String cpf = "123.456.789-00";
    String email = "gabiazevedo@gmail.com";

    MatricularAlunoDto dto = new MatricularAlunoDto(nome, cpf, email);

    PublicadorDeEventos publicador = new PublicadorDeEventos();
    publicador.adicionar(new LogDeAlunoMatriculado());

    MatricularAluno matricular = new MatricularAluno(new RepositorioDeAlunosEmMemoria(), publicador);
    matricular.executa(new MatricularAlunoDto(nome, cpf, email));

    matricular.executa(dto);
  }
}
