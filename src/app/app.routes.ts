import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AboutComponent } from './pages/about/about.component';
import { SevicesComponent } from './pages/services/sevices.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"shop",
        component:ShopComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"services",
        component:SevicesComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"blog",
        component:BlogComponent
    },
];
