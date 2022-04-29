package escola;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

class CPFTest {

	@Test
  void naoDeveriaCriarCPFComNumerosInvalidos() {
		assertThrows(IllegalArgumentException.class,
		() -> new CPF(null));

		assertThrows(IllegalArgumentException.class,
			() -> new CPF(""));

		assertThrows(IllegalArgumentException.class,
			() -> new CPF("123456789"));
	}

	@Test
	void deveriaPermitirCriarCPFCOmNumeroValido() {
		String numeroCPF = "123.456.789-82";
		CPF cpf = new CPF(numeroCPF);
		assertEquals(numeroCPF, cpf.getCPF());
	}
}
