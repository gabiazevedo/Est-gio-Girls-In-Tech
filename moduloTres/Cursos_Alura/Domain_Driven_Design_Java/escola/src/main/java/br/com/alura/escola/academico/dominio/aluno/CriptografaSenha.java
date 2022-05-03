package br.com.alura.escola.academico.dominio.aluno;

public interface CriptografaSenha {
  
  String criptografarSenha(String senha);

  boolean validarSenhaCriptografada(String senhaCriptografada, String senha);

}
