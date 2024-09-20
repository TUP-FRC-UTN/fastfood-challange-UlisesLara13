import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from '../Services/order.service';
import { Order } from '../Models/order.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  standalone: true,
  imports: [FormsModule]
})
export class PosComponent {
  constructor(private orderService: OrderService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const order = new Order(form.value.name, form.value.description);
      this.orderService.addOrder(order);
      form.reset();
    }
  }
}
