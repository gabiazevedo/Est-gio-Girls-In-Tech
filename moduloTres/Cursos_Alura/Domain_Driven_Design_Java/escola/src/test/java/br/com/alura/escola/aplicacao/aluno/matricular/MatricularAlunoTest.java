package br.com.alura.escola.aplicacao.aluno.matricular;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import br.com.alura.escola.dominio.PublicadorDeEventos;
import br.com.alura.escola.dominio.aluno.Aluno;
import br.com.alura.escola.dominio.aluno.CPF;
import br.com.alura.escola.infra.aluno.RepositorioDeAlunosEmMemoria;

class MatricularAlunoTest { // recomenda-se testar a camada de domínio e aplicação
  
  @Test
  void alunoDeveriaSerPersistido() {
    // MOCK -> Mockito
    RepositorioDeAlunosEmMemoria repositorio = new RepositorioDeAlunosEmMemoria();

    MatricularAluno useCase = new MatricularAluno(repositorio, new PublicadorDeEventos());

    MatricularAlunoDto dados = new MatricularAlunoDto(
      "Gabi",
      "123.456.789-00",
      "gabiazevedo@gmail.com");
    useCase.executa(dados);

    Aluno encontrado = repositorio.buscarPorCPF(new CPF("123.456.789-00"));

    assertEquals("Gabi", encontrado.getNome());
    assertEquals("123.456.789-00", encontrado.getCPF());
    assertEquals("gabiazevedo@gmail.com", encontrado.getEmail());
  }
}
