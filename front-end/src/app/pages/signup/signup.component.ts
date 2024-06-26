import { Component } from '@angular/core';
import { DeafultLoginLayoutComponent } from '../../components/deafult-login-layout/deafult-login-layout.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface signUpForm{
  name: FormControl,
  email: FormControl,
  password: FormControl,
  confirmPassword: FormControl,
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DeafultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  providers:[
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})

export class SignUpComponent {
  [x: string]: any;
  signUpForm!: FormGroup;

  constructor(private router: Router, private loginService: LoginService, private toastr: ToastrService) {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    this.loginService.signup(this.signUpForm.value.name ,this.signUpForm.value.email, this.signUpForm.value.password).subscribe({
      next: () => this.toastr.success("Login feito com sucesso"),
      error: () => this.toastr.error("Erro inesperado! Tente novamente mais tarde")
    })  }

  navigate() {
    this.router.navigate(['login']);
  }
}
