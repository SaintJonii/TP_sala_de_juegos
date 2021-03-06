import { Juego } from '../classes/juego';

export class JuegoAdivina extends Juego {
  numeroSecreto = 0;
  numeroIngresado = 0;
  constructor(gano?: boolean) {
    super(gano);

  }
  public verificar() {
    if (this.numeroIngresado == this.numeroSecreto) {
      this.gano = true;
    }
    if (this.gano) {
      return true;
    } else {
      return false;
    }
  }
  public generarnumero() {
    this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
    console.info('numero Secreto:' + this.numeroSecreto);
    this.gano = false;
  }
  public retornarAyuda() {
    if (this.numeroIngresado < this.numeroSecreto) {
      return 'Te falta para acercarte';
    }
    return 'Te pasaste del número ';
  }
}
