import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Header/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AboutComponent } from './pages/about/about.component';
import { SevicesComponent } from './pages/services/sevices.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { Observable } from 'rxjs';
import { LoginServiceService } from './_services/login-service.service';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './pages/signup/signup-page/signup-page.component';
import { SignupService } from './_services/signup.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,HomeComponent,
    ShopComponent,
    AboutComponent,
    SevicesComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    LoginPageComponent,
    CommonModule,
    SignupPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'furniture-site';

  isLoginOpen:Observable<boolean>;
  isSignupOpen:Observable<boolean>;

  constructor(private loginServ:LoginServiceService,private SignSer:SignupService){
    this.isLoginOpen=this.loginServ.isLoginOpen$;
    this.isSignupOpen=this.SignSer.isSignupOpen$;
  }
}
