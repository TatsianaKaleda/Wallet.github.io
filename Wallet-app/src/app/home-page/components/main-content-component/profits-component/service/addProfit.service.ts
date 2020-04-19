import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {UserModel} from 'src/app/login-page/models/user.model';
import {ProfitModel} from "../../../../../login-page/models/profit.model";
import {ProfitItemModel} from "../../../../../login-page/models/profit.item.model";

@Injectable()
export class AddProfitService {

  constructor(private http: HttpClient) {
  }

  getUserUrl = 'http://localhost:3004/employee';

  public addProfit(id: number, profitType: string, profitItemValue: number, profitItemDescription: string, currentMoment: number): any {
    let customerByEmailUrl: string = this.getUserUrl + "/" + id;

    this.getUserData(customerByEmailUrl)
      .subscribe(
        (user) => {
          if (user) {
            let isFirstProfit: boolean = false;
            if (!user.profit) {
              user.profit = [];
              let newProfit = this.createNewProfit(profitType, profitItemValue);
              user.profit.push(newProfit);
              isFirstProfit = true;
            }

            let profit = user.profit.find((item: ProfitModel) => item.type === profitType);

            if (profit == null) {
              let newProfit = this.createNewProfit(profitType, profitItemValue);
              newProfit.profitHistory.push({
                "value": profitItemValue,
                "description": profitItemDescription,
                "date": currentMoment
              });
              user.profit.push(newProfit);
            } else {
              if (!isFirstProfit) {
                let totalValue: number = 0;
                profit.profitHistory.forEach((profit: ProfitItemModel) => {
                  totalValue += profit.value;
                });
                profit.value = totalValue + profitItemValue;
              }

              profit.profitHistory.push({
                "value": profitItemValue,
                "description": profitItemDescription,
                "date": currentMoment
              });
            }

            this.http.put<any>(customerByEmailUrl,
              user
            ).subscribe(data => {
            })
          }
        },
        (error) => {
          console.error('error caught in component') //ошибка на сервере
        }
      );
  }

  public createNewProfit(profitType: string, profitValue: number): ProfitModel {
    return {
      "type": profitType,
      "name": profitType,
      "value": profitValue,
      "profitHistory": []
    };
  }

  public getUserData(customerByEmailUrl: string): Observable<UserModel> {
    return this.http.get<UserModel>(customerByEmailUrl);
  }

}
