import { Component, OnInit } from '@angular/core';
import { OrderService } from '../Services/order.service';
import { Order } from '../Models/order.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class KitchenComponent implements OnInit {
  pendingOrders: Order[] = [];
  cookingOrders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.updateOrders();
  }

  updateOrders() {
    this.pendingOrders = this.orderService.getOrders();
    this.cookingOrders = this.orderService.getCookingOrders();
  }

  startCooking(order: Order) {
    this.orderService.startCooking(order);
    this.updateOrders();
  }

  finishCooking(order: Order) {
    this.orderService.finishCooking(order);
    this.updateOrders();
  }
}

