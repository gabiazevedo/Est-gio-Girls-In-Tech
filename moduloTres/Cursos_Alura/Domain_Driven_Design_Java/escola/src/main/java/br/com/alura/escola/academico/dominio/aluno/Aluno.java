package br.com.alura.escola.academico.dominio.aluno;

import java.util.ArrayList;
import java.util.List;

import br.com.alura.escola.shared.dominio.CPF;

public class Aluno { // Aggregate Root - Classe raiz de outras classes que são values objects

  private CPF cpf; // Classes que possuem um atributo que diferencia um objeto do outro são chamadas Entidades. 
  private String nome;
  private Email email; // O atributo email requer uma classe própria por demandar validações.

  private List<Telefone> telefones = new ArrayList<>();

  private String senha;

  public Aluno(CPF cpf, String nome, Email email) {
    this.cpf = cpf;
    this.nome = nome;
    this.email = email;
  }

  public void adicionarTelefone(String ddd, String numero) { // Invariante (regra de negócio)
    if (telefones.size() == 2) {
      throw new IllegalArgumentException("Número máximo de telefones atingido!");
    }
    this.telefones.add(new Telefone(ddd, numero));
  }

  public CPF getCPF() {
    return cpf;
  }

  public String getNome() {
    return nome;
  }

  public String getEmail() {
    return email.getEmail();
  }

  public List<Telefone> getTelefones() {
    return telefones;
  }

  public String getSenha() {
		return senha;
	}
}
