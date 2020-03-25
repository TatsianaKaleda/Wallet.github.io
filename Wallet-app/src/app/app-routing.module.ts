import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginPageGuard} from "./guards/login-page.guard";

RouterModule.forRoot([
  {
    path: 'home',
    component: HomePageComponent
  }
]);
const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [LoginPageGuard]
  },
  {
    path: 'signin',
    component: LoginPageComponent
  },
  // {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // declarations: [HomePageComponent, LoginPageComponent],
  providers: [LoginPageGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
