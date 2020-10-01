import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';


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
    AboutComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
