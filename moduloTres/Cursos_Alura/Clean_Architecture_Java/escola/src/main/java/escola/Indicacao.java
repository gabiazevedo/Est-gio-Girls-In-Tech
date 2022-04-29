package escola;

import java.time.LocalDateTime;

public class Indicacao {
  
  private Aluno indicado; // pessoa indicada
  private Aluno indicante; // quem indicou
  private LocalDateTime dataIndicacao; // data da indicacao

  public Indicacao(Aluno indicado, Aluno indicante) {
    this.indicado = indicado;
    this.indicante = indicante;
    this.dataIndicacao = LocalDateTime.now();
  }

  public Aluno getIndicacao() {
    return indicado;
  }

  public Aluno getIndicante() {
    return indicante;
  }

  public LocalDateTime getDataIndicacao() {
    return dataIndicacao;
  }
}
