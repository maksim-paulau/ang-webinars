import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../cart/services/order.service';
import { Order } from '../../../cart/models/order';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
  }

  onDelete(orderId: number): void {
    this.orderService.deleteOrder(orderId);
  }

  onDone(orderId: number): void {
    this.orderService.markAsDone(orderId);
  }
}
