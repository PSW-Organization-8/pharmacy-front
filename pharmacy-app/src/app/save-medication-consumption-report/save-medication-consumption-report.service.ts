import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { pharmacyServerPort } from '../app.consts';



@Injectable({
  providedIn: 'root'
})
export class SaveMedicationConsumptionReportService {
  private _url = pharmacyServerPort;
  toastr: any;
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      responseType: 'blob'
    })
  };

  public DownloadReport(){
    
    return this.http.get(this._url +'medicationConsumption',{responseType:'blob'});
  }
  
}
