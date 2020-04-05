// import {Component, Input, NgModule} from '@angular/core';
// import { single } from './data';
// import {UserModel} from "../../../../login-page/models/user.model";
// import { SpendingModel } from 'src/app/login-page/models/spendingModel';
//
//
// @Component({
//   selector: 'app-report',
//   templateUrl: './report.component.html',
//   styleUrls: ['./report.component.scss']
// })
// export class ReportComponent {
//
//   @Input()
//   public user: UserModel;
//
//   spending: any[];
//
//   single: any[];
//   view: any[] = [700, 400];
//
//   // options
//   gradient: boolean = true;
//   showLegend: boolean = true;
//   showLabels: boolean = true;
//   isDoughnut: boolean = false;
//
//   colorScheme = {
//     domain: ['#00CD93', '#cd0f02', '#c7b900', '#aa9ea4']
//   };
//
//   constructor() {
//     Object.assign({single});
//   }
//
//   onSelect(data): void {
//     console.log('Item clicked', JSON.parse(JSON.stringify(data)));
//   }
//
//   onActivate(data): void {
//     console.log('Activate', JSON.parse(JSON.stringify(data)));
//   }
//
//   onDeactivate(data): void {
//     console.log('Deactivate', JSON.parse(JSON.stringify(data)));
//   }
// }


import { Component, NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import {UserModel} from "../../../../login-page/models/user.model";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {

  @Input()
  public user: UserModel;

  single: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#00a16f', '#001C13', '#a5fca6', '#DEB887', '#EAE784']
  };

  constructor() {
    Object.assign(this, { single });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
