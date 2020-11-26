import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.scss']
})
export class PuntuacionComponent implements AfterViewInit, OnInit {

  @Input() puntuacion;
  @Input() juegoStore;
  public userName;
  private user;


  puntuacionMax;
  jugador1;

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem("user"));
    this.user = user.user;
    this.userName = user.name;

  }

  ngAfterViewInit() {
    let maxPoints = JSON.parse(localStorage.getItem(this.juegoStore));
    this.puntuacionMax = maxPoints.topPuntos;
    this.jugador1 = maxPoints.nombre;
  }


  ngOnChanges() {
    let maxPoints = JSON.parse(localStorage.getItem(this.juegoStore));
    this.puntuacionMax = maxPoints.topPuntos;
    this.jugador1 = maxPoints.nombre;

    debugger;

    if (this.puntuacion > this.puntuacionMax) {
      this.utilService.setTopPlayer(this.user, this.userName, this.puntuacion, this.juegoStore);
    }
  }



}
