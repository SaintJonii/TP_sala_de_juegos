import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  log_email: string;
  log_pass: string;

  reg_email: string;
  reg_pass: string;
  reg_confirm_pass: string;
  userName: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    debugger;
    if (this.log_email == null || this.log_pass == null) {
      return;
    }
    else {
      this.auth.loginUser(this.log_email, this.log_pass);
    }
  }



  register() {
    if (this.reg_email == null || this.reg_pass == null || this.userName == null) {
      return;
    }
    else {
      this.auth.registerUser(this.reg_email, this.reg_pass, this.userName);
    }
  }

}
