import { Component, OnInit } from '@angular/core';
import { JuegoAgilidad } from "../../../classes/juego-agilidad";

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agilidad',
  templateUrl: './agilidad.component.html',
  styleUrls: ['./agilidad.component.scss']
})
export class AgilidadComponent implements OnInit {

  nuevoJuego: JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;
  public nombreJuego = 'Agilidad Aritmética';
  private subscription: Subscription;

  public pNumero: number;
  public sNumero: number;
  public sOperador: string;
  public operadores: string[] = ['+', '-', '*', '/'];
  public respuesta: number;
  public mensajeResultado = '';
  public contadorJuego = 0;


  ngOnInit() {
  }
  constructor(private router: Router) {
    this.contadorJuego = 0;
    this.ocultarVerificar = true;
    this.Tiempo = 10;
    this.nuevoJuego = new JuegoAgilidad();

  }

  LimpiarFormulario() {
    this.nuevoJuego = new JuegoAgilidad();
    this.pNumero = this.nuevoJuego.primerNumero;
    this.sNumero = this.nuevoJuego.segundoNumero;
    this.sOperador = this.operadores[this.nuevoJuego.operador];

  }

  NuevoJuego() {

    this.nuevoJuego = new JuegoAgilidad();
    this.pNumero = this.nuevoJuego.primerNumero;
    this.sNumero = this.nuevoJuego.segundoNumero;
    this.sOperador = this.operadores[this.nuevoJuego.operador];

    this.ocultarVerificar = false;
    this.repetidor = setInterval(() => {

      this.Tiempo--;
      if (this.Tiempo === 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
        this.Tiempo = 10;
      }
    }, 900);
  }


  verificar() {
    this.contadorJuego = this.contadorJuego + 1;
    console.log('Tu respuesta: ' + this.respuesta);

    if (this.nuevoJuego.realizarCuenta() == this.respuesta) {
      this.mensajeResultado = 'GANASTE';

    } else {

      if (this.contadorJuego == 2) {
        this.mensajeResultado = 'PERDISTE';
        this.contadorJuego = 0;

      } else {
        this.mensajeResultado = '¿Malo para las cuentas? ' + 'Te quedan ' + (2 - this.contadorJuego) + ' intentos';
      }

    }

    this.ocultarVerificar = true;
    clearInterval(this.repetidor);
    this.Tiempo = 10;
    this.respuesta = null;
  }

}
