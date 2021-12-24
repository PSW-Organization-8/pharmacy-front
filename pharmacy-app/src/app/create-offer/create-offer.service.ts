import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pharmacyServerPort } from '../app.consts';

@Injectable({
  providedIn: 'root'
})
export class CreateOfferService {

  constructor(private http: HttpClient) { }


  getPharmacies(){
    return this.http.get(pharmacyServerPort + "pharmacy");
  }

  getMedicationForPharmacy(pharmacyId:any){
    return this.http.get(pharmacyServerPort + "pharmacy/medication/"+pharmacyId);
  }

  createOffer(offer: any){
    console.log(offer);
    return this.http.post(pharmacyServerPort + 'pharmacyOffer', offer);
  }

}
