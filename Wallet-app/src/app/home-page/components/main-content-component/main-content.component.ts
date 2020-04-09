import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {UserModel} from "../../../login-page/models/user.model";
import {NavigationEnum} from "../../../constants/navigation.enum";

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
  @Input()
  public activePage: string;

  @Output()
  public showBigMenu = new EventEmitter<any>();
  @Output()
  public activePageChange: EventEmitter<any> = new EventEmitter<any>();

  public navigationEnum = NavigationEnum;

  constructor() { }

  ngOnInit(): void {
  }

  public showBigMenuEvent(): void {
    this.showBigMenu.emit();
  }

  public moveToPage(pageUrl: string): void {
    this.activePageChange.emit(this.activePage);
  }

}
