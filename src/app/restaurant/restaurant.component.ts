import { Component } from '@angular/core';
import { PosComponent } from '../pos/pos.component';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { DeliveryPointComponent } from '../delivery-point/delivery-point.component';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  standalone: true,
  imports: [PosComponent, KitchenComponent, DeliveryPointComponent]
})
export class RestaurantComponent {}
