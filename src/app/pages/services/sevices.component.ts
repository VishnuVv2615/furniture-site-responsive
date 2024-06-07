  import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

  @Component({
    selector: 'app-sevices',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './sevices.component.html',
    styleUrl: './sevices.component.css'
  })
  export class SevicesComponent {


    services = [
      { id: 1, title: 'Fast & Free Shipping', description: 'Free shipping is an increasingly-popular option for online shopping, where customers do not have to pay an additional shipping charge',icon: 'fas fa-truck-fast' },
      { id: 2, title: 'Easy to Shop', description: 'Free shipping is an increasingly-popular option for online shopping, where customers do not have to pay an additional shipping charge',icon: 'fas fa-shopping-bag' },
      { id: 3, title: '24/7 Support', description: 'Free shipping is an increasingly-popular option for online shopping, where customers do not have to pay an additional shipping charge',icon: 'fas fa-headset' },
      { id: 4, title: 'Free Returns', description: 'Free shipping is an increasingly-popular option for online shopping, where customers do not have to pay an additional shipping charge',icon: 'fas fa-undo-alt' }
    ];

    material = {
      heading: 'Crafted with Excellent Material',
      description: 'Furniture, household equipment, usually made of wood, metal, plastics, marble, glass, fabrics, or related materials and having a variety of different purposes',
      items: [
        { id: 1, name: 'Magna Single Seater Recliner Sofa', price: '$19,999', image: 'assets/images/chair2.png', alt: 'chair image' },
        { id: 2, name: 'Luxe Motorised RRR Recliner Sofa', price: '$16,999', image: 'assets/images/sofa3.png', alt: 'chair image' },
        { id: 3, name: 'White Single Sofa', price: '$10,999', image: 'assets/images/chair1.png', alt: 'chair image' }
      ]
    };

    scrollToTop(event:Event){
      event.preventDefault();
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    }

  }
