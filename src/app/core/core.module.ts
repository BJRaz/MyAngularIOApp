import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'brian',
  template: '<h3>{{getName()}}</h3>'
})
export class Brian {
   getName(): string {
    return 'Brian';
  }
}


@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    Brian
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    Brian
  ]
})
export class CoreModule { }

