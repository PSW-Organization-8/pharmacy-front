import { Component, OnInit } from '@angular/core';
import { AllObjectionsViewService } from './all-objections-view.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-objections-view',
  templateUrl: './all-objections-view.component.html',
  styleUrls: ['./all-objections-view.component.css']
})
export class AllObjectionsViewComponent implements OnInit {

  objections: any;
  text: any;

  constructor(private service: AllObjectionsViewService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllObjections();
  }

  getAllObjections(): void{
    this.service.getAllObjectionsFromServer().subscribe(objection =>{ this.objections = objection;
    console.log(objection)});
  }

  addResponse(objection:any): void{
      objection.textResponse = this.text;
      this.service.addResponse(objection).subscribe(data =>{
        this.toastr.success('Successfully created response')
        location.reload();
        });

  }

}
