import { Routes } from '@angular/router';


import { LoginComponent } from '../Component/login/login.component';
import { SignupComponent } from '../Component/signup/signup.component';
import { HomeComponent } from '../Component/home/home.component';
import { authGuard } from './auth.guard';
import { NavigateComponent } from './navigate/navigate.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component:LoginComponent
        
    },

    {
        path: 'home',
        component:HomeComponent,
        canActivate:[authGuard],
        
        children:[
            {
                path:'navigation',
                component:NavigateComponent,
                
            }
        ]
    },
    {
        path: 'signup',
        component:SignupComponent
    }
        
   

];
