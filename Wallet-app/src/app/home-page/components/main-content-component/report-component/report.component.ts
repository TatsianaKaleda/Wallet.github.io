import {Component, NgModule, Input} from '@angular/core';
import {UserModel} from "../../../../login-page/models/user.model";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {

  @Input()
  public currentUser: UserModel;

  showLegend = true;
  gradient: boolean = true;

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

  constructor() {
  }

  onSelect(data): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
