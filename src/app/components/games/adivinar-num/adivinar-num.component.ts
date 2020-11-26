import { Component, OnInit } from '@angular/core';
import { JuegoAdivina } from "../../../classes/juego-adivina";
import { UtilService } from 'src/app/services/util.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adivinar-num',
  templateUrl: './adivinar-num.component.html',
  styleUrls: ['./adivinar-num.component.scss']
})
export class AdivinarNumComponent implements OnInit {
  nuevoJuego: JuegoAdivina;
  Mensajes: string;
  contador: number;
  ocultarVerificar: boolean;
  juegoStore = 'adivina';
  nombreJuego = 'Adivina Número'
  puntuacion = 0;

  constructor(private utilService: UtilService, private toastr: ToastrService) {
    this.nuevoJuego = new JuegoAdivina();
    console.info('numero Secreto:', this.nuevoJuego.numeroSecreto);
    this.ocultarVerificar = false;
  }

  generarnumero() {
    this.nuevoJuego.generarnumero();
    this.contador = 0;
  }

  verificar() {
    this.contador++;
    this.ocultarVerificar = true;
    console.info('numero Secreto:', this.nuevoJuego.gano);
    if (this.nuevoJuego.verificar()) {

      this.MostarMensaje('Numero adivinado!!', true, false);
      this.nuevoJuego.numeroSecreto = 0;

    } else {

      let mensaje: string;
      switch (this.contador) {
        case 1:
          mensaje = 'Intento fallido, ';
          break;
        case 2:
          mensaje = 'Casi, ';
          break;
        case 3:
          mensaje = 'La tercera era la vencida? ';
          break;
        case 4:
          mensaje = 'Dale que llegas, ';
          break;
        case 5:
          mensaje = 'Ultima chance! ';
          break;

        default:
          mensaje = '';
          this.MostarMensaje(mensaje, false, true);
          break;
      }
      if (this.contador < 6) {
        this.MostarMensaje(mensaje + this.nuevoJuego.retornarAyuda(), false, false);
      }



    }
    console.info('numero Secreto:', this.nuevoJuego.gano);
  }

  MostarMensaje(mensaje: string, ganador: boolean, finJuego: boolean) {

    if (finJuego) {
      this.toastr.error('Segui intentando para sumar puntos', 'Fin del juego');
      this.puntuacion = 0;
      this.nuevoJuego.numeroSecreto = 0;
      return;
    }

    if (ganador) {
      this.toastr.success('Adivinaste el numero! +50 puntos', 'Excelente');
      this.puntuacion += 50;
      return;
    }
    else {
      this.toastr.warning(mensaje, 'Segui intentando');
      return;
    }




  }

  ngOnInit() {
    this.utilService.getTopPlayer(this.juegoStore);
  }


}
