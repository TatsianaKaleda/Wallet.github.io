import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../../../login-page/models/user.model";
import {SpendingModel} from "../../../../login-page/models/spending.model";
import {ProfitItemModel} from "../../../../login-page/models/profit.item.model";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  host: {
    "[class.wlt-report-container]": "true"
  }
})

export class ReportComponent implements OnInit {

  @Input()
  public currentUser: UserModel;

  public gradient: boolean = true;
  public dataSource: SpendingModel[];
  public totalSpending: number;
  public totalProfits: number;

  colorScheme = {
    domain: [
      '#00a16f',
      '#001C13',
      '#00FFAB',
      '#DEB887',
      '#EAE784',
      '#E66646',
      '#1F8DFF',
      '#647A5B',
      '#00A793',
      '#9BAEBC',
      '#0066AA',
      '#9BB0A5',
      '#B0B050'
    ]
  };

  constructor() {}

  ngOnInit(): void {
    this.dataSource = this.currentUser.spending;
    this.totalSpending = this.getTotalValue(this.currentUser.spending);
    this.totalProfits = this.getTotalValue(this.currentUser.profit);
  }

  public getTotalValue(item: SpendingModel[] | ProfitItemModel[]): number {
    let totalValue: number = 0;
    item.forEach((item: SpendingModel) => {
      totalValue += item.value;
    });
    return totalValue;
  }
}
