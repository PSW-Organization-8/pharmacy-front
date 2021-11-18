import { Component, OnInit } from '@angular/core';
import { News } from './news';
import { CreateNewsService } from './create-news.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {

  constructor(
    private createNewsService: CreateNewsService,
    private toastr: ToastrService
    ) { }

   model = new News("", "", new Date(-8640000000000000), new Date(-8640000000000000))

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    this.model.DurationStart = new Date(this.model.DurationStart)
    this.model.DurationEnd = new Date(this.model.DurationEnd)
    
    if (!this.validInputs()){
      return;
    }

    this.createNewsService.createNews(this.model).subscribe(
      (data) => {
        this.toastr.success('Successfully created news')
        this.model = new News("", "", new Date, new Date)
      },
      (error) => {
        this.toastr.error('There is an error')
      }
    )
  }

  isValidDate(d: any): boolean {
    return d instanceof Date && !isNaN(d.getTime());
  }

  resetDateRange(): void{
    this.model.DurationStart = new Date(-8640000000000000)
    this.model.DurationEnd = new Date(-8640000000000000)
  }
   
  validInputs(): boolean {
    if (this.model.Title == "") {
      this.toastr.error('Title is missing')
      return false;
    }
    if (this.model.Text == "") {
      this.toastr.error('Text is missing')
      return false;
    }
    if (this.isValidDate(this.model.DurationEnd) && this.isValidDate(this.model.DurationEnd)) {
      let minYear = new Date(-8640000000000000).getFullYear()
      if (this.model.DurationStart > this.model.DurationEnd || minYear == this.model.DurationStart.getFullYear() || minYear == this.model.DurationEnd.getFullYear()) {
        this.toastr.error('Date range is invalid')
        this.resetDateRange()
        return false;
      }
    } else {
      this.toastr.error('Date range is invalid')
        this.resetDateRange()
        return false;
    }
    return true;
  }
}
