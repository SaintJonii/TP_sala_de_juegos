import { Component, OnInit } from '@angular/core';
import { JuegoAgilidad } from "../../../classes/juego-agilidad";
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

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
  juegoStore = 'agilidad';
  public puntuacion;

  public ultimaChance: boolean;
  public pNumero: number;
  public sNumero: number;
  public sOperador: string;
  public operadores: string[] = ['+', '-', '*', '/'];
  public respuesta: number;
  public mensajeResultado = '';
  public contadorJuego = 0;



  ngOnInit() {
    this.utilService.getTopPlayer(this.juegoStore);
  }

  constructor(private router: Router, private toastr: ToastrService, private utilService: UtilService) {
    this.contadorJuego = 0;
    this.puntuacion = 0;
    this.ocultarVerificar = true;
    this.Tiempo = 10;
    this.nuevoJuego = new JuegoAgilidad();
    this.ultimaChance = false;

  }

  LimpiarFormulario() {
    this.nuevoJuego = new JuegoAgilidad();
    this.pNumero = this.nuevoJuego.primerNumero;
    this.sNumero = this.nuevoJuego.segundoNumero;
    this.sOperador = this.operadores[this.nuevoJuego.operador];

  }

  NuevoJuego() {
    this.Tiempo = 10;
    this.ultimaChance = false;
    this.nuevoJuego = new JuegoAgilidad();
    this.pNumero = this.nuevoJuego.primerNumero;
    this.sNumero = this.nuevoJuego.segundoNumero;
    this.sOperador = this.operadores[this.nuevoJuego.operador];

    this.ocultarVerificar = false;
    this.repetidor = setInterval(() => {

      this.Tiempo--;
      if (this.Tiempo === 0) {
        clearInterval(this.repetidor);
        this.ocultarVerificar = true;
        this.Tiempo = 10;
      }
    }, 900);
  }


  verificar() {
    this.contadorJuego = this.contadorJuego + 1;
    console.log('Tu respuesta: ' + this.respuesta);

    if (this.nuevoJuego.realizarCuenta() == this.respuesta) {

      if (this.contadorJuego == 1) {
        this.puntuacion += 50;
        this.mensajeResultado = 'Respuesta correcta! +50 puntos';
      }
      else {
        this.puntuacion += 30;
        this.mensajeResultado = 'Respuesta correcta! +30 puntos';
      }

      this.toastr.success(this.mensajeResultado, 'Excelente');
      this.ocultarVerificar = true;
      this.contadorJuego = 0;

    } else {

      if (this.contadorJuego == 2) {
        this.mensajeResultado = 'Respuesta incorrecta, la proxima será';
        this.toastr.error(this.mensajeResultado, 'Fin del juego');
        this.puntuacion = 0;
        this.contadorJuego = 0;
        this.ocultarVerificar = true;

      } else {
        this.mensajeResultado = '¿Muy dificil esta vez? ' + 'Te quedan ' + (2 - this.contadorJuego) + ' intentos';
        this.toastr.warning(this.mensajeResultado, 'Segui intentando');
        this.ultimaChance = true;
      }

    }


    clearInterval(this.repetidor);
    this.Tiempo = null;
    this.respuesta = null;



  }

}
