package br.com.alura.escola.dominio.aluno;

public class FabricaDeAluno {
  // classe que constrói objetos do tipo alunos, não é padrão de projeto Factory
  private Aluno aluno;

  // método de construção do objeto Aluno, já explícita a ordem dos parâmetros
  public FabricaDeAluno comNomeCPFEmail(String nome, String cpf, String email) { 
    this.aluno = new Aluno(new CPF(cpf), nome, new Email(email));
    return this;
  }

  public FabricaDeAluno comTelefone(String ddd, String numero) {
    this.aluno.adicionarTelefone(ddd, numero);
    return this;
  }

  public Aluno criar() { // método que cria o objeto aluno, devolve o objeto aluno
    return this.aluno;
  }

  // Utilização da Factory
  // Como criar um objeto aluno à partir da factory
  /* public static void main(String[] args) {
    FabricaDeAluno fabrica = new FabricaDeAluno();
    Aluno aluno2 = fabrica.comNomeCPFEmail("Gabriela", "123456789", "gabrizadevo@gmail.com")
      .comTelefone("24", "123456789")
      .comTelefone("", "")
      .criar();
  } */
}
