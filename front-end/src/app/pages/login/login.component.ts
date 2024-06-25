import { Component } from '@angular/core';
import { DeafultLoginLayoutComponent } from '../../components/deafult-login-layout/deafult-login-layout.component';
import {
  Form,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface loginForm{
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DeafultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  providers:[
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  [x: string]: any;
  loginForm!: FormGroup;

  constructor(private router: Router, private loginService: LoginService, private toastr: ToastrService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastr.success("Login feito com sucesso"),
      error: () => this.toastr.error("Erro inesperado! Tente novamente mais tarde")
    })
  }

  navigate() {
    this.router.navigate(['signup']);
  }
}
