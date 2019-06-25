import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './elements/top-bar/top-bar.component';
import { CardDetailComponent } from './elements/card-detail/card-detail.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SearchInputComponent } from './elements/search-input/search-input.component';
import { ToggleFilterComponent } from './elements/toggle-filter/toggle-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CardDetailComponent,
    SearchInputComponent,
    ToggleFilterComponent,
    ToggleFilterComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
