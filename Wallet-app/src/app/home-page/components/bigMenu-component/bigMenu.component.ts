import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-bigMenu',
  templateUrl: './bigMenu.component.html',
  styleUrls: ['./bigMenu.component.scss']
})
export class BigMenuComponent implements OnInit {

  @Output()
  showBudget = new EventEmitter<any>();

  public test: boolean = false;
  private showSmallMenu: boolean;

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
}
