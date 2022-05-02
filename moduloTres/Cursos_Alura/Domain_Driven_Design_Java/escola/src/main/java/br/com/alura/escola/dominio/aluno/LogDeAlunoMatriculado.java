package br.com.alura.escola.dominio.aluno;

import java.time.format.DateTimeFormatter;

import br.com.alura.escola.dominio.Ouvinte;
import br.com.alura.escola.dominio.Evento;

public class LogDeAlunoMatriculado extends Ouvinte { // Geração de log para registro de aluno matriculado
  
  public void reageAo(Evento evento) {
    String momentoFormatado = evento.momento().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm"));

    System.out.println(
      String.format(
      "Aluno com CPF %s matriculado em: %s",
      ((AlunoMatriculado) evento).getCPFDOAluno(),
      momentoFormatado)
    );
  }

  @Override
  protected boolean deveProcessar(Evento evento) {
    return evento instanceof AlunoMatriculado;
  }
}
