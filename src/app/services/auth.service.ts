import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = null;

  constructor(private auth: AngularFireAuth) {

    this.auth.authState.subscribe(state => {
      console.log(state);
      this.authState = state;

    });
  }


  getToken() {
    return this.auth.idToken;
  }

  getUser() {
    return this.authState ? this.authState.email : null;
  }

}
