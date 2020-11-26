import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { ToastrService } from 'ngx-toastr';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.scss']
})
export class AnagramaComponent implements OnInit {

  palabras = ["Etiqueta", "Lagartija", "Planchar", "Regar", "Tarjeta", "Gastar", "Grueso", "Erupción", "Jurado", "Mina",
    "Prueba", "Juego", "Fila", "Llanta", "Recubrimiento", "Cuerdas", "Tortuga", "Grabador", "Triciclo", "Pestañas",
    "Cubierta", "Arrastrar", "Negocios", "Hombreras", "Carpintero", "Locomotora", "Arrugarse", "Autopsia", "Planear",
    "Asesinato", "Asesinato", "Cuadra", "Segundo", "Deseo", "Bicicleta", "Libro", "Imperdible", "Endulzar", "Romper",
    "Internacional", "Escape", "Sintonizar", "Pincel", "Hospedaje", "Lobo", "Doctora", "Espalda", "Muelle", "Cuerda",
    "Pescar", "Ampolla", "Duelo", "Timbre", "Matutino", "Picante", "Oreja", "Olvidarse", "Infantil", "Estudios", "Combate",
    "Asistencia", "Celos", "Dientes", "Programa", "Dulce", "Sastre", "Gaseosa", "Calculadora",
    "Cobarde", "Adivinanza", "Manzana", "Presión", "Capital", "Disparo", "Poeta", "Formal", "Conocido", "Ayuda", "Consistencia",
    "Espada", "Princesa", "Sacerdote", "Indicaciones", "Interruptor", "Sociedad", "Astronauta", "Mascara", "Multiplicar", "Silla",
    "Ejercicio", "Conservar", "Aumentar", "Paloma", "Maestra", "Salud", "Insomnio", "Manicura", "Libre", "Quieto",
    "Molde", "Sentido", "Aire", "Fallar", "Semana", "Peine", "Vender", "Mirada", "Mitad", "Evadir", "Soda", "Tibio", "Dinamarca",
    "Nota", "Gobierno", "Oficial", "Galletita", "Nafta", "Baile", "Alianza", "Hiedra", "Caribe", "Reprobar", "Modista", "Revolución",
    "Atajo", "Atajo", "Retirar", "Hipnotizar", "Biblioteca", "Liviano", "Asiento", "Cuaderno", "Cortina", "Salchicha",
    "Entrevistar", "Europa", "Firma", "Vela", "Altura",];

  palabraDesordenada;
  palabra: string = "";
  msjAyuda = "Ayuda"
  primerLet;
  ultimaLet;
  palabraIngresada: string;
  count: number = 0;
  showInput: boolean = false;

  juegoStore = 'anagrama';
  puntuacion = 0;

  constructor(private utilService: UtilService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.utilService.getTopPlayer(this.juegoStore);
  }


  cargarPalabra() {
    let random = Math.floor(Math.random() * this.palabras.length);
    this.palabra = this.palabras[random].toUpperCase();
    this.palabraDesordenada = this.desordenar(this.palabra);
    this.showInput = true;

  }

  desordenar(cadena) {
    let currentIndex = cadena.length;
    this.primerLet = cadena[0];
    this.ultimaLet = cadena[currentIndex - 1];
    let cadenaAux = cadena.split("");
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = cadenaAux[currentIndex];
      cadenaAux[currentIndex] = cadenaAux[randomIndex];
      cadenaAux[randomIndex] = temporaryValue;
    }
    return cadenaAux.toString().replace(/,/g, " ").toUpperCase();

  }

  comparar() {
    if (this.palabraIngresada.toUpperCase() == this.palabra) {
      if (this.count > 0) {
        this.toastr.success('Palabra correcta, pero con ayuda! +30 puntos', 'Muy Bien');
        this.puntuacion += 30;
      }
      else {
        this.toastr.success('Palabra correcta! +50 puntos', 'Excelente');
        this.puntuacion += 50;
      }

      this.reiniciarValores();
    }
    else {
      this.count++;

      if (this.count == 1) {
        this.toastr.warning('Te doy otra ayuda para que la saques', 'Casi');
        this.primerLet = this.palabra.substring(0, 2);
        return;
      }
      if (this.count == 2 && this.palabra.length > 5) {
        this.toastr.warning('Otra ayuda pero es la ultima chance', 'Casi');
        this.primerLet = this.palabra.substring(0, 3);
        return;
      }
      if (this.count == 3) {
        this.toastr.error('Palabra Incorrecta, será la próxima', 'Fin del juego');
        this.reiniciarValores();
        this.puntuacion = 0;
      }
    }
  }

  reiniciarValores() {
    this.showInput = false;
    this.palabraIngresada = null;
    this.palabra = "";
    this.palabraDesordenada = null;
    this.count = 0;
  }


}
