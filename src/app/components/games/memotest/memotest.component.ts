import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.scss']
})
export class MemotestComponent implements OnInit {

  listImg = [
    { id: 0, src: "assets/bar.png", flipped: true, canBeFlipped: false },
    { id: 1, src: "assets/bol.png", flipped: true, canBeFlipped: false },
    { id: 2, src: "assets/grey.png", flipped: true, canBeFlipped: false },
    { id: 3, src: "assets/lann.png", flipped: true, canBeFlipped: false },
    { id: 4, src: "assets/stark.png", flipped: true, canBeFlipped: false },
    { id: 5, src: "assets/mar.png", flipped: true, canBeFlipped: false },
    { id: 6, src: "assets/tar.png", flipped: true, canBeFlipped: false },
    { id: 7, src: "assets/tyrell.png", flipped: true, canBeFlipped: false },
    { id: 8, src: "assets/bar.png", flipped: true, canBeFlipped: false },
    { id: 9, src: "assets/bol.png", flipped: true, canBeFlipped: false },
    { id: 10, src: "assets/grey.png", flipped: true, canBeFlipped: false },
    { id: 11, src: "assets/lann.png", flipped: true, canBeFlipped: false },
    { id: 12, src: "assets/stark.png", flipped: true, canBeFlipped: false },
    { id: 13, src: "assets/mar.png", flipped: true, canBeFlipped: false },
    { id: 14, src: "assets/tar.png", flipped: true, canBeFlipped: false },
    { id: 15, src: "assets/tyrell.png", flipped: true, canBeFlipped: false },

  ];

  activado: boolean = true;
  time: number = 0;
  contador: boolean = false;
  display;
  interval;

  mensaje: string = "Recordá la posición de las tarjetas!!";

  carta1: any = {}
  carta2: any = {}
  cartasSeleccionadas: number = 0;

  constructor() {
    this.listImg = this.cargarAleatoriamente();
  }

  ngOnInit(): void {
  }

  cargarAleatoriamente() {
    let currentIndex = this.listImg.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.listImg[currentIndex];
      this.listImg[currentIndex] = this.listImg[randomIndex];
      this.listImg[randomIndex] = temporaryValue;
    }
    return this.listImg;
  }

  darVuelta(id: number) {
    debugger;
    for (let i = 0; i < this.listImg.length; i++) {
      if (this.listImg[i].canBeFlipped) {
        if (this.listImg[i].id == id) {

          this.listImg[i].canBeFlipped = false;
          this.listImg[i].flipped = false;
          this.cartasSeleccionadas++;

          if (this.cartasSeleccionadas == 1) {
            this.carta1 = { id: this.listImg[i].id, src: this.listImg[i].src };
          }
          else if (this.cartasSeleccionadas == 2) {
            this.carta2 = { id: this.listImg[i].id, src: this.listImg[i].src };
          }
          break;
        }
      }
    }
    if (this.cartasSeleccionadas == 2) {
      this.compararCartas();
    }
  }

  compararCartas() {
    console.log(this.listImg);
    if (this.carta1.src == this.carta2.src) {
      this.mensaje = "¡Bien, completaste una pareja!";
      this.cartasSeleccionadas = 0;
    }
    else {
      this.mensaje = "Casi...segui buscando coincidencias!";
      debugger;

      setTimeout(() => {
        this.listImg.forEach(carta => {
          if (carta.id == this.carta1.id) {
            carta.canBeFlipped = !carta.canBeFlipped;
            carta.flipped = !carta.flipped;
          }
          if (carta.id == this.carta2.id) {
            carta.canBeFlipped = !carta.canBeFlipped;
            carta.flipped = !carta.flipped;
          }
        });
      }, 2000);

      this.cartasSeleccionadas = 0;
    }
    console.log(this.listImg);
  }


  mostrarCartas() {
    this.activado = false;
    this.listImg.forEach(carta => {
      carta.flipped = false;
    });
    setTimeout(() => {
      this.contador = true;
      this.mensaje = "Esperando a que selecciones una pareja!";
      this.listImg.forEach(carta => {
        carta.canBeFlipped = true;
        carta.flipped = true;
      });
      this.startTimer();
    }, 5000);
  }

  /*Contador */
  startTimer() {
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display = this.transform(this.time)
    }, 1000);
  }

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
  }


}
