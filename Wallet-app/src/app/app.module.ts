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
import { BudgetComponent } from './home-page/components/main-content-component/budget-component/budget.component';
import { ProfitsComponent } from './home-page/components/main-content-component/profits-component/profits.component';
import { SpendingComponent } from './home-page/components/main-content-component/spending-component/spending.component';
import { ReportComponent } from './home-page/components/main-content-component/report-component/report.component';
import {MainContentComponent} from "./home-page/components/main-content-component/main-content.component";
import {BigMenuComponent} from "./home-page/components/bigMenu-component/bigMenu.component";
import {SmallMenuComponent} from "./home-page/components/main-content-component/small-menu-component/small-menu.component";
//Shared components

//Material components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const sharedComponents = [
];

import {AuthorizationService} from "./login-page/service/getUserData.service";
import {MatSelectModule} from "@angular/material/select";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatGridListModule} from "@angular/material/grid-list";

const appComponents = [
  AppComponent,
  LoginPageComponent,
  HeaderComponent,
  WelcomeComponent,
  SignInComponent,
  SignUpComponent,
  BudgetComponent,
  ProfitsComponent,
  SpendingComponent,
  ReportComponent,
  MainContentComponent,
  BigMenuComponent,
  SmallMenuComponent
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
        HttpClientModule,
        MatSelectModule,
        NgxChartsModule,
        MatGridListModule
    ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
