package br.com.alura.escola.dominio.aluno;
/*
Na classe Email, se eu tiver dois e-mails com o mesmo endereço, é do mesmo e-mail que eu estou falando.
Então não existe essa diferenciação, nós não temos um Id e nenhum atributo que diferencie.

Então a classe Email não é uma entidade. Esse tipo de classe em que o que interessa é só um valor que ele tem,
se esse valor for igual consideramos que os objetos, as instâncias são iguais segue outro padrão, que é chamado de Value Object.

Então esse não é uma entidade.
Uma entidade é quando temos uma maneira de diferenciar duas instâncias (objetos) através de alguma identificação que seja única.

Já no caso do Value Object não temos essa diferenciação.
Se os objetos tiverem esse mesmo atributo com o mesmo valor é considerado como sendo o mesmo objeto, a mesma instância.
No caso, se dois e-mails têm o mesmo endereço, eu estou falando do mesmo e-mail.
*/

public class Email {

  private String endereco;

  // Value Object

  public Email(String endereco) {
    if (endereco == null || !endereco.matches("^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")) {
      throw new IllegalArgumentException("E-mail inválido!");
    }
    this.endereco = endereco;
  }

  public String getEmail() {
    return endereco;
  }
}
