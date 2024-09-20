import { Injectable } from '@angular/core';
import { Order } from '../Models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];
  private cookingOrders: Order[] = [];
  private readyOrders: Order[] = [];

  addOrder(order: Order) {
    this.orders.push(order);
  }

  getOrders() {
    return this.orders;
  }

  getCookingOrders() {
    return this.cookingOrders;
  }

  getReadyOrders() {
    return this.readyOrders;
  }

  startCooking(order: Order) {
    const index = this.orders.findIndex(o => o.number === order.number);
    if (index !== -1) {
      this.orders.splice(index, 1);
      this.cookingOrders.push(order);
    }
  }

  finishCooking(order: Order) {
    const index = this.cookingOrders.findIndex(o => o.number === order.number);
    if (index !== -1) {
      this.cookingOrders.splice(index, 1);
      this.readyOrders.push(order);
    }
  }

  deliverOrder(order: Order) {
    const index = this.readyOrders.findIndex(o => o.number === order.number);
    if (index !== -1) {
      this.readyOrders.splice(index, 1);
    }
  }
}