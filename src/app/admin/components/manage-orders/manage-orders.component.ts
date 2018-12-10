import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../cart/services/order.service';
import { Order } from '../../../cart/models/order';
import { OrderObservableService } from 'src/app/cart/services/order-observable.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  orders$: Observable<Order[]>;

  constructor(
    private orderService1: OrderService,
    private orderService: OrderObservableService
  ) { }

  ngOnInit() {
    this.orders$ = this.orderService.getOrders();
  }

  onDelete(orderId: number): void {
    this.orderService1.deleteOrder(orderId);
  }

  onDone(orderId: number): void {
    this.orderService1.markAsDone(orderId);
  }
}
