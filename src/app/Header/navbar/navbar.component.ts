import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMenuOpen:boolean=false;

  navLinks=[
    {label:'Home',active:false,route:'/'},
    {label:'Shop',active:false,route:'/shop'},
    {label:'About Us',active:false,route:'/about'},
    {label:'Services',active:false,route:'/services'},
    {label:'Blog',active:false,route:'/blog'},
    {label:'Contact',active:false,route:'/contact'},
  ]

  constructor( private router:Router){}

ngOnInit(): void {
  this.router.events.subscribe(event=>{
    if(event instanceof NavigationEnd)
      {
        this.setActiveLink(event.url);
      }
  })
}

  setActiveLink(url:string):void{
    this.navLinks.forEach(link=>{
      link.active=link.route===url;
    })
  }

  toggleMenu():void{
    this.isMenuOpen=!this.isMenuOpen;
  }
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
