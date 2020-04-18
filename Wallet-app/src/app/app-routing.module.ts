import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginPageGuard} from "./guards/login-page.guard";
import {PageNotFoundComponent} from "./models/page-not-found-component/page-not-found.component";

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
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/page-not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // declarations: [HomePageComponent, LoginPageComponent],
  providers: [LoginPageGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
