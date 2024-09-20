import { Component, OnInit } from '@angular/core';
import { OrderService } from '../Services/order.service';
import { Order } from '../Models/order.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery-point',
  templateUrl: './delivery-point.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class DeliveryPointComponent implements OnInit {
  readyOrders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.updateOrders();
  }

  updateOrders() {
    this.readyOrders = this.orderService.getReadyOrders();
  }

  deliverOrder(order: Order) {
    this.orderService.deliverOrder(order);
    this.updateOrders();
  }
}
