import { Component } from '@angular/core';
import { OurTeamComponent } from '../our-team/our-team.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [OurTeamComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
