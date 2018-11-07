import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../../products/interfaces/product';

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

  get products(): IProduct[] {
    return this.cartService.productsInCart;
  }
}
