import { Component, OnInit, Input } from '@angular/core';
import { ITrackingInfo } from './ItrackingInfo';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.sass']
})
export class CardDetailComponent implements OnInit {
  date = new Date();
  trackingInfo: ITrackingInfo;
  @Input() set values(val: ITrackingInfo){
    this.trackingInfo= val;
  }
  constructor() { }

  ngOnInit() {
  }

}
