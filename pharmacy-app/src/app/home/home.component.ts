import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pharmacyServerPort } from '../app.consts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`http://localhost:8080/pharmacy`).subscribe((data) => {
      console.log(data);

    })
  }

}
