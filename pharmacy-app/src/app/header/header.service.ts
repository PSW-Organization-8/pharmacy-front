import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pharmacyServerPort } from '../app.consts';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _url = pharmacyServerPort
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'ApiKey':  'fds15d4fs6'
    })
  }

  public getNumber(){
    return this.http.get(this._url + 'Notification/number', this.httpOptions);
  }
}
