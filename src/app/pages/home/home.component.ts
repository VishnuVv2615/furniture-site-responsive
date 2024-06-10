import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../_services/login-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private loginSer:LoginServiceService){}

  ngOnInit(): void {
    this.loginSer.openLogin();
  }
}
