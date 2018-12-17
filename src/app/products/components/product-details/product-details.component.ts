import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductModel } from '../../models/product';
import { CartService } from '../../../cart/services/cart.service';
import { Subscription } from 'rxjs';

import { AppState } from './../../../core/+store/app.state';
import { getSelectedProductByUrl } from './../../../core/+store/products';
import { Store, select } from '@ngrx/store';
import * as RouterActions from './../../../core/+store/router/router.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  public product: ProductModel;
  public notFound = false;

  private sub: Subscription;

  constructor(
    private cartService: CartService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.sub = this.store.pipe(select(getSelectedProductByUrl))
      .subscribe(product => this.product = product);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onAddToCart(): void {
    this.cartService.addProduct(this.product);
  }

  onDisplayFeedback(): void {
    this.store.dispatch(new RouterActions.Outlet({outlets: { feedback: ['feedback'] } }));
  }
}
