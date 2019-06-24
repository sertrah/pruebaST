import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
    this.nestedForm.valueChanges.subscribe(console.log);
  }
  title = 'pruebaST';

  nestedForm: FormGroup = new FormGroup({
    sale: new FormControl(true),
    date: new FormControl(false),
    favorite: new FormControl(false),
  });

}
