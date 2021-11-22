import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SaveMedicationConsumptionReportService } from './save-medication-consumption-report.service';

@Component({
  selector: 'app-save-medication-consumption-report',
  templateUrl: './save-medication-consumption-report.component.html',
  styleUrls: ['./save-medication-consumption-report.component.css']
})
export class SaveMedicationConsumptionReportComponent implements OnInit {

  constructor(private service: SaveMedicationConsumptionReportService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  DownloadReport(){

    this.service.DownloadReport().subscribe();
  }

}
