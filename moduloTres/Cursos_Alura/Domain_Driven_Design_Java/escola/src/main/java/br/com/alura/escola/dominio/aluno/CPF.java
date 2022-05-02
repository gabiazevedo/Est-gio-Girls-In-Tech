package br.com.alura.escola.dominio.aluno;

public class CPF {
  
  private String numeroCPF;

  public CPF(String numeroCPF) {
    if (numeroCPF == null || !numeroCPF.matches("\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}")) {
      throw new IllegalArgumentException("CPF inválido!");
    }
    this.numeroCPF = numeroCPF;
  }

  public String getCPF() {
    return numeroCPF;
  }

  @Override
  public String toString() {
    return numeroCPF;
  }
}
