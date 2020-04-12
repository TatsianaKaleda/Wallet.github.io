import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../../../login-page/models/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  public currentUser: UserModel;

  constructor() { }

  ngOnInit(): void {}

  // }
  // public openProfilePage(): void {
  //   this.showProfile = true;
  // }
}
