import { Component, NgZone, ViewChild } from '@angular/core';
// import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.scss']
  // template: `
  //   <h1>Hello world</h1>
  // `
})
export class DialogPopupComponent {
  constructor(private _ngZone: NgZone) {}

  // @ViewChild('autosize') autosize: CdkTextareaAutosize;
}
