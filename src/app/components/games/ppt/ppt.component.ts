import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.scss']
})
export class PptComponent implements OnInit {

  ronda: number = 3;
  jugadas: number = 0;
  ganadas: number = 0;
  perdidas: number = 0;
  usuario: string = "assets/user.png";
  IA: string = "assets/computer.png";
  opUser: number;
  opIA: number;
  resultado: string = "Esperando...";

  juegoStore = 'ppt';
  nombreJuego = 'Piedra, papel o tijera'
  puntuacion = 0;

  constructor(private utilService: UtilService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.utilService.getTopPlayer(this.juegoStore);
  }

  jugar(opcion: number) {
    this.resultado = "Esperando...";
    if (opcion == 0) {
      this.opUser = 0;
      this.usuario = "assets/piedra.PNG";
    }
    else if (opcion == 1) {
      this.opUser = 1;
      this.usuario = "assets/papel.PNG";
    }
    else if (opcion == 2) {
      this.opUser = 2
      this.usuario = "assets/tijera.PNG";
    }
    this.juegaIA();
  }

  juegaIA() {
    this.opIA = Math.floor(Math.random() * 3);
    if (this.opIA == 0) {
      this.IA = "assets/piedra.PNG";
    }
    else if (this.opIA == 1) {
      this.opIA = 1;
      this.IA = "assets/papel.PNG";
    }
    else if (this.opIA == 2) {
      this.opIA = 2
      this.IA = "assets/tijera.PNG";
    }
    this.calcularResultado();
  }

  calcularResultado() {
    //console.log(`Usuario: ${this, this.opUser} | IA: ${this.opIA}`);
    this.jugadas++;

    if ((this.opUser == this.opIA)) {
      this.resultado = "Empate";
      this.jugadas--;
      this.toastr.warning('La ronda no cuenta', 'Empate');
    }
    if (this.opUser == 0 && this.opIA == 1) {
      this.resultado = "Derrota";
      this.perdidas++;
    }
    if (this.opUser == 0 && this.opIA == 2) {
      this.resultado = "¡Victoria!";
      this.ganadas++;
    }
    if (this.opUser == 1 && this.opIA == 2) {
      this.resultado = "Derrota";
      this.perdidas++;
    }
    if (this.opUser == 1 && this.opIA == 0) {
      this.resultado = "¡Victoria!";
      this.ganadas++;
    }
    if (this.opUser == 2 && this.opIA == 0) {
      this.resultado = "Derrota";
      this.perdidas++;
    }
    if (this.opUser == 2 && this.opIA == 1) {
      this.resultado = "¡Victoria!";
      this.ganadas++;
    }

    if (this.ganadas == 2) {
      this.toastr.success('Ganaste la ronda. +50 puntos', 'Excelente');
      this.puntuacion += 50;
      this.resetValores();
    }

    if (this.perdidas == 2) {
      this.toastr.error('Será la próxima', 'Fin de la ronda');
      this.puntuacion = 0;
      this.resetValores();
    }

  }

  resetValores() {
    this.jugadas = 0;
    this.perdidas = 0;
    this.ganadas = 0;
  }

}
