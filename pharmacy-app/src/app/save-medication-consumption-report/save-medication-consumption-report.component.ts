import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { pharmacyServerPort } from '../app.consts';
import { Notification } from '../notification/notification';
import Swal from 'sweetalert2';

import { SaveMedicationConsumptionReportService } from './save-medication-consumption-report.service';

@Component({
  selector: 'app-save-medication-consumption-report',
  templateUrl: './save-medication-consumption-report.component.html',
  styleUrls: ['./save-medication-consumption-report.component.css']
})
export class SaveMedicationConsumptionReportComponent implements OnInit {

  model= new Notification("",true,"");
  nameFile: any;
  constructor(private service: SaveMedicationConsumptionReportService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  DownloadReport(){

    this.service.DownloadReport().subscribe((response) => { 
    Swal.fire('New pdf file', 'You have new consumption pdf file. Please read notification!', 'info');
    alert(response)
    const blob = new Blob([response], { type: 'application/pdf' });
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = "MedicationConsumption";
    a.style.position = 'fixed';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);;
          
        //Swal.fire('New pdf file', 'You have new consumption pdf file. Please read notification!', 'info');
    }
    );

    //Swal.fire('New pdf file', 'You have new consumption pdf file. Please read notification!', 'info'); 

      //this.nameFile=response
      //this.model=new Notification("New consumption pdf file",false,"You have new file in your pharmacy folder.View.")
      //Swal.fire('New pdf file', 'You have new consumption pdf file. Please read notification!', 'info');
      //alert(this.nameFile)
  }

}
