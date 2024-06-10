import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../../_services/login-service.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SignupService } from '../../../_services/signup.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent{

  constructor(private loginSer:LoginServiceService,private signupSer:SignupService){
  }


  loginForm=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(6)]),
    password:new FormControl("",[Validators.required,Validators.minLength(6)])
  })

  onSubmit(){
    if(this.loginForm.valid){
      alert("Login Successfully");
      console.log(this.loginForm.value);
      this.loginForm.reset();
this.loginSer.closeLogin();
    }

  }
  closeLogin(): void {
    this.loginSer.closeLogin();
  }
  openSignup():void{
    this.loginSer.closeLogin();
    this.signupSer.openSignup();

  }
}
