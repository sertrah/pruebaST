import { Component, OnInit } from '@angular/core';
import { ITrackingInfo } from 'src/app/card-detail/ItrackingInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  trackingItems: ITrackingInfo[] = [
    {date: new Date(), departure: "Housiton, TX, 33619", arrival: "Atlanta, GA, 40123", price: 250, amount: 2, status: true },
    {date: new Date(1), departure: "Housiton, TX, 32619", arrival: "Harlem, GA, 30123", price: 10, amount: 3, status: false },
    {date: new Date(1), departure: "Harlem, TX, 33619", arrival: "Atlanta, GA, 10123", price: 2, amount: 1, status: false },
    {date: new Date(1), departure: "Housiton, TX, 33619", arrival: "Atlanta, GA, 30123", price: 30, amount: 4, status: true },
  ];
  constructor() { }

  ngOnInit() {

  }

}
