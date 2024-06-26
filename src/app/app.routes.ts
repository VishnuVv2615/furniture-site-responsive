import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AboutComponent } from './pages/about/about.component';
import { SevicesComponent } from './pages/services/sevices.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SignupPageComponent } from './pages/signup/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login/login-page/login-page.component';
import { CartLayoutComponent } from './pages/cart-layout/cart-layout.component';
import { CartComponent } from './pages/cart/cart.component';

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
        path:"signup",
        component:SignupPageComponent
    },
    {
        path:"login",
        component:LoginPageComponent
    },
    {
        path:'cart',component:CartLayoutComponent,
        children:[
            {path:'',component:CartComponent}
        ]
    }
];
