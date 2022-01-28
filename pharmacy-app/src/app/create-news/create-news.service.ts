import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './news';
import { pharmacyServerPort } from '../app.consts';

@Injectable({
  providedIn: 'root'
})
export class CreateNewsService {
  private _url = pharmacyServerPort
  constructor(private http: HttpClient) { }

  public createNews(news : News){
    return this.http.post(this._url + 'actionsAndNews', news);
  }
}
