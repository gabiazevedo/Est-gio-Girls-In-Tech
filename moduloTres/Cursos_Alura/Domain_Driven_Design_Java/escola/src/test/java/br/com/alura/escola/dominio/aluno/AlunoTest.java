package br.com.alura.escola.dominio.aluno;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class AlunoTest {
  
  private Aluno aluno;

  @BeforeEach
  void beforeEach() {
    this.aluno = new Aluno(
      new CPF("123.456.789-00"),
      "Gabriela Azevedo",
      new Email("gabiazevedo@gmail.com")
    );
  }

  @Test
  void deveriaPermitirAdicionarUmTelefone() {
    this.aluno.adicionarTelefone("22", "999999999");
    assertEquals(1, this.aluno.getTelefones().size());
  }

  @Test
  void deveriaPermitirAdicionarDoisTelefones() {
    this.aluno.adicionarTelefone("22", "123456789");
    this.aluno.adicionarTelefone("24", "789456123");
    assertEquals(2, this.aluno.getTelefones().size());
  }

  @Test 
  void naoDeveriaPermitirAdicionarTresTelefones() {
    assertThrows(IllegalArgumentException.class, () -> {
      this.aluno.adicionarTelefone("22", "123456789");
      this.aluno.adicionarTelefone("24", "789456123");
      this.aluno.adicionarTelefone("19", "444444444");
    });
  }  
}
