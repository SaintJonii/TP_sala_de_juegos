import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AnagramaComponent } from './components/games/anagrama/anagrama.component';
import { PptComponent } from './components/games/ppt/ppt.component';
import { AgilidadComponent } from './components/games/agilidad/agilidad.component';
import { AdivinarNumComponent } from './components/games/adivinar-num/adivinar-num.component';
import { TatetiComponent } from './components/games/tateti/tateti.component';
import { MemotestComponent } from './components/games/memotest/memotest.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { CartaComponent } from './components/carta/carta.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CeldaComponent } from './components/celda/celda.component';
import { TriviaComponent } from './components/games/trivia/trivia.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PuntuacionComponent } from './components/puntuacion/puntuacion.component';
import { ToastrModule } from 'ngx-toastr';
import { ListadoComponent } from './components/listado/listado.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AnagramaComponent,
    PptComponent,
    AgilidadComponent,
    AdivinarNumComponent,
    TatetiComponent,
    MemotestComponent,
    AboutComponent,
    LoginComponent,
    CartaComponent,
    CeldaComponent,
    TriviaComponent,
    PuntuacionComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    MatTableModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
