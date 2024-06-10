import { Component } from '@angular/core';
import { SignupService } from '../../../_services/signup.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginServiceService } from '../../../_services/login-service.service';
import { passwordMatchValidator } from './password-match';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {

  constructor(private SignupSer:SignupService,private loginSer:LoginServiceService){}

  signupForm=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(6)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(6)]),
    confirmPassword:new FormControl("",[Validators.required,Validators.minLength(6)]),
    mobile:new FormControl("",Validators.required)
  },{validators:passwordMatchValidator()});

  
  onSubmit(event:Event){
    event.preventDefault();
    if(this.signupForm.valid){
      alert("Signup Successfully");
      console.log(this.signupForm.value);
      this.signupForm.reset();
this.SignupSer.closeSignup();
this.loginSer.openLogin();
}
  }

  closeSignup():void{
    this.SignupSer.closeSignup();
  }

  openLoginPage():void{
    this.SignupSer.closeSignup();
    this.loginSer.openLogin();
  }
}
