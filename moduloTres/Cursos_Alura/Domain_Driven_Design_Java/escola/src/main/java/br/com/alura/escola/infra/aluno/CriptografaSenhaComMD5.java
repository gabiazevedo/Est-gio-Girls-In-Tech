package br.com.alura.escola.infra.aluno;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import br.com.alura.escola.dominio.aluno.CriptografaSenha;

public class CriptografaSenhaComMD5 implements CriptografaSenha {

  @Override
  public String criptografarSenha(String senha) {
    try {
      MessageDigest md = MessageDigest.getInstance("MD5");
      md.update(senha.getBytes());
      byte[] bytes = md.digest();
      StringBuilder sb = new StringBuilder();
      for (int i = 0; i < bytes.length; i++) {
        sb.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
      }
      return sb.toString();
    } catch (NoSuchAlgorithmException e) {
      throw new RuntimeException("erro ao gerar hash da senha");
    }
  }

  @Override
  public boolean validarSenhaCriptografada(String senhaCriptografada, String senha) {
    return senhaCriptografada.equals(criptografarSenha(senha));
  }
}
