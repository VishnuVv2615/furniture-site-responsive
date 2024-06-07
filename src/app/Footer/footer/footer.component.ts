import { Component } from '@angular/core';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { FooterDetailsComponent } from '../footer-details/footer-details.component';
import { CopyRightComponent } from '../copy-right/copy-right.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NewsletterComponent
    ,FooterDetailsComponent,
    CopyRightComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
