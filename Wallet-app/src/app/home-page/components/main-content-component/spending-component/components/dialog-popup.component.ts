import {Component, Inject, NgZone, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {SpendingIconsModel} from 'src/app/models/spending-icons.model';
import {ProfitTypesModel} from 'src/app/models/profit-types.model';

export interface DialogData {
  type?: string;
  spendingValue?: number;
  spendingDescription?: string;
  isSpending?: boolean;
  profits?: ProfitTypesModel[];
  isProfile?: boolean;
  isNewSpending?: boolean;
  profileItem?: string;
  profileValue?: string;
  spendingIcons?: SpendingIconsModel;
}

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.scss']
})

export class DialogPopupComponent {

  public selected: any;

  constructor(private _ngZone: NgZone,
              public dialogRef: MatDialogRef<DialogPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {}

  public closePopup(): void {
    this.dialogRef.close();
  }

}
