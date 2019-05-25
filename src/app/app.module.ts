import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MyModModule } from './my-mod/my-mod.module';
import { NavbarComponent } from './core/navbar/navbar.component';
import {RouterModule,Routes} from '@angular/router';
import { MyCompComponent } from './my-mod/my-comp/my-comp.component';

const appRoutes = [
  {
    path: 'my-area',
    component: MyCompComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    MyModModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
