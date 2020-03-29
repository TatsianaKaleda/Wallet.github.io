import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";

@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient) {}

  getUserUrl = 'http://localhost:3004/employee';

  public getUserData(email: string, password?: string): Observable<any> {
    if (password) {
      return this.http.get(this.getUserUrl + "?email=" + email + "&password=" + password);
    } else {
      return this.http.get(this.getUserUrl + "?email=" + email);
    }
  }

  public userRegistration(user: UserModel): any {
    this.http.post<any>(this.getUserUrl,
      {first_name: user.first_name, last_name: user.last_name, password: user.password, email: user.email}).subscribe(data => {
    })
  }

}
