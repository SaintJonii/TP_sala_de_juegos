import { AfterViewInit, Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from "@angular/fire/firestore";
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['nombre', 'jugador', 'puntos', 'fecha', 'juego'];
  dataSource = new MatTableDataSource<any>();
  listJuegos = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor(private afs: AngularFirestore) {
  }

  ngOnInit(): void {
    const doc1 = this.afs.collection('juegos');

    doc1.valueChanges()
      .subscribe(data => {
        this.listJuegos = data;
        this.dataSource = new MatTableDataSource<any>(this.listJuegos);
      });

  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<any>(this.listJuegos);
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<any>(this.listJuegos);
  }




}
