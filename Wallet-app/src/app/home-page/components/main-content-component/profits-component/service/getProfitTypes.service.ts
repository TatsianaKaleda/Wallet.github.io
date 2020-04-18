import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class GetProfitTypesService {

  constructor(private http: HttpClient) {
  }

  private getProfitTypesUrl = 'http://localhost:3004/profitTypes';

  public getProfitTypes(): Observable<any> {
    return this.http.get(this.getProfitTypesUrl);
  }

}
