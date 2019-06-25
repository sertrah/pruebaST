import { FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITrackingInfo } from '../../elements/card-detail/ItrackingInfo';
import { Store } from '@ngrx/store';
import { insertList, filter, addNewItem } from '../../reducers';
import { Observable } from 'rxjs';
import { distinctUntilChanged, debounceTime, map, takeUntil, tap } from 'rxjs/operators';
import { TakeUntilComponent } from '../../elements/takeUntil';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
@TakeUntilComponent
export class HomeComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {}

  trackList$: Observable<ITrackingInfo[]>;
  inputSearch: FormControl = new FormControl('');
  spiaDestroyed;

  tamanoDatos = 0;
  tamanoPagina = 4;
  opcionesPaginacion = [4, 25, 50, 100];
  indexPagina = 0;

  trackingItems: ITrackingInfo[] = [
    {date: new Date(), departure: 'Housiton, TX, 33619', arrival: 'Atlanta, GA, 40123', price: 250, amount: 2, status: true },
    {date: new Date(new Date().getDate() + 1 ), departure: 'Housiton, TX, 32619', arrival: 'Harlem, GA, 30123', price: 10, amount: 3, status: false },
    {date: new Date(2019, 5, 2), departure: 'Harlem, TX, 33619', arrival: 'Atlanta, GA, 10123', price: 2, amount: 1, status: false },
    {date: new Date(2019, 4, 8), departure: 'Housiton, TX, 33619', arrival: 'Atlanta, GA, 30123', price: 30, amount: 4, status: true },
  ];
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.trackList$ = this.store.select('reducer', 'trackingInfo').pipe(tap((x) => {
      x && this.actualizarDatosPorPagina();
      x && (this.tamanoDatos = x.length); }));

    this.inputSearch.valueChanges
    .pipe(
      debounceTime(600),
      distinctUntilChanged(),
      takeUntil(this.spiaDestroyed()),
      map((x) => x.target.value)
      )
    .subscribe((x: string) => {
      this.store.dispatch({type: filter, payload:  x});
    });
    setTimeout(() => {
      this.store.dispatch({type: insertList, payload: this.trackingItems});
    }, 1500);
  }

  addNewItem(){
    const a: ITrackingInfo = {date: new Date(), departure: 'NEW, TX, 33619', arrival: 'NEW, GA, 40123', price: 150, amount: 1, status: false};
    this.store.dispatch({type: addNewItem, payload: a});
    alert('New registration added, there is no budget for luxuries (╥_╥)');
  }

  cambiarPagina($event: PageEvent) {
    this.tamanoPagina = $event.pageSize;
    this.indexPagina = $event.pageIndex;
    this.actualizarDatosPorPagina();
  }

  actualizarDatosPorPagina() {
    // TODO: Pasar al storage
    const offset = this.indexPagina * this.tamanoPagina;
    this.trackingItems = this.trackingItems
      .slice(offset, offset + this.trackingItems.length);
  }
}
