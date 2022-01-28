import { Component, OnInit } from '@angular/core';
import { Head } from 'rxjs';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  number:any
  constructor(private service : HeaderService) { }

  ngOnInit(): void {
    this.getNumber();
  }

  getNumber(): void{
    this.service.getNumber().subscribe(response =>{ this.number = response;});
}
}
