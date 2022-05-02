package br.com.alura.escola.dominio;

public abstract class Ouvinte { // Classe que dispara o processamento do evento
  
  public void processaEvento(Evento evento) {
    if (this.deveProcessar(evento)) {
      this.reageAo(evento);
    }
  }

  protected abstract void reageAo(Evento evento);
  protected abstract boolean deveProcessar(Evento evento);
}
