import {Component, Inject, NgZone} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import { ProfitsModel } from 'src/app/login-page/models/profits.model';

export interface DialogData {
  type?: string;
  spendingValue?: number;
  spendingDescription?: string;
  isSpending?: boolean;
  profits?: ProfitsModel
}

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.scss']
})

export class DialogPopupComponent {

  public spendingValue: number;
  public spendingDescription: string;

  constructor(private _ngZone: NgZone,
              public dialogRef: MatDialogRef<DialogPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  public addSpending(type: string, spendingValue: string, spendingDescription: string): void {
    console.log(+spendingValue);
    console.log(spendingDescription);
  }
  // public addProfit(type: string, profitValue: string, profitDescription: string): void {
  //   console.log(+profitValue);
  //   console.log(profitDescription);
  // }

  public closePopup(): void {
    this.dialogRef.close();
  }

}
