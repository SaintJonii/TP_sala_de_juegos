import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { AboutComponent } from '../app/components/about/about.component';
import { TatetiComponent } from '../app/components/games/tateti/tateti.component';
import { PptComponent } from '../app/components/games/ppt/ppt.component';
import { MemotestComponent } from '../app/components/games/memotest/memotest.component';
import { AnagramaComponent } from '../app/components/games/anagrama/anagrama.component';
import { AgilidadComponent } from '../app/components/games/agilidad/agilidad.component';
import { AdivinarNumComponent } from '../app/components/games/adivinar-num/adivinar-num.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { TriviaComponent } from './components/games/trivia/trivia.component';
import { ListadoComponent } from './components/listado/listado.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'games/tateti', component: TatetiComponent, canActivate: [LoginGuard] },
  { path: 'games/ppt', component: PptComponent, canActivate: [LoginGuard] },
  { path: 'games/memotest', component: MemotestComponent, canActivate: [LoginGuard] },
  { path: 'games/anagrama', component: AnagramaComponent, canActivate: [LoginGuard] },
  { path: 'games/agilidadNum', component: AgilidadComponent, canActivate: [LoginGuard] },
  { path: 'games/adivinaNum', component: AdivinarNumComponent, canActivate: [LoginGuard] },
  { path: 'games/trivia', component: TriviaComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent, canActivate: [LoginGuard] },
  { path: 'listado', component: ListadoComponent, canActivate: [LoginGuard] },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
