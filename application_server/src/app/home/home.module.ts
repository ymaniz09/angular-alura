import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/components/v-message/v-message.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule
  ],
  declarations: [SignInComponent]
})
export class HomeModule { }
