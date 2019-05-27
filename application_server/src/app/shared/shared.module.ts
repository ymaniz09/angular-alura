import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VMessageComponent } from './components/v-message/v-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VMessageComponent],
  exports: [VMessageComponent]
})
export class SharedModule { }
