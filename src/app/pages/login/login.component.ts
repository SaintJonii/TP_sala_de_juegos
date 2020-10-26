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

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.loginUser(this.log_email, this.log_pass);
  }

  register() { }

}
