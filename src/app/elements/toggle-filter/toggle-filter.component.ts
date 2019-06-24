import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from '../BaseControlValueAccessor';

@Component({
  selector: 'toggle-filter',
  templateUrl: './toggle-filter.component.html',
  styleUrls: ['./toggle-filter.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleFilterComponent),
      multi: true
    }
  ]
})
export class ToggleFilterComponent extends BaseControlValueAccessor<boolean> {
 @Input() image: string;

}
