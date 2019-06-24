import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ITrackingInfo } from 'src/app/elements/card-detail/ItrackingInfo';
import { Store } from '@ngrx/store';
import { insertList, filter, smartFilter } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime, map, takeUntil } from 'rxjs/operators';
import { TakeUntilComponent } from 'src/app/elements/takeUntil';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
@TakeUntilComponent
export class HomeComponent implements OnInit {

  trackList$: Observable<ITrackingInfo[]>;
  inputSearch: FormControl = new FormControl("");
  spiaDestroyed;

  trackingItems: ITrackingInfo[] = [
    {date: new Date(), departure: "Housiton, TX, 33619", arrival: "Atlanta, GA, 40123", price: 250, amount: 2, status: true },
    {date: new Date(new Date().getDate() +1 ), departure: "Housiton, TX, 32619", arrival: "Harlem, GA, 30123", price: 10, amount: 3, status: false },
    {date: new Date(2019, 5, 2), departure: "Harlem, TX, 33619", arrival: "Atlanta, GA, 10123", price: 2, amount: 1, status: false },
    {date: new Date(2019, 4, 8), departure: "Housiton, TX, 33619", arrival: "Atlanta, GA, 30123", price: 30, amount: 4, status: true },
  ];
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.trackList$ = this.store.select("reducer","trackingInfo");
    this.inputSearch.valueChanges
    .pipe(
      debounceTime(600),
      distinctUntilChanged(),
      takeUntil(this.spiaDestroyed()),
      map((x)=> x.target.value)
      )
    .subscribe((x: string) => {
      this.store.dispatch({type: filter, payload:  x});
    });
    setTimeout(() => {
      this.store.dispatch({type: insertList, payload: this.trackingItems});
      
    }, 1500);
  }

}
