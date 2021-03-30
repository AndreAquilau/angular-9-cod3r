import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedDirective } from './red.directive';



@NgModule({
  declarations: [
    RedDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RedDirective
  ]
})
export class RedModule { }
