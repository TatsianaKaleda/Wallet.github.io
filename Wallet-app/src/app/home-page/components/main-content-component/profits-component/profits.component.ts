import {Component, Input, OnInit, Output} from "@angular/core";
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {DialogPopupComponent} from '../spending-component/components/dialog-popup.component';
import {GetProfitTypesService} from "./service/getProfitTypes.service";
import {ProfitTypesModel} from 'src/app/models/profit-types.model';
import {Observable} from "rxjs";
import {AddProfitService} from "./service/addProfit.service";
import {UserModel} from "../../../../login-page/models/user.model";
import {ProfitModel} from "../../../../login-page/models/profit.model";

@Component({
  selector: 'app-profits',
  templateUrl: './profits.component.html',
  styleUrls: ['./profits.component.scss']
})
export class ProfitsComponent implements OnInit {

  @Input()
  public currentUser: UserModel;

  fileNameDialogRef: MatDialogRef<DialogPopupComponent>;
  // profitsControl = new FormControl('', Validators.required);
  // selectFormControl = new FormControl('', Validators.required);
  public profitTypes: Observable<ProfitTypesModel[]>;
  public profits: ProfitModel[];
  public displayedColumns: string[] = ['description', 'value', 'date'];

  constructor(private dialog: MatDialog,
              private getProfitTypesService: GetProfitTypesService,
              private addProfitService: AddProfitService) {}

  ngOnInit(): void {
    this.getProfitTypesService.getProfitTypes().subscribe(
      (response) => {
        if (response) {
          if (response.length != 0) {
            this.profitTypes = response;
          }
        }
      },
      (error) => {
        console.error('error caught in component') //ошибка на сервере
      }
    );

    this.profits = this.currentUser.profit;
  }

  openProfitsPopup() {
    this.fileNameDialogRef = this.dialog.open(DialogPopupComponent, {
      data: {profits: this.profitTypes}
    });
    this.fileNameDialogRef.afterClosed().subscribe(result => {
      let currentMoment: number = new Date().getTime();
      this.addProfitService.addProfit(this.currentUser.id, result[1], +result[0], result[2], currentMoment)
    });
  }
}







