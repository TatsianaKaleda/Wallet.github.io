import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {UserModel} from "../../../login-page/models/user.model";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  host: {
    "[class.wlt-home-main-content]": "true"
  }
})
export class MainContentComponent implements OnInit {

  @Input()
  public currentUser: UserModel;

  @Output()
  public showBigMenu = new EventEmitter<any>();

  public test: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showBigMenuEvent(): void {
    this.showBigMenu.emit();
  }
}
