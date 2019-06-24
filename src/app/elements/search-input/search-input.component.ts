import {
  Component,
  OnInit,
  forwardRef,
  ElementRef,
  ViewChild,
  Output,
  Input
} from '@angular/core';
import { BaseControlValueAccessor } from '../BaseControlValueAccessor';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInputComponent),
      multi: true
    }
  ]
})
export class SearchInputComponent extends BaseControlValueAccessor<string>{
  @Input() customWidth = "160";
}
