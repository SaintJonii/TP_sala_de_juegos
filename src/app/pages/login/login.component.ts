import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  regMailControl = new FormControl('', [Validators.required, Validators.email]);
  regPassControl = new FormControl('', [Validators.required]);
  regConfControl = new FormControl('', [Validators.required]);
  nameControl = new FormControl('', [Validators.required]);


  log_email: string;
  log_pass: string;

  reg_email: string;
  reg_pass: string;
  reg_confirm_pass: string;
  userName: string;

  constructor(private auth: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    debugger;
    if (this.log_email == null || this.log_pass == null) {
      this.toastr.warning("Debe Ingresar Email y Contraseña", "Campos Necesarios!");
      return;
    }
    else {
      this.auth.loginUser(this.log_email, this.log_pass);
    }
  }



  register() {
    if (this.reg_email == null || this.reg_pass == null || this.reg_confirm_pass == null || this.userName == null) {
      this.toastr.warning("Debe Ingresar los campos requeridos", "Campos Necesarios");
      return;
    }
    if (this.reg_pass != this.reg_confirm_pass) {
      this.toastr.error("Debe repetir la misma contraseña", "Contraseñas distintas");
      return;
    }
    else {
      this.auth.registerUser(this.reg_email, this.reg_pass, this.userName);
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Ingresa el mail';
    }

    if (this.password.hasError('required')) {
      return 'Ingresa la contraseña';
    }

    if (this.regPassControl.hasError('required')) {
      return 'Ingresa la contraseña';
    }

    if (this.regMailControl.hasError('email')) {
      return 'No es un mail válido';
    }

    return this.email.hasError('email') ? 'No es un mail válido' : '';
  }

  getErrorMessage2() {
    if (this.password.hasError('required')) {
      return 'Ingresa la contraseña';
    }

    if (this.regPassControl.hasError('required')) {
      return 'Ingresa la contraseña';
    }

    if (this.regConfControl.hasError('required')) {
      return 'Ingresa la contraseña';
    }
  }

}
