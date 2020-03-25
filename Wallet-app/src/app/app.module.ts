import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Application components
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './login-page/components/welcome-component/welcome.component';
import { SignInComponent } from './login-page/components/signin-component/signin.component';
import { SignUpComponent } from './login-page/components/signup-component/signup.component';
import { HomePageComponent } from './home-page/home-page.component';


//Shared components

//Materiak components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const sharedComponents = [
];

import {AuthorizationService} from "./login-page/service/getUserData.service";

const appComponents = [
  AppComponent,
  LoginPageComponent,
  HeaderComponent,
  WelcomeComponent,
  SignInComponent,
  SignUpComponent,
];

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatInputModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [
    ...sharedComponents,
    ...appComponents,
    HomePageComponent
  ],
  imports: [
    ...materialModules,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
