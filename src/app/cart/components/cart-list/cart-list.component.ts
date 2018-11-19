import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { IProduct } from '../../../products/models/product.interface';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {  

  constructor(private cartService: CartService) { }

  ngOnInit() {    
  }

  onClear(): void {
    this.cartService.clear();    
  }  

  onRemove(product: IProduct): void {
    this.cartService.removeProduct(product);
  }

  get products(): CartItem[] {
    return this.cartService.productsInCart;
  }

  get quantity(): number {
    return this.cartService.productsQuantity;
  }

  get price(): number {
    return this.cartService.summaryPrice;
  }
}
