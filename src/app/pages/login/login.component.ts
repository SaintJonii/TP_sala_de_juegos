import { Component, OnInit } from '@angular/core';


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

  constructor() { }

  ngOnInit(): void {
  }

  login() { }

  register() { }

}
