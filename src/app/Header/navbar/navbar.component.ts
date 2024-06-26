import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginServiceService } from '../../_services/login-service.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isMenuOpen: boolean = false;

  navLinks = [
    { label: 'Home', active: false, route: '/', id: '/' },
    { label: 'Shop', active: false, route: '/shop', id: 'shop' },
    { label: 'About Us', active: false, route: '/about', id: 'about' },
    { label: 'Services', active: false, route: '/services', id: 'services' },
    { label: 'Contact', active: false, route: '/contact', id: 'contact' },
  ]

  constructor(private router: Router,private loginSer:LoginServiceService) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveLink(event.url);
      }
    })
  }


  setActiveLink(url: string): void {
    this.navLinks.forEach(link => {
      link.active = link.route === url;
    })
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu(): void {
    this.isMenuOpen = false;
  }
  
  scrollToSection(route: string): void {
    const link = this.navLinks.find(item => item.route === route);
    if (link) {
      const element = document.getElementById(link.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  openLogin():void{
    this.loginSer.openLogin();
  }
}
