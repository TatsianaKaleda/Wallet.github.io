import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-small-menu',
  templateUrl: './small-menu.component.html',
  styleUrls: ['./small-menu.component.scss']
})
export class SmallMenuComponent implements OnInit {

  @Output()
  showBigMenu = new EventEmitter<any>();

  public test: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public openProFileWindow(): void {
    this.test = true;
  }

  public openProfitWindow(): void {
    this.test = false;
  }

  public openSpendingWindow(): void {
    this.test = false;
  }

  public openReportWindow(): void {
    this.test = false;
  }

  public openBigMenu(): void {
    this.showBigMenu.emit();
  }
}
