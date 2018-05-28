import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Placement } from '../placement';
import { HelloComponent } from './hello.component';
import { pListComponent } from './pList.component';
import { PlacementComponent } from './placement.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, pListComponent, PlacementComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {


}
