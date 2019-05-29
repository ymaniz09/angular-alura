import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginGuard } from '../core/auth/login.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: '',
                component: SignInComponent,
            },
            {
                path: 'signup',
                component: SignUpComponent,
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
