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


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'games/tateti', component: TatetiComponent },
  { path: 'games/ppt', component: PptComponent },
  { path: 'games/memotest', component: MemotestComponent },
  { path: 'games/anagrama', component: AnagramaComponent },
  { path: 'games/agilidadNum', component: AgilidadComponent },
  { path: 'games/adivinaNum', component: AdivinarNumComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
