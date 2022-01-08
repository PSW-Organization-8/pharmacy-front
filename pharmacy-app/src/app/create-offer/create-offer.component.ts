import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AllActiveTendersViewService } from '../all-active-tenders-view/all-active-tenders-view.service';
import { CreateOfferService } from './create-offer.service';
import { OfferMedication } from './offerMedication';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {

  tender: any;
  medicationList: Array<OfferMedication>;
  pharmacies: any;
  selectedPharmacy: any;
  availableMedication: any;

  selectedMedication: any;
  enteredQuantity: any;
  enteredPrice: any;

  isModalActive: any;
  isListEmpty: any;

  constructor(private tenderService: AllActiveTendersViewService,
    private toastr: ToastrService,
    private router: Router,
    private offerService: CreateOfferService) {
      this.medicationList = new Array;
      this.isModalActive = false;
      this.selectedPharmacy = 0;
      this.isListEmpty = true;
     }


  ngOnInit(): void {
    this.tender = this.tenderService.getSelectedTender();
    this.pharmacies = this.offerService.getPharmacies().subscribe(
      (data)=>{
        this.pharmacies = data
      },
      (error)=>{
        this.toastr.error("There is an error")
      }
    );
  }

  sendOffer(): void{
    let offer={
      tenderId: this.tender.id,
      pharmacyId: this.selectedPharmacy,
      components: this.medicationList
    }
    this.offerService.createOffer(offer).subscribe((data)=>{
      this.router.navigate(['allTenders'])
    },
    (error)=>{
      this.toastr.error("There is an error")
    });
  }

  removeMedication(i: number) {
    this.medicationList.splice(i, 1);
    if(this.medicationList.length==0){
      this.isListEmpty = true;
    }
  }

  getMedication(){
    this.offerService.getMedicationForPharmacy(this.selectedPharmacy).subscribe(
      (data)=>{
        this.availableMedication = data
        this.isModalActive = true;
        console.log(this.isModalActive);
      },
      (error)=>{
        this.toastr.error("There is an error")
      }
    );;
  }

  addMedication(): void{
    let medication = new OfferMedication(this.selectedMedication.id, this.selectedMedication.name, this.enteredQuantity, this.enteredPrice);
    this.medicationList.push(medication);
    this.isListEmpty = false;
  }

  changeOffer(id: any){
    this.selectedMedication = id;
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }


}
