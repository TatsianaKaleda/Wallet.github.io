import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {UserModel} from 'src/app/login-page/models/user.model';
import {ProfitModel} from "../../../../../login-page/models/profit.model";


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
            if (!user.profit) {
              let newProfit = this.createNewProfit(profitType);
              user.profit = [newProfit];
            }

            let profit = user.profit.find((item: ProfitModel) => item.type === profitType);

            if (profit == null) {
              let newProfit = this.createNewProfit(profitType);
              newProfit.profitHistory.push({
                "value": profitItemValue,
                "description": profitItemDescription,
                "date": currentMoment
              });
              user.profit.push(newProfit);
            } else {
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

  public createNewProfit(profitType: string): ProfitModel {
    return {
      "type": profitType,
      "name": profitType,
      "value": 0,
      "profitHistory": []
    }
  }

  public getUserData(customerByEmailUrl: string): Observable<UserModel> {
    return this.http.get<UserModel>(customerByEmailUrl);
  }

}
