import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {UserModel} from 'src/app/login-page/models/user.model';
import {SpendingModel} from "../../../../../login-page/models/spending.model";


@Injectable()
export class AddSpendingService {

  constructor(private http: HttpClient) {
  }

  getUserUrl = 'http://localhost:3004/employee';

  public addSpending(id: number, spendingValue: number, spendingDescription: string, spendingType: string, currentMoment: number): any {
    let customerByEmailUrl = this.getUserUrl + "/" + id;
    let changedUserData: UserModel;

    this.getUserData(customerByEmailUrl)
      .subscribe(
        (user) => {
          if (user) {
            const spending = user.spending.find((item: SpendingModel) => item.type === spendingType);
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

  public getUserData(customerByEmailUrl: string): Observable<UserModel> {
    return this.http.get<UserModel>(customerByEmailUrl);
  }

}
