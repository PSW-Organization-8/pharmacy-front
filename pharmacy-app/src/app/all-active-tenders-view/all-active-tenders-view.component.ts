import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AllActiveTendersViewService } from './all-active-tenders-view.service';

@Component({
  selector: 'app-all-active-tenders-view',
  templateUrl: './all-active-tenders-view.component.html',
  styleUrls: ['./all-active-tenders-view.component.css']
})
export class AllActiveTendersViewComponent implements OnInit {

  constructor(private tenderService: AllActiveTendersViewService,
    private toastr: ToastrService) {
      this.currentDate = new Date();
     }

  tenders : any;
  currentDate: any;

  ngOnInit(): void {
    this.getAllTenders();
  }
  getAllTenders() {
    this.tenderService.getAll().subscribe(
      (data)=>{
        this.tenders = data
        this.setModals()
      },
      (error)=>{
        this.toastr.error("There is an error")
      }
    )
  }
  setModals() {
    for(let tender of this.tenders){
      tender.isModalActive = false;
    }
  }

  toggleModal(tender: any) {
    tender.isModalActive = !tender.isModalActive;
  }

  createOffers(tender: any){
    this.tenderService.createOffer(tender);
    console.log(tender);
  }
  isExpirationExpired(tender: any) {
    return new Date(tender.endDate) > this.currentDate;
  }

}
