import {Component, Input, OnInit, Output, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DialogPopupComponent } from './components/dialog-popup.component';
import {UserModel} from "../../../../login-page/models/user.model";
import {AddSpendingService} from "./service/addSpending.service";
import {GetSpendingIconsService} from "./service/getSpendingIcons.service";
import {SpendingIconsModel} from "../../../../models/spending-icons.model";
import {Observable} from "rxjs";
import {SpendingModel} from "../../../../login-page/models/spending.model";

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.scss']
})
export class SpendingComponent implements OnInit {

  @Input()
  public currentUser: UserModel;

  public spendingValue: number;
  public spendingDescription: string;
  public dataSource: SpendingModel[];
  public displayedColumns: string[] = ['description', 'value', 'date'];
  public spendingIcons: Observable<SpendingIconsModel[]>;
  fileNameDialogRef: MatDialogRef<DialogPopupComponent>;

  constructor(private dialog: MatDialog,
              private getSpendingIconsService: GetSpendingIconsService,
              private addSpendingService: AddSpendingService) {}

  ngOnInit(): void {
    this.getSpendingIconsService.getSpendingIcons().subscribe(
      (response) => {
        if (response) {
          if (response.length != 0) {
            this.spendingIcons = response;
          }
        }
      },
      (error) => {
        console.error('error caught in component') //ошибка на сервере
      }
    );
    this.dataSource = this.currentUser.spending;
  }

  public openDialog(type: string, icon: string): void {
    this.fileNameDialogRef = this.dialog.open(DialogPopupComponent, {
      data: {
        type: type,
        spendingValue: this.spendingValue,
        spendingDescription: this.spendingDescription,
        isSpending: true
      }
    });

    this.fileNameDialogRef.afterClosed().subscribe(result => {
      let currentMoment: number = new Date().getTime();
      this.addSpendingService.addSpending(this.currentUser.id, +result[0], result[1], type, currentMoment)
    });
  }

  public openAddCategoryDialog(): void {
    this.fileNameDialogRef = this.dialog.open(DialogPopupComponent, {
      data: {
        isNewSpending: true,
        spendingIcons: this.spendingIcons
      }
    });
    this.fileNameDialogRef.afterClosed().subscribe(result => {
      this.addSpendingService.addSpendingCategory(this.currentUser.id, result[1], result[0])
    });
  }
}
