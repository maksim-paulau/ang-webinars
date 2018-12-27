import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../../products/models/product.interface';
import { CartItem } from '../../models/cart-item';
import { OrderByPipe } from '../../../shared/order-by.pipe';
import { OrderService } from '../../services/order.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { OrderObservableService } from '../../services/order-observable.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [OrderByPipe]
})
export class CartListComponent implements OnInit {

  public sortBy: string;
  public sortDesc = true;
  public showOrderForm: boolean;

  constructor(private cartService: CartService,
              private orderService: OrderObservableService,
              private orderByPipe: OrderByPipe,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
        this.showOrderForm = !!paramMap.get('showOrderForm');
    });
  }

  onClear(): void {
    this.cartService.clear();
  }

  onRemove(product: IProduct): void {
    this.cartService.removeProduct(product);
  }

  onOrderSubmit(formData: any): void {
    const sub = this.orderService.createOrder(formData.name, formData.phones, this.cartService.productsInCart, this.cartService.summaryPrice)
    .subscribe(() => {
      this.showOrderForm = false;
      this.onClear();
      sub.unsubscribe();
    });
  }

  onShowOrderForm(): void {
    this.router.navigate(['/cart', {showOrderForm: true}]);
  }

  onOrderFormCancel(): void {
    this.router.navigate(['/cart']);
  }

  get products(): CartItem[] {
    if (this.sortBy) {
      return this.orderByPipe.transform(this.cartService.productsInCart, this.sortBy, this.sortDesc);
    }
    return this.cartService.productsInCart;
  }

  get quantity(): number {
    return this.cartService.productsQuantity;
  }

  get price(): number {
    return this.cartService.summaryPrice;
  }
}
