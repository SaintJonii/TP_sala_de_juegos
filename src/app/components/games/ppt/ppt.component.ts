import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.scss']
})
export class PptComponent implements OnInit {

  jugadas: number = 0;
  ganadas: number = 0;
  usuario: string = "assets/user.png";
  IA: string = "assets/computer.png";
  opUser: number;
  opIA: number;
  resultado: string = "Esperando...";

  constructor() {
  }

  ngOnInit(): void {
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
    console.log(`Usuario: ${this, this.opUser} | IA: ${this.opIA}`);
    if ((this.opUser == this.opIA)) {
      this.resultado = "Empate";
    }
    if (this.opUser == 0 && this.opIA == 1) {
      this.resultado = "Derrota :(";
    }
    if (this.opUser == 0 && this.opIA == 2) {
      this.resultado = "¡Victoria!";
      this.ganadas++;
    }
    if (this.opUser == 1 && this.opIA == 2) {
      this.resultado = "Derrota :(";
    }
    if (this.opUser == 1 && this.opIA == 0) {
      this.resultado = "¡Victoria!";
      this.ganadas++;
    }
    if (this.opUser == 2 && this.opIA == 0) {
      this.resultado = "Derrota :(";
    }
    if (this.opUser == 2 && this.opIA == 1) {
      this.resultado = "¡Victoria!";
      this.ganadas++;
    }
    this.jugadas++;
  }

}
