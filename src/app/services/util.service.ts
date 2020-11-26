import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private afs: AngularFirestore) { }


  getTopPlayer(juego: string) {
    const doc1 = this.afs.collection('juegos').doc(juego);

    doc1.valueChanges()
      .subscribe(data => {
        debugger;
        let user: any = data;
        if (user.puntos != undefined) {
          localStorage.setItem(juego, JSON.stringify({ topPuntos: user.puntos, nombre: user.nombre }));
        }
        else {
          localStorage.setItem(juego, JSON.stringify({ topPuntos: '0', nombre: 'NA' }));
        }
      });

  }

  setTopPlayer(usuario: string, nombre: string, puntos: number, juego: string, nombreJuego: string) {
    this.afs.collection('juegos').doc(juego).set(
      {
        jugador: usuario,
        nombre: nombre,
        puntos: puntos,
        juego: nombreJuego,
        fecha: new Date()
      }
    );

    this.getTopPlayer(juego);
  }

  getListTopPlayers() {

  }


}
