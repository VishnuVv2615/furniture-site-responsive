import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../../_services/login-service.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SignupService } from '../../../_services/signup.service';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{

  constructor(private loginSer:LoginServiceService,private signupSer:SignupService,private authSer:AuthService){
  }


  loginForm=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(6)]),
    password:new FormControl("",[Validators.required,Validators.minLength(6)])
  })

 onSubmit(){
  if(this.loginForm.valid)
    {
      const loginData=this.loginForm.value as {
        username:string,
        password:string
      }

      this.authSer.login(loginData).subscribe(
        (res)=>{
          console.log(res);
          alert("Login Successfully");
          this.loginForm.reset();
          this.loginSer.closeLogin();
        },
        (err)=>{
          console.log(err);
          alert("Invalid username or password");
          this.loginForm.reset();
        }
      )
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
