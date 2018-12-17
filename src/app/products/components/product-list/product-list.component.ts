import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.interface';
import { CartService } from '../../../cart/services/cart.service';

import { Store, select } from '@ngrx/store';
import { AppState } from './../../../core/+store/app.state';
import { getProductsData } from './../../../core/+store/products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Observable<IProduct[]>;

  constructor(
    private cartService: CartService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.products = this.store.pipe(select(getProductsData));

    console.log('We have a store!', this.store);
  }

  onAddToCart(product: IProduct) {
    console.log('product %s is added to cart!', product.name);
    this.cartService.addProduct(product);
  }
}
