import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listJuegos = [
    { id: 0, src: "assets/ana.jpg", nombre: "Anagrama", path: "/games/anagrama" },
    { id: 1, src: "assets/ppt.jpg", nombre: "Piedra Papel y Tijera", path: "/games/ppt" },
    { id: 2, src: "assets/agi.jpg", nombre: "Agilidad Aritmetica", path: "/games/agilidadNum" },
    { id: 3, src: "assets/adiv.jpg", nombre: "Adivinar Número", path: "/games/adivinaNum" },
    { id: 4, src: "assets/tat.jpg", nombre: "Tateti", path: "/games/tateti" },
    { id: 5, src: "assets/logo.JPG", nombre: "Memotest", path: "/games/memotest" },
    { id: 6, src: "assets/trivia.jpg", nombre: "Trivia", path: "/games/trivia" },
    { id: 7, src: "assets/lista.JPG", nombre: "Ranking Jugadores", path: "/listado" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
