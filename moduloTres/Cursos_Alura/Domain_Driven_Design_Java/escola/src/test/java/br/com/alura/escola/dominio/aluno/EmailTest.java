package br.com.alura.escola.dominio.aluno;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

class EmailTest {

	@Test
	void naoDeveriaCriarEmailsComEnderecosInvalidos()  {
		assertThrows(IllegalArgumentException.class,
			() -> new Email(null));
		assertThrows(IllegalArgumentException.class,
		  () -> new Email(""));
		assertThrows(IllegalArgumentException.class,
		  () -> new Email("emailinvalido"));
	}

	@Test
	void deveriaPermitirCriacaoDeEmailValido() {
		String email = "gabiazevedo@gmail.com";
		Email enderecoEmail = new Email(email);

		assertEquals(email, enderecoEmail.getEmail());
	}
}
