import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NavigationEnum} from "../../../../constants/navigation.enum";

@Component({
  selector: 'app-small-menu',
  templateUrl: './small-menu.component.html',
  styleUrls: ['./small-menu.component.scss']
})
export class SmallMenuComponent implements OnInit {

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

  public moveToPage(pageUrl: string): void {
    this.activePage = pageUrl;
    this.activePageChange.emit(pageUrl);
  }

  public openBigMenu(): void {
    this.showBigMenu.emit();
  }

}
