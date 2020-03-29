// import {Component, Input, OnInit, Output} from "@angular/core";
//
// @Component({
//   selector: 'app-report',
//   templateUrl: './report.component.html',
//   styleUrls: ['./report.component.scss']
// })
// export class ReportComponent implements OnInit {
//
//   single: any[];
//   view: any[] = [700, 400];
//
//   // options
//   gradient: boolean = true;
//   showLegend: boolean = true;
//   showLabels: boolean = true;
//   isDoughnut: boolean = false;
//   legendPosition: string = 'below';
//
//   colorScheme = {
//     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
//   };
//
//   constructor() {
//     Object.assign(this, { single });
//   }
//
//   ngOnInit() {}
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




// import { Component, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
// import { single } from './data';
//
// @Component({
//   selector: 'app-report',
//   templateUrl: './report.component.html',
//   styleUrls: ['./report.component.scss']
// })
// export class ReportComponent {
//   single: any[];
//   view: any[] = [700, 400];
//
//   // options
//   gradient: boolean = true;
//   showLegend: boolean = true;
//   showLabels: boolean = true;
//   isDoughnut: boolean = false;
//   legendPosition: string = 'below';
//
//   colorScheme = {
//     domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
//   };
//
//   constructor() {
//     Object.assign(this, { single });
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


import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  single: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
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
