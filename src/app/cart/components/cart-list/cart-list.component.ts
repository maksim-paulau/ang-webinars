import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CartService } from '../../cart.service';
import { IProduct } from '../../../products/models/product.interface';
import { CartItem } from '../../models/cart-item';
import { OrderByPipe } from '../../../shared/order-by.pipe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [OrderByPipe]
})
export class CartListComponent implements OnInit {  

  public sortBy: string;
  public sortDesc: boolean = true;

  constructor(private cartService: CartService,
              private orderByPipe: OrderByPipe) { }

  ngOnInit() {    
  }

  onClear(): void {
    this.cartService.clear();    
  }  

  onRemove(product: IProduct): void {
    this.cartService.removeProduct(product);
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
