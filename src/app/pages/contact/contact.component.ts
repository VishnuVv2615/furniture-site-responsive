import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

contactForm=new FormGroup(
  {
    firstName:new FormControl("",[Validators.required,Validators.minLength(6)]),
    lastName:new FormControl("",[Validators.required,Validators.minLength(6)]),
    email:new FormControl("",[Validators.required,Validators.email]),
    message:new FormControl("",[Validators.required,Validators.minLength(100)])
  }
)

onSubmit(){
  if(this.contactForm.valid){
    console.log(this.contactForm.value)
    alert("your message has been sent");
    this.contactForm.reset();
  }
}

}
