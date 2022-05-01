package br.com.alura.escola.dominio.aluno;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

public class TelefoneTest {

	@Test
	void naoDeveriaCriarTelefoneComDDDsInvalidos() {
		assertThrows(IllegalArgumentException.class,
			() -> new Telefone(null, "123456789"));

		assertThrows(IllegalArgumentException.class,
		  () -> new Telefone("", "123456789"));

		assertThrows(IllegalArgumentException.class,
		  () -> new Telefone("1", "123456789"));
	}

	@Test
	void naoDeveriaCriarTelefoneComNumeroInvalido() {
		assertThrows(IllegalArgumentException.class,
			() -> new Telefone("22", "null"));

		assertThrows(IllegalArgumentException.class,
		  () -> new Telefone("24", ""));

		assertThrows(IllegalArgumentException.class,
		  () -> new Telefone("21", "1234"));
	}

	@Test
	void deveriaPermitirCriarTelefoneComDDDENumerosValidos() {
		String ddd = "11";
		String numero = "123456789";
		Telefone telefone = new Telefone(ddd, numero);
		assertEquals(ddd, telefone.getDdd());
		assertEquals(numero, telefone.getNumero());
	}

}
