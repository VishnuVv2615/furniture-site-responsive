import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  products=[
    { image: 'assets/images/chair2.png', name: 'Magna Single Seater Recliner Sofa', price: 19999 },
    { image: 'assets/images/sofa3.png', name: 'Luxe Motorised RRR Recliner Sofa', price: 16999 },
    { image: 'assets/images/chair3.png', name: 'Light Blue Velvet Cushion Seat', price: 5999 },
    { image: 'assets/images/chair1.png', name: 'White Single Sofa', price: 10999 },
  ]
}
