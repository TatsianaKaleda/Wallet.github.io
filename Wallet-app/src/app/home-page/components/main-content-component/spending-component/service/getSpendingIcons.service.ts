import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class GetSpendingIconsService {

  constructor(private http: HttpClient) {
  }

  private getIconsUrl = 'http://localhost:3004/spendingIcons';

  public getSpendingIcons(): Observable<any> {
    return this.http.get(this.getIconsUrl);
  }

}
