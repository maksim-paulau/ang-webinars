import { Injectable, Inject } from '@angular/core';
import { Order } from '../models/order';
import { CartItem } from '../models/cart-item';
import { LocalStorageService } from '../../core/services';

const ordersStorageKey = 'orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[];

  constructor(private localStorage: LocalStorageService) {
    this.orders = JSON.parse(this.localStorage.getItem(ordersStorageKey)) || [];
  }

  createOrder(name: string, phone: string, products: CartItem[], price: number) {
    const newOrder: Order = new Order(this.orders.length, name, phone, products, price);
    this.orders.push(newOrder);

    this.updateStorage();
  }

  getOrders(): Order[] {
    return this.orders;
  }

  markAsDone(id: number): void {
    const order = this.getOrder(id);
    order.done = true;
    this.updateStorage();
  }

  deleteOrder(id: number): void {
    const existingOrder: Order = this.getOrder(id);
    this.orders.splice(this.orders.indexOf(existingOrder), 1);
    this.updateStorage();
  }

  getOrder(id: number): Order {
    return this.orders.find(p => p.id === id);
  }

  private updateStorage(): void {
    this.localStorage.setItem(ordersStorageKey, JSON.stringify(this.orders));
  }
}
