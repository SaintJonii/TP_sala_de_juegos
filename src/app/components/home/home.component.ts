import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listJuegos = [
    { id: 0, src: "assets/ana.jpg", nombre: "Anagrama", desc: "Adivina la palabra ordenando las letras" },
    { id: 1, src: "assets/ppt.jpg", nombre: "Piedra Papel y Tijera", desc: "El clásico que no puede faltar" },
    { id: 2, src: "assets/agi.jpg", nombre: "Agilidad Aritmetica", desc: "Realizá operaciones matematicas para mejorar tus skills" },
    { id: 3, src: "assets/adiv.jpg", nombre: "Adivinar Número", desc: "Adiviná el número para sumar puntos" },
    { id: 4, src: "assets/tat.jpg", nombre: "Tateti", desc: "Otro clásico que no puede faltar" },
    { id: 5, src: "assets/logo.JPG", nombre: "Memotest", desc: "Encontrá todas las coincidencias de Westeros" },
    { id: 6, src: "assets/trivia.jpg", nombre: "Trivia", desc: "Probá cuanto sabes de cultura general" }


  ];

  constructor() { }

  ngOnInit(): void {
  }

}
