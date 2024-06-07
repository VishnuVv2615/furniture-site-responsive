import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {

  scrollToTop(event:Event){
    event.preventDefault();
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }
}
