import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in/sign-in.component';
import { VMessageModule } from '../shared/components/v-message/v-message.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule
  ],
  declarations: [SignInComponent, SignUpComponent, HomeComponent]
})
export class HomeModule { }
