import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { MyCompComponent } from './my-mod/my-comp/my-comp.component';

const appRoutes = [
  { path: 'my-area', component: MyCompComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
