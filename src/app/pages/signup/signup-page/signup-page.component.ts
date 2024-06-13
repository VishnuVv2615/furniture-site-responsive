import { Component } from '@angular/core';
import { SignupService } from '../../../_services/signup.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginServiceService } from '../../../_services/login-service.service';
import { passwordMatchValidator } from './password-match';
import { AuthService } from '../../../_services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {

  constructor(private SignupSer: SignupService, private loginSer: LoginServiceService, private authSer: AuthService) { }

  signupForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(6)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)]),
    mobile: new FormControl("", Validators.required)
  }, { validators: passwordMatchValidator() });


  onSubmit() {
    if (this.signupForm.valid) {
      const signupData = this.signupForm.value as {
        username: string,
        email: string,
        password: string,
        confirmPassword: string,
        mobile: string
      }
      this.authSer.signup(signupData).subscribe(
        (res) => {
          console.log(res);
          alert("Signup Successfully");
          this.signupForm.reset();
          this.SignupSer.closeSignup();
          this.loginSer.openLogin();
        },
        (err) => {
          console.log(err);
          alert("Signup failed ,Email or username already exists");
          this.signupForm.reset();
        }
      )
    }
  }

  closeSignup(): void {
    this.SignupSer.closeSignup();
  }

  openLoginPage(): void {
    this.SignupSer.closeSignup();
    this.loginSer.openLogin();
  }
}
