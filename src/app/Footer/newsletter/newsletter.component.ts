import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {

  name:string='';
  email:string='';
  subscribe(event:Event){
event.preventDefault();
if(this.name && this.email)
  {
    console.log(`Name:${this.name},Email:${this.email}`);
    alert(`Thank you ${this.name} for Subscribing.`);
    this.clearFields();
  }
  else{
    alert("please enter both name and email")
  }
  }

  clearFields(){
    this.name='';
    this.email='';
  }

}
