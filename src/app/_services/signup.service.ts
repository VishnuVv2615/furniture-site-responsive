import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {


  private _isSignupOpen=new BehaviorSubject<boolean>(false);
  public isSignupOpen$=this._isSignupOpen.asObservable();

  constructor() { }

  openSignup(){
    this._isSignupOpen.next(true);
  }

  closeSignup(){
    this._isSignupOpen.next(false);
  }
}
