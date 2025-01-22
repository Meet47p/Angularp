import { Routes } from '@angular/router';
import { UserComponent } from '../Component/user/user.component';
import { AdminComponent } from '../Component/admin/admin.component';
import { HomeComponent } from '../Component/home/home.component';
import { LoginComponent } from '../Component/login/login.component';
import { SignupComponent } from '../Component/signup/signup.component';

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: 'signup',
        component:SignupComponent
    }
];
