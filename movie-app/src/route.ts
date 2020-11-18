import {Routes} from '@angular/router';
import {AdminMainPageComponent} from './app/admin-main-page/admin-main-page.component';
import {LoginComponent} from './app/login/login.component';
import {RegisterComponent} from './app/register/register.component';
import {UserMainPageComponent} from './app/user-main-page/user-main-page.component';

export const routes: Routes = [
    {path:"login", component: LoginComponent},
    {path:"register", component: RegisterComponent},
    {path:"user_page", component: UserMainPageComponent},
    {path:"admin_page", component: AdminMainPageComponent}
]