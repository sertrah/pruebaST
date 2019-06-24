import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { smartFilter } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
    this.nestedForm.valueChanges.subscribe((x)=> {
      this.validateFilterChanged(x);
    });

    this.store.select('reducer').subscribe(console.log);
  }
  stateFilter;
  title = 'pruebaST';
  constructor(private store: Store<any>){
  }
  nestedForm: FormGroup = new FormGroup({
    date: new FormControl(false),
    status: new FormControl(false),
    favorite: new FormControl(false),
  });
  
  validateFilterChanged(d){
    let v = {};
    const a = Object.keys(d).map((key) => d[key] && key).map(x => x && (v[x] = true));
    console.log(v);
    this.store.dispatch({type: smartFilter, payload: v });
    this.stateFilter = d;
  }
}
