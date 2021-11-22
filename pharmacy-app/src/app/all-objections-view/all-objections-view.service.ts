import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pharmacyServerPort } from '../app.consts';

@Injectable({
  providedIn: 'root'
})
export class AllObjectionsViewService {

  private _url = pharmacyServerPort;
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'ApiKey':  'fds15d4fs6'
    })
  };

  public getAllObjectionsFromServer(): Observable<any>{
    return this.http.get<any>(this._url + 'objection', this.httpOptions);
  }

  public addResponse(response: any){
    return this.http.post(this._url + 'response', response);
  }
}
