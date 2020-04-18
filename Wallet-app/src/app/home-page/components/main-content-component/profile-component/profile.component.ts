import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../../../login-page/models/user.model";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogPopupComponent} from "../spending-component/components/dialog-popup.component";
import {ChangePersonalDataService} from "./service/changePersonalData.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  public currentUser: UserModel;

  fileNameDialogRef: MatDialogRef<DialogPopupComponent>;

  constructor(private dialog: MatDialog,
              private changePersonalDataService: ChangePersonalDataService) { }

  ngOnInit(): void {}

  public changeFirstNamePopup(profileName: string, profileValue: string): void {
    this.fileNameDialogRef = this.dialog.open(DialogPopupComponent, {
      data: {
        isProfile: true,
        profileItem: profileName,
        profileValue: profileValue
      }
    });

    this.fileNameDialogRef.afterClosed().subscribe(result => {
      this.changePersonalDataService.cgangeFirstName(this.currentUser.id, result[0]);
    });
  }

  public changeLastNamePopup(profileName: string, profileValue: string): void {
    this.fileNameDialogRef = this.dialog.open(DialogPopupComponent, {
      data: {
        isProfile: true,
        profileItem: profileName,
        profileValue: profileValue
      }
    });

    this.fileNameDialogRef.afterClosed().subscribe(result => {
      this.changePersonalDataService.cgangeFirstName(this.currentUser.id, result[0])
    });
  }
}
