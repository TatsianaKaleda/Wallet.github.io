import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {UserModel} from 'src/app/login-page/models/user.model';
import {SpendingModel} from "src/app/login-page/models/spending.model";

@Injectable()
export class AddSpendingService {

  constructor(private http: HttpClient) {
  }

  getUserUrl = 'http://localhost:3004/employee';

  public addSpending(id: number, spendingValue: number, spendingDescription: string, spendingType: string, currentMoment: number): any {
    let customerByEmailUrl = this.getUserUrl + "/" + id;

    this.getUserData(customerByEmailUrl)
      .subscribe(
        (user) => {
          if (user) {
            let spending;
            if (!user.spending) {
              user.spending = [
                {
                  "type": spendingType,
                  "icon": "",
                  "name": spendingType,
                  "value": 0
                }
              ];
            }

            if (user.spending) {
              spending = user.spending.find((item: SpendingModel) => item.type === spendingType);
            } else {
              spending = {};
            }

            if (!spending.spendingHistory) {
              spending.spendingHistory = [];
            }
            spending.spendingHistory.push({
              "value": spendingValue,
              "description": spendingDescription,
              "date": currentMoment
            });

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

  public addSpendingCategory(id: number, icon: string, name: string): any {
    let customerByEmailUrl: string = this.getUserUrl + "/" + id;

    this.getUserData(customerByEmailUrl)
      .subscribe(
        (user) => {
          if (user) {
            if (!user.spending.find((item: SpendingModel) => item.icon === icon)) {
              user.spending.push({
                "type": name,
                "icon": icon,
                "value": 0,
                "name": name
              })
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

  public getUserData(customerByEmailUrl: string): Observable<UserModel> {
    return this.http.get<UserModel>(customerByEmailUrl);
  }

}
