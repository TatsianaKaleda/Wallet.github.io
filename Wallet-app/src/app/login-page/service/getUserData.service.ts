import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";
import {map} from "rxjs/operators";
// import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';

@Injectable()
export class AuthorizationService {
  constructor(private http: HttpClient) {
  }

  getUserUrl = 'http://localhost:3004/employee';

  public getUserData(email: string, password: string): Observable<any> {
    return this.http.get(this.getUserUrl + "?email=" + email + "&password=" + password);
  }

  public userRegistration(user: UserModel): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    let options = {
      headers: headers,
    };
    const httpOptions:any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      }),
      observe: 'response',
    };

    return this.http.post(this.getUserUrl, user, httpOptions);
  }
}
