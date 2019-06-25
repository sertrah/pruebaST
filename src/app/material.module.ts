import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule,
  MatSidenavModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatTabsModule,
  MatMenuModule, } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule,
    MatPaginatorModule,
  ]
})
export class MaterialModule { }
