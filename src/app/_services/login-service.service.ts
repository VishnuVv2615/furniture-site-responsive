import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  private _isLoginOpen=new BehaviorSubject<boolean>(false);
  public isLoginOpen$=this._isLoginOpen.asObservable();

  constructor() { }

  openLogin(){
    this._isLoginOpen.next(true);
  }

  closeLogin(){
    this._isLoginOpen.next(false);
  }
}
