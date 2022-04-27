package src.br.com.alura.rh.service;

import java.math.BigDecimal;

import src.br.com.alura.rh.model.Funcionario;

public interface ValidacaoReajuste {
  void validar(Funcionario funcionario, BigDecimal aumento);
}
