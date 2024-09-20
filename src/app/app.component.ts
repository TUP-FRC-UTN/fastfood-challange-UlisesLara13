import { Component } from '@angular/core';
import { RestaurantComponent } from './restaurant/restaurant.component';

@Component({
  selector: 'app-root',
  template: '<app-restaurant></app-restaurant>',
  standalone: true,
  imports: [RestaurantComponent]
})
export class AppComponent {}