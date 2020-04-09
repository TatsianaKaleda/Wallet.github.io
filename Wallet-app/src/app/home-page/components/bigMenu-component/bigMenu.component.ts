import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {NavigationEnum} from "../../../constants/navigation.enum";

@Component({
  selector: 'app-bigMenu',
  templateUrl: './bigMenu.component.html',
  styleUrls: ['./bigMenu.component.scss']
})
export class BigMenuComponent implements OnInit {

  @Input()
  public activePage: string;

  @Output()
  public activePageChange: EventEmitter<any> = new EventEmitter<any>();

  public navigationEnum = NavigationEnum;
  private showSmallMenu: boolean;
  public test: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public moveToPage(pageUrl: string): void {
    this.activePage = pageUrl;
    this.activePageChange.emit(pageUrl);
  }

  public openReportWindow(): void {
    this.test = false;
  }
}
