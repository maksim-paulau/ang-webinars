import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../../products/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {  

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
