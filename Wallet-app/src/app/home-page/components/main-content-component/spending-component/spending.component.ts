import {Component, Input, OnInit, Output, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DialogPopupComponent } from './components/dialog-popup.component';




@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.scss']
})
export class SpendingComponent {
  fileNameDialogRef: MatDialogRef<DialogPopupComponent>;

  constructor(private dialog: MatDialog) {}

  public openDialog(): void {
    this.fileNameDialogRef = this.dialog.open(DialogPopupComponent);
  }
}

