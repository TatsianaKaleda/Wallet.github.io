import {Component, Input, OnInit, Output, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DialogPopupComponent } from './components/dialog-popup.component';
import {UserModel} from "../../../../login-page/models/user.model";
import {AddSpendingService} from "./service/addSpending.service";

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.scss']
})
export class SpendingComponent {

  @Input()
  public currentUser: UserModel;

  public spendingValue: number;
  public spendingDescription: string;
  fileNameDialogRef: MatDialogRef<DialogPopupComponent>;

  constructor(private dialog: MatDialog,
              private addSpendingService: AddSpendingService) {}

  public openDialog(type: string): void {
    this.fileNameDialogRef = this.dialog.open(DialogPopupComponent, {
      data: {
        type: type,
        spendingValue: this.spendingValue,
        spendingDescription: this.spendingDescription
      }
    });

    this.fileNameDialogRef.afterClosed().subscribe(result => {
      let currentMoment: number = new Date().getTime();
      this.addSpendingService.addSpending(this.currentUser.id, +result[0], result[1], type, currentMoment)
    });
  }
}

