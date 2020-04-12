import {Component, Input, OnInit, Output} from "@angular/core";
import {FormControl, Validators} from '@angular/forms';
import { ProfitsModel } from 'src/app/login-page/models/profits.model';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DialogPopupComponent } from '../spending-component/components/dialog-popup.component';

@Component({
  selector: 'app-profits',
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.scss']
})
export class ProfitsComponent implements OnInit {

  fileNameDialogRef: MatDialogRef<DialogPopupComponent>;

  profitsControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  public profits: ProfitsModel[] = [
    {name: 'Credit card'},
    {name: 'Salary'},
    {name: 'Savings money'},
    {name: 'Cash'},
    {name: ' Premium'},
  ];
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openProfitsPopup() {
    this.fileNameDialogRef = this.dialog.open(DialogPopupComponent, {
      data: {profits: this.profits}
    });
  }
}







