import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = null;
  userToken: string;

  constructor(private auth: AngularFireAuth, private router: Router) {

    this.auth.authState.subscribe(state => {
      console.log(state);
      this.authState = state;

    });
  }


  loginUser(email: string, password: string) {
    debugger;
    this.auth.signInWithEmailAndPassword(email, password)
      .then(resp => {

        this.auth.currentUser.then(token => {

          token.getIdToken(true).then(idToken => {

            localStorage.setItem('tokenId', idToken)
            this.userToken = idToken;
            this.router.navigate(['/home']);

          });

        });

      });

  }

  getToken() {
    return this.auth.idToken;
  }

  getUser() {
    return this.authState ? this.authState.email : null;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('tokenId') != null;
  }

}
