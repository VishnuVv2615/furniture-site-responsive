import { Component } from '@angular/core';

@Component({
  selector: 'app-sevices',
  standalone: true,
  imports: [],
  templateUrl: './sevices.component.html',
  styleUrl: './sevices.component.css'
})
export class SevicesComponent {

  scrollToTop(event:Event){
    event.preventDefault();
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

}
