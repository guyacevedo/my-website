import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponetsModule } from './componets/componets.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponetsModule
  ],
  exports:[
    ComponetsModule
  ]
})
export class SharedModule { }
