import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCompComponent } from './my-comp/my-comp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ MyCompComponent],
  declarations: [MyCompComponent]
})
export class MyModModule { }
