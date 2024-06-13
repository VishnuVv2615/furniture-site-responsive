import { Component } from '@angular/core';
import { NavbarComponent } from '../../Header/navbar/navbar.component';
import { FooterComponent } from '../../Footer/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cart-layout',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterOutlet],
  templateUrl: './cart-layout.component.html',
  styleUrl: './cart-layout.component.css'
})
export class CartLayoutComponent {

}
