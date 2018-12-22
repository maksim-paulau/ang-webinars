import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class OrderObservableService {

  private ordersUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.ordersUrl}/${id}`);
  }

  createOrder(name: string, phones: string[], products: CartItem[], price: number): Observable<Order> {
    return this.getOrders().pipe(
      switchMap((orders) => {
        const newOrder = new Order(orders.length + 1, name, phones, products, price);
        return this.http.post<Order>(this.ordersUrl, JSON.stringify(newOrder), {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }); })
    );
  }
}
