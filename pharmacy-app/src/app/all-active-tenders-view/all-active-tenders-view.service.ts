import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pharmacyServerPort } from '../app.consts';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AllActiveTendersViewService {
  selectedTender: any;

  constructor(private http: HttpClient, private router: Router) { }


  getAll(){
    return this.http.get(pharmacyServerPort + "Tender")
  }

  createOffer(tender: any):void{
      this.selectedTender = tender;
      console.log(tender);
      this.router.navigate(['createOffer'])
  }

  getSelectedTender(): any{
    return this.selectedTender;
  }
}
