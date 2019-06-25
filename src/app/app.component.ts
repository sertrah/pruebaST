import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { smartFilter } from './reducers';
import { TakeUntilComponent } from './elements/takeUntil';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
@TakeUntilComponent
export class AppComponent  implements OnInit, OnDestroy{
  ngOnDestroy(): void {}
  spiaDestroyed;

  ngOnInit(): void {
    this.nestedForm.valueChanges
    .pipe(takeUntil(this.spiaDestroyed()))
    .subscribe((x)=> {
      this.validateFilterChanged(x);
    });
  }
  constructor(private store: Store<any>){
  }
  nestedForm: FormGroup = new FormGroup({
    date: new FormControl(false),
    status: new FormControl(false),
    favorite: new FormControl(false),
  });
  
  validateFilterChanged(d){
    let v = {};
    Object.keys(d).map((key) => d[key] && key).map(x => x && (v[x] = true));
    this.store.dispatch({type: smartFilter, payload: v });
  }
}
