import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MyModModule } from './my-mod/my-mod.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyModModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
