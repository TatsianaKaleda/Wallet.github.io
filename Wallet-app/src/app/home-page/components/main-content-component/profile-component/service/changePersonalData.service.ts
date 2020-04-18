import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {UserModel} from 'src/app/login-page/models/user.model';
import {SpendingModel} from "src/app/login-page/models/spending.model";

@Injectable()
export class ChangePersonalDataService {

  constructor(private http: HttpClient) {
  }

  getUserUrl = 'http://localhost:3004/employee';

  public cgangeFirstName(id: number, firstName: string): any {
    let customerByEmailUrl = this.getUserUrl + "/" + id;
    let changedUserData: UserModel;

    this.getUserData(customerByEmailUrl)
      .subscribe(
        (user) => {
          if (user) {
            user.first_name = firstName;

            this.http.put<any>(customerByEmailUrl,
                user
              ).subscribe(data => {
              document.location.reload(true);
            })
          }
        },
        (error) => {
          console.error('error caught in component') //ошибка на сервере
        }
      );
  }

  public cgangeLastName(id: number, lastName: string): any {
    let customerByEmailUrl = this.getUserUrl + "/" + id;
    let changedUserData: UserModel;

    this.getUserData(customerByEmailUrl)
      .subscribe(
        (user) => {
          if (user) {
            user.last_name = lastName;

            this.http.put<any>(customerByEmailUrl,
              user
            ).subscribe(data => {
              document.location.reload(true);
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
