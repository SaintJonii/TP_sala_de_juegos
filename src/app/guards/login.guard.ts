import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {

  }

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;

    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
