import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanActivateChild {

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

  canActivateChild() {
    if (this.auth.isAuthenticated()) {
      return true;

    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
