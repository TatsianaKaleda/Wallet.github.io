import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../../../login-page/models/user.model";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogPopupComponent} from "../spending-component/components/dialog-popup.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  public currentUser: UserModel;

  fileNameDialogRef: MatDialogRef<DialogPopupComponent>;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {}

  public openChangeFirstName(profileName: string): void {
    this.fileNameDialogRef = this.dialog.open(DialogPopupComponent, {
      data: {
        isProfileFirstName: true,
        profileItem: profileName,
      }
    });
  }

  public openChangeLastName(profileName: string): void {
    this.fileNameDialogRef = this.dialog.open(DialogPopupComponent, {
      data: {
        isProfileLastName: true,
        profileItem: profileName,
      }
    });

    // this.fileNameDialogRef.afterClosed().subscribe(result => {
    //   let currentMoment: number = new Date().getTime();
    //   this.addSpendingService.addSpending(this.currentUser.id, +result[0], result[1], type, currentMoment)
    // });
  }
}
