import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = null;
  userToken: string;
  docResponse: any = [];

  constructor(private auth: AngularFireAuth, private router: Router, private afs: AngularFirestore) {

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
            this.getUserType(email);
            this.userToken = idToken;
            this.router.navigate(['/home']);

          });

        });

      });

  }

  registerUser(email: string, password: string, userName: string) {
    debugger;
    this.auth.createUserWithEmailAndPassword(email, password)
      .then(resp => {

        this.auth.currentUser.then(token => {

          token.getIdToken(true).then(idToken => {

            localStorage.setItem('tokenId', idToken)
            this.userToken = idToken;

            this.setUserType(email, userName);
            this.router.navigate(['/home']);

          });

        });

      });
  }

  setUserType(email: string, userName: string) {
    this.afs.collection('users').add(
      {
        user: email,
        name: userName
      }
    );
    let alias = email.split('@')[0];
    localStorage.setItem('user', JSON.stringify({ user: email, alias: alias, name: userName }));
  }


  getUserType(email: string) {
    const doc1 = this.afs.collection('users',
      ref => ref.where('user', '==', email)
    );

    let alias = email.split('@')[0];

    doc1.valueChanges()
      .subscribe(data => {
        this.docResponse = data[0];
        debugger;
        localStorage.setItem('user', JSON.stringify({ user: email, alias: alias, name: this.docResponse.name }));
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
