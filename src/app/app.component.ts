import { Component } from '@angular/core';
import { Placement } from '../placement';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  splacement:Placement
  displayDetails(x:Placement) {
    this.splacement = x
    console.log("AppComponent:displayDetails : " + x.name)
  }
}
