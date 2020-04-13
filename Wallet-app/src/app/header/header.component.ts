import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavigationEnum} from "../constants/navigation.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public userName: string;
  @Input()
  public activePage: string;

  @Output()
  public activePageChange: EventEmitter<any> = new EventEmitter<any>();

  public navigationEnum = NavigationEnum;


  constructor() { }

  ngOnInit(): void {
  }

  public moveToPage(): void {
    this.activePage = this.navigationEnum.profile;
    this.activePageChange.emit(this.activePage);
  }
}
